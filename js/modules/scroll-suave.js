export default class ScrollSuave { // FIXME: transformei em classe
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) { // FIXME: se a pessoas n definir as options entao esse vai ser esse o padrao
      this.options = { behavior: 'smooth', block: 'start' };
    } else { // FIXME: se caso a pessoa passar os options
      this.options = options;
    }
    // FIXME: nao é o ideal fazer por exemplo this.options = options || 'teste'; pq vai que a pessoa passe
    // um '0' entao vai dar como false e vai pular pro teste, pq '0' é false, mesmo que seja o valor mesmo que
    // a pessoa queira passar
    // FIXME: lembrando que o this é minha classe 'ScrollSuave'
    this.scrollToSection = this.scrollToSection.bind(this); // FIXME: com o bind eu consigo definir qual vai ser
    // o this dessa função. No caso o retorno disso aqui é minha função 'scrollToSection' pelo o que entendi,
    // entao o this daqui vai ser a minha classe ScrollSuave, já que o this por padrao da
    // scrollToSection é a class ScrollSuave, e tbm no caso eu estou escrevendo por cima dessa
    // função scrollToSection() {} para sempre, entao agora o this do scrollToSection(event) { é o ScrollSuave,
    // e nao o 'link', nao sei se é bem isso, mas acho q é, mesmo que nao seja uma arrow function no addEventListener
    console.log(this.scrollToSection);
  }

  scrollToSection(event) { /* FIXME: como aqui não uso nenhuma parte interna do objeto do
  construtor, é melhor colocar entao esse método como static, pq n usa nenhuma parte do construtor,
  no caso assim static scrollToSection(event) {, mas n vou usar static pq vou sim usar uma parte
    do this */
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    /* estava assim
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    mas eu tirei, e coloquei 'options' para pessoa q baixar esse arquivo poder passar as opçoes
    que quiser */
    section.scrollIntoView(this.options);// TODO: IMPORTANTE todo this que eu usar aqui vai fazer referencia ao 'link'
    // do link.addEventListener('click', this.scrollToSection);
    // pq estou usando o addEventListener sem arrow Function, entao this.options nao vai funcionar, pq esta
    // fazendo referencia ao this do 'link' nao a minha classe ScrollSuave
    // no caso estava assim link.addEventListener('click', this.scrollToSection); porem se eu fizer com
    // arrow function essa parte, entao o this vai fazer referencia a minha classe ScrollSuave
    /* ficaria assim addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', (event) => { // preciso passar o event pq é arrow function(eu acho)
        this.scrollToSection(event);
      });
    });
  }
  FIXME: mas assim se eu quiser alguma hora remover o eventListener eu nao vou poder pq a função é anonima,
  pq eu perco a referencia dessa função já que ela é anonima */
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.lenth) { // FIXME: se n tiver nada da erro
      this.addLinkEvent();
      // console.log(this)
    }
    return this; // FIXME: é bom eu retornar o this pq eu faço no script.js a inicialização do projeto assim scrollSuave.init();
    // mas retornando o this, ele vai me retornar a minha class tbm, entao eu posso usar outras propriedades do objeto como
    // por exemplo scrollSuave.init().linksInternos;
  }
}
