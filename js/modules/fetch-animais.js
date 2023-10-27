import AnimaNumeros from './anima-numeros.js';

function createAnimal(animal) {
  const div = document.createElement('div');
  div.classList.add('numeros-animais');
  div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
  return div;
}

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animasiJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animasiJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
