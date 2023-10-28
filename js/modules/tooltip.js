export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // FIXME: sempre q tiver callback eu preciso do bind
    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    // TODO: IMPORTANTE quando a minha tela está pequena e eu vou passar o mouse no mapa para direita é criado uma scrollbar,
    // isso acontece pq a minha tooltipBox bate no final da minha janela, e acaba criando essa scrollbar já que está colocando
    // um espaço a mais
    // FIXME: para evitar esse erro eu posso colocar um valor aproximado da largura da minha tooltip box ou o valor dela somado
    // com o event.pageX, se o valor do event.pageX + 240 for maior que a largura da minha janela, entao vai dar um pageX menos
    // 190px, se nao vai continuar como era antes
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
    console.log(event.pageX, window.innerWidth); // posição do eixo X, e tamanho total da minha janela
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    console.log(text);
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox; // antes era return aqui, mas assim agora vou poder usar o meu this.tooltipBox como
    // o this.tooltipBox.remove e style que eu fiz ali em cima, ou no que eu quiser
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) { // FIXME: ao inves de fazer em tudo event.currentTarget, eu posso desestruturar o event.currentTarget
    // entao só vou precisar o currentTarget ao inves de event.current target, para isso eu faço {currentTarget}. No caso
    // agora só vou usar currentTarget ao invés de event.CurrentTarget //FIXME: porém agora nao posso mais usar o event
    /* TODO: IMPORTANTE, conversa com o chatgpt onde está indicando que é do objeto event o currentTarget? resposta do chatgpt
    A razão pela qual currentTarget é acessado dessa forma é porque essa função (onMouseOver) é projetada para ser chamada em resposta a eventos
    do mouse, e esses eventos normalmente incluem um objeto de evento que possui a propriedade currentTarget. */
    // cria a tooltibox e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
