import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import tabnav from './modules/tabnav.js';
import { teste1 as nomeDiferente, teste2 } from './modules/teste.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu.mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
tabnav();
nomeDiferente();
teste2();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

import $ from 'jquery'; //agora posso colocar qual o nome da funçao que eu quero, entao usei o $ de jquery
//from 'jquery' no caso como estou usando node.js entao nem preciso colocar o caminho do jquery, ele vai
//achar automaticamente no meu node_modules o arquivo do jquery. pelo o que entendi do lado de import
// é só o nome que eu dei, n precisava ser '$'
import _ from 'lodash';

//FIXME: função do jquery $('nav').hide(); esconde a nav

//lodash me dá métodos diferentes para arrays, nesse .difference ele me da o que eu tenho na primeira array q eu
//n tenho na segunda array, a resposta vai me dar uma array com uva
const diferenca = _.difference(['Banana', 'Morango', 'Uva'], ['Banana', 'Morango', 'Pêra']);
console.log(diferenca)