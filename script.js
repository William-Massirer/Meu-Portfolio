const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir');
  overlay.classList.add('mostrar');
});

document.querySelector('.btn-fechar').addEventListener('click', () => {
  menuMobile.classList.remove('abrir');
  overlay.classList.remove('mostrar');
});

overlay.addEventListener('click', () => {
  menuMobile.classList.remove('abrir');
  overlay.classList.remove('mostrar');
});
