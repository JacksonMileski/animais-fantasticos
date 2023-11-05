import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // TODO: o click é emulado tbm no mobile, entao quando eu clico mesmo dando touchstart no mobile, ele tbm vai dar o
    // evento click, entao ele vai abrir e fechar o meu menu, no caso vai estar ativando dois eventos ao mesmo tempo
    // para corrigir isso eu previno o padrao do touchstart, ao prevenir o padrao do touchstart, ele previni que o click
    // aconteça, entao vai ficar event.preventDefault();

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
    this.init(); // FIXME: posso deixar o init aqui TODO: posso deixar aqui pq tudo que
    // está no construtor roda antes, pq assim que a classe é definida o construtor é ativado
    // TODO: o cara do curso deixou o init lá no script.js que creio que é a melhor escolha, mas deixei
    // aqui para exemplo
  }

  openMenu(event) {
    event.preventDefault(); // para previnir o evento 'click' do desktop, e sim deixar so o touchstart
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    console.log('teste1');
    outsideClick(this.menuList, this.events, () => {
      console.log('teste1');
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    // se eu tenho evento de callback entao é melhor dar o this
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
