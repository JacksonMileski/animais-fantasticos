export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass; // FIXME: desse jeito a pessoa vai poder definir a classe q ela quiser caso o horario de funcionamento
    // esteja aberto no momento
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number); // esse dataset é o atributo 'data' colocado no index.html
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    // FIXME: Eu estava pengado assim getHours, mas isso da problema pq é o horario do local do sistema, entao pode dar errado
    // pq vá que no meu sistema seja tal hora, e o horario do brasil seja outra? entao preciso usar o getUTCHours() -3,
    // -3 para dar o horario do brasil, pelo menos a maioria das regioes // esse getUTCHours() é um horario global
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto; // se dar true, entao é pq é true, entao está aberto
  }

  ativaAberto() {
    if (this.estaAberto()) { // se o 'this.estaAberto()' dar true é pq esta aberto e vai fazer o if
      this.funcionamento.classList.add(this.activeClass); // FIXME: desse jeito a pessoa vai poder definir a classe q ela quiser caso o horario de funcionamento
      // esteja aberto no momento
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
