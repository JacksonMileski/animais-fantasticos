export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }, // FIXME: como é um método tem q ter virgula
  }; // FIXME: sempre fechar objeto com ponto e virgula

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    console.log(text);
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    console.log(event);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
