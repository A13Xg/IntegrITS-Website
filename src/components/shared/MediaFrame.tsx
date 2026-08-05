import { useState } from 'react';

interface MediaFrameProps {
  src: string;
  alt: string;
  caption?: string;
  eyebrow?: string;
  className?: string;
}

export function MediaFrame({ src, alt, caption, eyebrow, className }: MediaFrameProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className={`media-frame ${className ?? ''} ${loaded ? 'is-loaded' : ''}`.trim()}>
      {!loaded ? <span className="media-frame__skeleton" aria-hidden="true" /> : null}
      <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} />
      {eyebrow || caption ? (
        <figcaption className="media-frame__caption">
          {eyebrow ? <span className="media-frame__eyebrow">{eyebrow}</span> : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
