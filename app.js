document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const viewport = carousel.querySelector('[data-carousel-viewport]');
  const buttons = [...carousel.querySelectorAll('[data-carousel-index]')];
  const slides = [...viewport.children];
  const status = carousel.querySelector('[data-carousel-status]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 0;
  let settleTimer;
  function update(index) {
    selected = index;
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    status.textContent = `${slides[index].getAttribute('aria-label')}`;
  }
  function show(index) {
    index = (index + slides.length) % slides.length;
    update(index);
    viewport.scrollTo({left: index * viewport.clientWidth, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => show(index));
    button.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + slides.length) % slides.length;
      show(next);
      buttons[next].focus();
    });
  });
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => show(selected - 1));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => show(selected + 1));
  viewport.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    show(selected + (event.key === 'ArrowRight' ? 1 : -1));
  });
  viewport.addEventListener('scroll', () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(() => update(Math.max(0, Math.min(slides.length - 1, Math.round(viewport.scrollLeft / viewport.clientWidth)))), 120);
  }, {passive: true});
  new ResizeObserver(() => viewport.scrollTo({left: selected * viewport.clientWidth, behavior: 'instant'})).observe(viewport);
  carousel.classList.add('is-ready');
});

const dialog = document.querySelector('.lightbox');
if (dialog) {
  document.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      const source = button.querySelector('img');
      const zoomImage = dialog.querySelector('img') || dialog.querySelector('.zoom-scroll').appendChild(document.createElement('img'));
      zoomImage.src = source.src;
      zoomImage.alt = source.alt;
      dialog.querySelector('.zoom-caption').textContent = button.closest('figure').querySelector('figcaption').textContent;
      dialog.querySelector('.original-link').href = source.src;
      zoomImage.width = source.naturalWidth;
      zoomImage.height = source.naturalHeight;
      dialog.showModal();
      dialog.querySelector('.zoom-scroll').scrollTop = 0;
    });
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
}
