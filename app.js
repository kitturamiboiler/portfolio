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

const caseToc = document.querySelector('.case-toc [data-case-nav]');
if (caseToc) {
  const mobileToc = document.querySelector('.mobile-case-nav');
  const allLinks = [...document.querySelectorAll('[data-case-nav] a')];
  const sections = [...caseToc.querySelectorAll('a')].map(link => ({
    id: link.hash.slice(1),
    title: link.textContent,
    element: document.getElementById(link.hash.slice(1))
  })).filter(section => section.element);
  let currentId;
  let scheduled = false;
  function updateSection() {
    scheduled = false;
    const threshold = mobileToc.offsetHeight + 40;
    let current = sections[0];
    for (const section of sections) {
      if (section.element.getBoundingClientRect().top <= threshold) current = section;
    }
    if (!current || current.id === currentId) return;
    currentId = current.id;
    for (const link of allLinks) {
      if (link.hash === '#' + currentId) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    mobileToc.querySelector('[data-current-section]').textContent = current.title;
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateSection);
  }
  for (const link of allLinks) link.addEventListener('click', () => {
    mobileToc.open = false;
    const target = document.getElementById(link.hash.slice(1));
    requestAnimationFrame(() => {
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
      scheduleUpdate();
    });
  });
  mobileToc.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileToc.open) {
      mobileToc.open = false;
      mobileToc.querySelector('summary').focus({preventScroll: true});
    }
  });
  document.addEventListener('click', event => {
    if (mobileToc.open && !mobileToc.contains(event.target)) mobileToc.open = false;
  });
  window.addEventListener('scroll', scheduleUpdate, {passive: true});
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  new ResizeObserver(scheduleUpdate).observe(document.body);
  scheduleUpdate();
}
