export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      console.log('menor', sectionTop - this.windowMetade < 0);
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll(); // FIXME: caso tenha algo a vista, ele já vai animar, se nao
    // só iria aparecer o começo do site ao dar scroll

    // aqui é callback entao o this vai fazer referencia ao window
    // se eu nao der o bind
    window.addEventListener('scroll', this.animaScroll);
  }
}
