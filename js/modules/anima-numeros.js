export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // FIXME: quando eu tenho uma funçao dentro de uma classe que ela nao tem refencia, que nao precisa
  // do objeto para funcionar, no caso o meu constructor, entao eu posso passar essa função como
  // static TODO: IMPORTANTE agora essa função statica nao faz parte do objeto criado pelo 'AnimaNumeros'
  // e sim do AnimaNumeros, creio q ele quer dizer os 'this' criados no 'constructor'.
  // no caso o 'incrementarNumero' está na minha classe 'AnimaNumeros', é que nem usar
  // Array.from() no caso estou pegando direto do construtor um método, entao eu posso fazer
  // AnimaNumeros.incrementarNumero
  // FIXME: Descrição do codigo: Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) { // FIXME: em 9 min da aula 1107 ele explica essa parte
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa incrementar número para cada número selecionado do do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero)); // como a função
    // 'incrementarNumero' nao faz mais parte do objeto do objeto criado pelo AnimaNumeros e sim
    // somente do AnimaNumeros, entao n uso this.incrementarNumero e sim this.constructor.incrementarNumero
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe ativo
  // é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // TODO: IMPORTANTE eu precisei fazer
    // a bind do handleMutation pq a função de retorno de chamada do MutationObserver perde o contexto
    // original do 'this' quando é chamada, entao isso define explicitamente o contexto do this
    // para o método handleMutation como a instância da classe AnimaNumeros
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) { // length pq é querySelector All, e o outro como é só
      // querySelector entao é sem o length só para verificar se ele existe
      this.addMutationObserver();
    }
    return this;
  }
}
