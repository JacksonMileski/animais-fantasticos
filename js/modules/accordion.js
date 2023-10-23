export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  // FIXME: antes essa funcão estava dentro do if, e nao pode ficar dentro de um escopo
  // de bloco a função
  function activeAccordion() {
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
