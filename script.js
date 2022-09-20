// hamburger menu to click and onclick dropdown menu items.

const hamburgers = document.querySelector('.hamburger');
const navItem = document.querySelector('.nav-item');

hamburgers.addEventListener('click', () => {
  hamburgers.classList.toggle('active');
  navItem.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgers.classList.remove('active');
  navItem.classList.remove('active');
}));
