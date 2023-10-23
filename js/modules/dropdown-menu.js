import outsideClick from './outsideclick.js';
// FIXME: pode acabar dando um erro quando eu faço por exemplo import outsideClick from "./outsideclick.js";
// pq o programa pode esperar que eu use uma ferramenta para juntar o meu js, e eu n estou fazendo isso
// no momento, e sim usando o typeModule que é do js, e o typeModule eu preciso colocar a extensao do arquivos
// q estou usando que é o .js, eu preciso colocar "import/extesions": 0 nos rules
function handClick(event) {
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this, ['touchstart', 'click'], () => {
    this.classList.remove('active');
  });
}

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu) => { // FIXME: na arrowFunction com as chaves, eu  preciso colocar o entreparenses na variavel
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handClick);
    });
  });
}
