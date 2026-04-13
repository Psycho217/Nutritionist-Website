// ============================
// MAYA · NUTRITION — SCRIPT
// ============================

// ---- MOBILE NAV ----
const burger = document.getElementById('nav-burger');
const mNav   = document.getElementById('mobile-nav');
const mClose = document.getElementById('mobile-nav-close');
if (burger && mNav) {
  burger.addEventListener('click', () => {
    mNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (mClose && mNav) {
  mClose.addEventListener('click', () => {
    mNav.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => obs.observe(el));
}

// ---- FAQ ACCORDION ----
document.querySelectorAll('.accordion-item').forEach(item => {
  const head = item.querySelector('.accordion-header');
  if (!head) return;
  head.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ---- RECIPE FILTER ----
const chips = document.querySelectorAll('.recipe-chip');
const cards = document.querySelectorAll('.recipe-card');
if (chips.length && cards.length) {
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// ---- DEMO FORMS ----
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('.form-success');
    if (msg) msg.classList.remove('hidden');
    form.querySelectorAll('input, select, textarea').forEach(i => {
      if (i.type !== 'submit' && i.type !== 'button') i.value = '';
    });
    setTimeout(() => { if (msg) msg.classList.add('hidden'); }, 5000);
  });
});
