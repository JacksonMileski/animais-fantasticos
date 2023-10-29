export default class ScrollAnima {
  /* FIXME: IMPORTANTE antes eu estava verificando toda hora qual era a distancia da section, agora só verifica uma vez,
   porem ainda tem o problema que ativa a função cada vez que dou o scroll, entao na próxima aula vou aprender a tirar isso */
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // FIXME: comentario do cara do curso: Pega a distância de cada item em relaçao
  // ao topo do site
  getDistance() {
    // FIXME: aqui eu fiz o 'distance' recebendo os valores do meu map, mas
    // o map só funciona em array, como o this.sections é uma nodeList entao n da
    // entao posso desestruturar o this.sections para funcionar
    // no caso fiz assim [...this.sections] para desestruturar toda nodelist
    this.distance = [...this.sections].map((section) => {
      // o section.getBoundingClientRect().top; ele pega a distancia
      // atualizada de onde eu estiver com o scroll até as minhas sections,
      // eu nao quero isso, eu quero a distancia como eu estivesse sempre do topo
      // até a sessao, mesmo que o meu scroll estiver mais para baixo, entao eu uso
      // o offsetTop;
      const offset = section.offsetTop;
      console.log(offset);
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade), // FIXME: para nao animar somente quando chegar no
        // topo da janela, como é um número quebrado entao usei o Math.floor
      }; // como é um objeto q estou retornando entao fecha com ponto e virgula
    });
    console.log(this.distance); // me retorna o elemento e a distancia
  }

  // FIXME: comentario do cara do curso: verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    // window.pageYOffset é onde o scroll está no eixo Y
    this.distance.forEach((item) => { // esse 'item' é meu objeto com o 'element' e 'offset'
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance(); // para ativar uma vez logo de inicio

      // aqui é callback entao o this vai fazer referencia ao window
      // se eu nao der o bind
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() { // FIXME: caso em algum momento do meu site eu queria remover
    // esse evento de scroll
    window.removeEventListener('scroll', this.checkDistance);
  }
}
