import AnimaNumeros from './anima-numeros.js';
/* FIXME: como n vou usar o fetch outras vezes, nao vou reutilizar ela, eu n vou transformar
em classe por isso, e tbm pq estou usando o async, mas vou dar uma refatorada nela, melhorar um
pouco no caso */

export default function fetchAnimais(url, target) { // FIXME: como n é uma classe entao começa com letra minuscula
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numeros-animais');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }
  // puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animasiJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animasiJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
