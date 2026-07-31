const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

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

const dmgDownload = document.querySelector('[data-dmg-download]');

if (dmgDownload) {
  const downloadStatus = document.querySelector('[data-dmg-status]');
  const setDmgAvailability = (isAvailable) => {
    dmgDownload.classList.toggle('is-unavailable', !isAvailable);
    dmgDownload.setAttribute('aria-disabled', String(!isAvailable));
    dmgDownload.tabIndex = isAvailable ? 0 : -1;
    downloadStatus.textContent = isAvailable
      ? 'DMGファイルをダウンロードしてインストールできます。'
      : 'DMGファイルを準備中です。公開まで少々お待ちください。';
  };

  setDmgAvailability(false);
  fetch(dmgDownload.href, { method: 'HEAD' })
    .then((response) => setDmgAvailability(response.ok))
    .catch(() => setDmgAvailability(false));

  dmgDownload.addEventListener('click', (event) => {
    if (dmgDownload.getAttribute('aria-disabled') === 'true') event.preventDefault();
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
