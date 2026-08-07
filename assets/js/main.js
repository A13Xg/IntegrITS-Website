(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Mobile nav toggle */
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      mobileNav.classList.toggle("is-open", !open);
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  /* Section reveal on scroll */
  var revealTargets = document.querySelectorAll(".section > .container > *:not(.flow-chart)");
  revealTargets.forEach(function (el) { el.setAttribute("data-reveal", ""); });

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Count-up statistics */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (prefersReducedMotion || !("requestAnimationFrame" in window)) {
      el.textContent = target;
      return;
    }
    var start = null;
    var duration = 900;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    window.requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { countObserver.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  /* Active nav-section highlight */
  var navLinks = document.querySelectorAll(".primary-nav a");
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = document.querySelector('.primary-nav a[href="#' + entry.target.id + '"]');
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove("is-active"); });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* Lifecycle flow chart: line draws first, then each step floats in, in order */
  var flowChart = document.getElementById("flow-chart");
  if (flowChart) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      flowChart.classList.add("is-drawn", "items-visible");
    } else {
      var flowObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              flowChart.classList.add("is-drawn", "items-visible");
              flowObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      flowObserver.observe(flowChart);
    }
  }

  /* Footprint board readout */
  var pins = document.querySelectorAll(".pin");
  var readout = document.getElementById("footprint-readout");
  if (pins.length && readout) {
    var readoutName = readout.querySelector(".readout-name");
    var readoutNote = readout.querySelector(".readout-note");
    var readoutPhoto = document.getElementById("readout-photo");
    var swapDelay = prefersReducedMotion ? 0 : 160;
    var readoutRequestId = 0;

    /* Location card slideshow: cycles the real photo plus placeholder
       slides every 3s, crossfading with a small bounce. Restarts from
       slide 0 whenever the selected location changes. */
    var readoutSlides = readout.querySelectorAll(".readout-slide");
    var slideTimer = null;
    var slideIndex = 0;
    function showSlide(i) {
      slideIndex = i;
      readoutSlides.forEach(function (s, idx) {
        s.classList.toggle("is-active", idx === i);
      });
    }
    function restartSlideshow() {
      if (slideTimer) window.clearInterval(slideTimer);
      showSlide(0);
      if (readoutSlides.length > 1 && !prefersReducedMotion) {
        slideTimer = window.setInterval(function () {
          showSlide((slideIndex + 1) % readoutSlides.length);
        }, 3000);
      }
    }
    restartSlideshow();

    pins.forEach(function (pin) {
      pin.addEventListener("click", function () {
        pins.forEach(function (p) { p.classList.remove("is-active"); });
        pin.classList.add("is-active");
        readout.classList.add("is-updating");

        var requestId = ++readoutRequestId;
        var photoSrc = pin.getAttribute("data-photo");

        function applyUpdate() {
          if (requestId !== readoutRequestId) return;
          readoutName.textContent = pin.getAttribute("data-name");
          readoutNote.textContent = pin.getAttribute("data-note");
          if (readoutPhoto && photoSrc) {
            readoutPhoto.src = photoSrc;
            readoutPhoto.alt = pin.getAttribute("data-name");
          }
          readout.classList.remove("is-updating");
          restartSlideshow();
        }

        if (readoutPhoto && photoSrc) {
          // Preload the new photo in the background so the fade-in never
          // reveals a half-loaded image or gets stuck on the old one.
          var preloader = new Image();
          var settled = false;
          function settle() {
            if (settled) return;
            settled = true;
            window.setTimeout(applyUpdate, swapDelay);
          }
          preloader.onload = settle;
          preloader.onerror = settle;
          preloader.src = photoSrc;
          if (preloader.complete) settle();
          window.setTimeout(settle, 1200);
        } else {
          window.setTimeout(applyUpdate, swapDelay);
        }
      });
    });
  }

  /* Leadership carousel: duplicate cards for a seamless loop, then auto-scroll */
  var leaderCarousel = document.getElementById("leader-carousel");
  var leaderCarouselWrap = document.querySelector(".leader-carousel-wrap");
  var carouselNavs = document.querySelectorAll(".carousel-nav");

  if (leaderCarousel && leaderCarousel.children.length) {
    var originalItems = Array.prototype.slice.call(leaderCarousel.children);
    originalItems.forEach(function (li) {
      var clone = li.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("button").forEach(function (el) { el.tabIndex = -1; });
      leaderCarousel.appendChild(clone);
    });

    /* scrollLeft rounds to whole pixels on read, so sub-pixel auto-scroll
       increments must be accumulated in a separate float, not read back. */
    var scrollPos = leaderCarousel.scrollLeft;
    var loopWidth = 0;
    function measureLoopWidth() {
      loopWidth = leaderCarousel.scrollWidth / 2;
    }
    measureLoopWidth();
    window.addEventListener("resize", measureLoopWidth);

    function applyScroll() {
      if (loopWidth > 0) {
        if (scrollPos >= loopWidth) scrollPos -= loopWidth;
        else if (scrollPos < 0) scrollPos += loopWidth;
      }
      leaderCarousel.scrollLeft = scrollPos;
    }

    if (carouselNavs.length) {
      carouselNavs.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var dir = parseInt(btn.getAttribute("data-scroll"), 10);
          var card = leaderCarousel.querySelector("li");
          var amount = card ? card.getBoundingClientRect().width + 20 : 280;
          scrollPos += dir * amount;
          applyScroll();
        });
      });
    }

    if (!prefersReducedMotion) {
      var autoScrollSpeed = 0.6;
      var isPaused = false;

      function tick() {
        if (!isPaused) {
          scrollPos += autoScrollSpeed;
          applyScroll();
        }
        window.requestAnimationFrame(tick);
      }
      window.requestAnimationFrame(tick);

      ["mouseenter", "focusin", "touchstart"].forEach(function (evt) {
        leaderCarouselWrap.addEventListener(evt, function () { isPaused = true; });
      });
      ["mouseleave", "focusout", "touchend"].forEach(function (evt) {
        leaderCarouselWrap.addEventListener(evt, function () { isPaused = false; });
      });
    }
  }

  /* Leadership profile modal */
  var leaderModal = document.getElementById("leader-modal");
  if (leaderModal && "showModal" in leaderModal) {
    var modalPhoto = document.getElementById("leader-modal-photo");
    var modalTheme = document.getElementById("leader-modal-theme");
    var modalName = document.getElementById("leader-modal-name");
    var modalTitle = document.getElementById("leader-modal-title");
    var modalBio = document.getElementById("leader-modal-bio");
    var modalClose = leaderModal.querySelector(".leader-modal-close");

    document.querySelectorAll(".leader-card").forEach(function (card) {
      card.addEventListener("click", function () {
        var name = card.getAttribute("data-name");
        modalPhoto.src = card.getAttribute("data-photo");
        modalPhoto.alt = name;
        modalTheme.textContent = card.getAttribute("data-theme");
        modalName.textContent = name;
        modalTitle.textContent = card.getAttribute("data-title");
        modalBio.textContent = card.getAttribute("data-bio");
        leaderModal.showModal();
      });
    });

    modalClose.addEventListener("click", function () { leaderModal.close(); });
    leaderModal.addEventListener("click", function (e) {
      if (e.target === leaderModal) leaderModal.close();
    });
  }
})();
