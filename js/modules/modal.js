export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const ContainerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    ContainerModal.classList.toggle('ativo');
  }
  function cliqueForaModal(event) {
    console.log(this);
    console.log(event.target);
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (botaoAbrir && botaoAbrir && ContainerModal) {
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    ContainerModal.addEventListener('click', cliqueForaModal);
  }
}
