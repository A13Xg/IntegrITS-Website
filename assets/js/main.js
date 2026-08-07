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
    var readoutName = document.getElementById("readout-name-btn");
    var readoutNote = readout.querySelector(".readout-note");
    var readoutPhoto = document.getElementById("readout-photo");
    var readoutMedia = document.getElementById("readout-media");
    var readoutRequestId = 0;

    function pinPhotos(pin) {
      return [
        pin.getAttribute("data-photo"),
        pin.getAttribute("data-photo-2"),
        pin.getAttribute("data-photo-3")
      ].filter(Boolean);
    }

    function whenFadedOut() {
      if (prefersReducedMotion) return Promise.resolve();
      return new Promise(function (resolve) {
        var done = false;
        function finish() {
          if (done) return;
          done = true;
          readout.removeEventListener("transitionend", onEnd);
          resolve();
        }
        function onEnd(e) {
          if (e.target === readout && e.propertyName === "opacity") finish();
        }
        readout.addEventListener("transitionend", onEnd);
        // Fallback in case the transition never fires (e.g. tab backgrounded).
        window.setTimeout(finish, 260);
      });
    }

    // Loads straight into the real, visible <img> element and waits for
    // ITS OWN load/error event — not a decoy Image() object whose
    // "ready" signal only means the browser's HTTP cache *might* be
    // warm for the real element. Under cache-disabled or cache-averse
    // conditions that assumption doesn't hold, which is exactly what
    // let the visible photo still be mid-fetch after its stand-in had
    // already resolved. Loading the real element removes that gap
    // entirely: whatever we're waiting on IS what gets shown.
    function whenPhotoReady(src) {
      if (!src || !readoutPhoto) return Promise.resolve();
      return new Promise(function (resolve) {
        var done = false;
        function finish() {
          if (done) return;
          done = true;
          readoutPhoto.removeEventListener("load", finish);
          readoutPhoto.removeEventListener("error", finish);
          resolve();
        }
        readoutPhoto.addEventListener("load", finish);
        readoutPhoto.addEventListener("error", finish);
        readoutPhoto.src = src;
        if (readoutPhoto.complete) finish();
      });
    }

    /* Location card slideshow: when a location has more than one photo,
       cycle through them every 3s. Slide elements are rebuilt per
       selection from that pin's own data-photo/-2/-3, never left over
       from whichever location was selected before. */
    var slideTimer = null;
    var slideIndex = 0;
    function showSlide(i) {
      var slides = readoutMedia.querySelectorAll(".readout-slide");
      slideIndex = i;
      slides.forEach(function (s, idx) {
        s.classList.toggle("is-active", idx === i);
      });
    }
    function restartSlideshow() {
      if (slideTimer) window.clearInterval(slideTimer);
      showSlide(0);
      var count = readoutMedia.querySelectorAll(".readout-slide").length;
      if (count > 1 && !prefersReducedMotion) {
        slideTimer = window.setInterval(function () {
          showSlide((slideIndex + 1) % count);
        }, 3000);
      }
    }

    // Rebuilds the slide list for the currently selected location.
    // `firstSlideImg` is the already-loaded <img id="readout-photo">
    // reused as slide 0; any additional photos load natively in the
    // background since the slideshow gives them seconds before they're
    // ever shown.
    function rebuildSlides(photos, name) {
      readoutMedia.querySelectorAll(".readout-slide").forEach(function (s) { s.remove(); });

      var first = document.createElement("div");
      first.className = "readout-slide is-active";
      first.appendChild(readoutPhoto);
      readoutMedia.appendChild(first);

      for (var i = 1; i < photos.length; i++) {
        var slide = document.createElement("div");
        slide.className = "readout-slide";
        var img = document.createElement("img");
        img.src = photos[i];
        img.alt = name;
        img.loading = "lazy";
        slide.appendChild(img);
        readoutMedia.appendChild(slide);
      }
    }

    pins.forEach(function (pin) {
      pin.addEventListener("click", function () {
        pins.forEach(function (p) { p.classList.remove("is-active"); });
        pin.classList.add("is-active");
        readout.classList.add("is-updating");

        var requestId = ++readoutRequestId;
        var photos = pinPhotos(pin);

        // Only reveal the card once it has actually faded to invisible
        // AND the new photo has genuinely finished loading into the real
        // <img> element — never on a fixed guess-timer. That's what
        // previously let the old photo still be showing (mid-fade, or
        // not loaded yet) when the new one was swapped in underneath it.
        Promise.all([whenFadedOut(), whenPhotoReady(photos[0])]).then(function () {
          if (requestId !== readoutRequestId) return;
          var name = pin.getAttribute("data-name");
          readoutName.textContent = name;
          readoutNote.textContent = pin.getAttribute("data-note");
          if (readoutPhoto) readoutPhoto.alt = name;
          rebuildSlides(photos, name);
          readout.classList.remove("is-updating");
          restartSlideshow();
        });
      });
    });

    restartSlideshow();

    /* Location detail modal: click the readout's name to open a larger
       profile for whichever pin is currently selected (San Diego HQ by
       default, before any pin has been clicked). */
    var locationModal = document.getElementById("location-modal");
    if (locationModal && "showModal" in locationModal) {
      var modalSlideshow = document.getElementById("location-modal-slideshow");
      var modalPicker = document.getElementById("location-modal-picker");
      var modalNameEl = document.getElementById("location-modal-name");
      var modalWorkEl = document.getElementById("location-modal-work");
      var modalLocDescEl = document.getElementById("location-modal-location-desc");
      var modalCloseBtn = locationModal.querySelector(".location-modal-close");
      var modalSlideTimer = null;
      var modalSlideIndex = 0;
      var currentPin = document.querySelector('.pin[data-slot="location-san-diego"]');

      pins.forEach(function (pin) {
        pin.addEventListener("click", function () { currentPin = pin; });
      });

      function modalShowSlide(i) {
        var slides = modalSlideshow.querySelectorAll(".location-modal-slide");
        var thumbs = modalPicker.querySelectorAll(".location-modal-picker-thumb");
        modalSlideIndex = i;
        slides.forEach(function (s, idx) { s.classList.toggle("is-active", idx === i); });
        thumbs.forEach(function (t, idx) { t.classList.toggle("is-active", idx === i); });
      }
      function modalRestartTimer() {
        if (modalSlideTimer) window.clearInterval(modalSlideTimer);
        var count = modalSlideshow.querySelectorAll(".location-modal-slide").length;
        if (count > 1 && !prefersReducedMotion) {
          modalSlideTimer = window.setInterval(function () {
            modalShowSlide((modalSlideIndex + 1) % count);
          }, 4000);
        }
      }

      readoutName.addEventListener("click", function () {
        if (!currentPin) return;
        var name = currentPin.getAttribute("data-name");
        var photos = pinPhotos(currentPin);

        modalNameEl.textContent = name;
        modalWorkEl.textContent = currentPin.getAttribute("data-work") || currentPin.getAttribute("data-note") || "";
        modalLocDescEl.textContent = currentPin.getAttribute("data-location-desc") || "";

        modalSlideshow.replaceChildren();
        modalPicker.replaceChildren();
        photos.forEach(function (src, idx) {
          var slide = document.createElement("div");
          slide.className = "location-modal-slide";
          var img = document.createElement("img");
          img.src = src;
          img.alt = name;
          slide.appendChild(img);
          modalSlideshow.appendChild(slide);

          if (photos.length > 1) {
            var thumb = document.createElement("button");
            thumb.type = "button";
            thumb.className = "location-modal-picker-thumb";
            thumb.setAttribute("aria-label", "Show photo " + (idx + 1) + " of " + photos.length);
            var thumbImg = document.createElement("img");
            thumbImg.src = src;
            thumbImg.alt = "";
            thumb.appendChild(thumbImg);
            thumb.addEventListener("click", function () {
              modalShowSlide(idx);
              modalRestartTimer();
            });
            modalPicker.appendChild(thumb);
          }
        });

        modalShowSlide(0);
        modalRestartTimer();
        locationModal.showModal();
      });

      modalCloseBtn.addEventListener("click", function () { locationModal.close(); });
      locationModal.addEventListener("click", function (e) {
        if (e.target === locationModal) locationModal.close();
      });
      locationModal.addEventListener("close", function () {
        if (modalSlideTimer) window.clearInterval(modalSlideTimer);
      });
    }
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
