export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) { // antes o this era referente ao containerModal, como agora o this
      // nao faz mas referencia a ele, entao preciso colocar this.containerModal
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    // FIXME: aqui eu n preciso fazer o 'lenght' pq estou usando o querySelector no construtor para pegar os botoes
    // e o container, entao ele me retorna 'undefined' se nao existir, entao n precisa usar aqui
    // FIXME: IMPORTANTE, se eu estivesse usando o querySelectorALL ele me retornaria uma nodelist, e caso n existisse
    // ele me retornaria uma nodelist vazia, por isso com o querySelectorAll eu preciso usar o 'lenght'
    if (this.botaoAbrir && this.botaoAbrir && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
