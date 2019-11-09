const menuBar = document.querySelector('.menu-bar');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menuBar.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle('fade');
  })
});
