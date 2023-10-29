export default function initFetchBitcoin() {
  console.log('teste');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const brcPreco = document.querySelector('.btc-preco');
      brcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
