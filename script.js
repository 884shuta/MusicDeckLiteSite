const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

// Replace these search URLs with the published product-page URLs as soon as
// each app's App Store ID is available. Keeping them here avoids hunting
// through the markup when the releases go live.
const STORE_URLS = {
  mac: 'https://apps.apple.com/jp/search?term=MusicDeck%20for%20Mac',
  iphone: 'https://apps.apple.com/jp/search?term=MusicDeckLite',
};

document.querySelectorAll('[data-store-link]').forEach((link) => {
  link.href = STORE_URLS[link.dataset.storeLink];
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
