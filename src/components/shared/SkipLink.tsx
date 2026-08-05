import type { MouseEvent } from 'react';

export function SkipLink() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const main = document.getElementById('main-content');
    main?.focus();
  };

  return (
    <a className="skip-link" href="#main-content" onClick={handleClick}>
      Skip to content
    </a>
  );
}
