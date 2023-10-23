export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += inscremento;
        numero.innerText = start; // FIXME:o corretor quer que os objetos sejam imutaveis, no caso
        // n quer que eu mude o que tem dentro de número, entao eu vou precisar
        // passar por cima da regra
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) { // se isso for verdade vai ativar a funçao
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation); // FIXME: ali disse que eu usei
  // o 'observer' antes de definir ele entao coloquei ele la em cima, mas ai diz
  // que eu usei o 'handleMutation' antes de difinir ele, entao coloquei uma let
  // com o 'observer' e usei o 'handleMutation' aqui em baixo
  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
