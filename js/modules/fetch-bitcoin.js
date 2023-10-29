export default function fetchBitcoin(url, target) {
  // FIXME: mesma coisa aqui, n precisa criar classe, pq é algo bem especifico, só crio classes
  // quando posso reaproveitar
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const brcPreco = document.querySelector(target);
      brcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
