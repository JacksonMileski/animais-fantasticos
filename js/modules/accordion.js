export default class initAccordion { // FIXME: transformando em uma class
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle(this.activeClass);
  }

  // adiciona os e ventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item)); // FIXME: pelo o que entendi vai ser o this da minha class,
      // mas como eu quero o tem tbm, entao passo como argumento
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
// FIXME: agora so dar um git add -A git commit -a -m 'Accordion transformado em classe', depois dou um git checkout main
// e git pull para ver se nao teve diferença nenhuma no codigo, caso n teve eu volto pro meu git checkout refatorar-accordion
//no caso o git pull baixa no branch que eu estiver as atualizações pelo o que entendi, agora dou o git merge main, n vai ter nenhuma
//mudança, e depois dou o git push, e copio e colo o codigo. lembrando q depois q eu fazer o negocio no github preciso fazer o 
// git checkout main e git pull