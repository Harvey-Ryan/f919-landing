(function () {
  const container = document.querySelector('.stars');
  const count = 160;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size    = Math.random() < 0.7 ? 1 : Math.random() < 0.8 ? 1.5 : 2;
    const opacity = 0.2 + Math.random() * 0.6;
    const dur     = 2 + Math.random() * 4;
    const delay   = Math.random() * 6;

    star.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${(Math.random() * 100).toFixed(2)}%`,
      `top:${(Math.random() * 100).toFixed(2)}%`,
      `--o:${opacity.toFixed(2)}`,
      `--d:${dur.toFixed(2)}s`,
      `--delay:${delay.toFixed(2)}s`,
    ].join(';');

    container.appendChild(star);
  }
})();
