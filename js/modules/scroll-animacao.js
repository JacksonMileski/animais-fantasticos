export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      console.log('menor', sectionTop - windowMetade < 0);
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) section.classList.add('ativo'); // FIXME: quando é o if sem as chaves preciso colocar na mesma linha
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
