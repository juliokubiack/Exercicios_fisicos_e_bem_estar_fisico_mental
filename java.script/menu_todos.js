const botao = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const fechar = document.querySelector('#fecharMenu');

function fecharMenu() {
  menu.classList.remove('aberto');
  botao.setAttribute('aria-expanded', false);
  document.body.classList.remove('no-scroll');
}

botao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', aberto);
  document.body.classList.toggle('no-scroll', aberto);
});

fechar.addEventListener('click', (evento) => {
  evento.preventDefault();
  fecharMenu();
});