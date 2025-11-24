// @js/main.js#1-180
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const page = document.getElementById('page');
  window.addEventListener('load', () => {
    preloader.classList.add('opacity-0');
    setTimeout(() => {
      preloader.classList.add('hidden');
      page.classList.remove('opacity-0');
      page.classList.add('opacity-100');
    }, 400);
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuToggle.querySelector('i').classList.toggle('fa-bars');
      menuToggle.querySelector('i').classList.toggle('fa-xmark');
    });
  }
  navLinks.forEach(link => link.addEventListener('click', () => mobileMenu?.classList.add('hidden')));

  const topbar = document.getElementById('topbar');
  let prevScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    if (current > 120) topbar.classList.add('shadow-lg', 'shadow-black/40', 'border-primary/30');
    else topbar.classList.remove('shadow-lg', 'shadow-black/40', 'border-primary/30');
    prevScroll = current;
  });

  const backToTop = document.createElement('button');
  backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  backToTop.className = 'fixed bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition hover:bg-[#d87400] lg:flex';
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.remove('hidden');
    else backToTop.classList.add('hidden');
  });

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) link.classList.add('text-primary', 'font-semibold');
      else link.classList.remove('text-primary', 'font-semibold');
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));

  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.remove('bg-primary', 'text-white'));
      btn.classList.add('bg-primary', 'text-white');
      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) card.classList.remove('hidden');
        else card.classList.add('hidden');
      });
    });
  });

  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});