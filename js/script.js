import ScrollSuave from './modules/scroll-suave.js';
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
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init(); // FIXME: para iniciar
/* FIXME: o ideal é que pegamos cada função daqui e possa possa colocar
em qualquer site, e atráves de uma configuração ou outra ela possa usar
FIXME: vou começar com o scrollsuave, fiz um git checkout -b refatorar-scrollsuave
entao agora estou no meu novo branch que é o refatorar-scrollsuave, e agora
vou fazer algumas coisas no initScrollSuave, mas primeiro eu dou um npm run dev
para ficar rodando o modo de desenvolvimento, depois de eu fazer as coisas no scroll-suave,
no caso transformei em class para o usuario poder usar esse arquivo de modo que ele possa
usar para seus projetos, vou no import e mudo para ScrollSuave, e agora faço como fosse o usuario
colocando as opçoes no newScrollSuave, no segundo argumento eu posso fazer uma constante e passar ela
por exemplo const options = {
    behavior: 'smooth',
    block: 'start',
}
e passo ela no segundo argumento

agora q terminei tudo é legal que a pessoa q usar isso aqui vai poder importar para qualquer site praticamente

dei um git add -A git commit -a -m 'Scroll transformado em Class' e git merge main depois git push e copiei e colei o codigo,
que ele cria meu branch no github e envia esse meu codigo pra la, agora vou fazer as etapas de juntar com meu main no site
do github, depois dei um git main, e um git branch -D 'refator-scrollsuave' já que nao vou mais usar ele, Lembrando que como
voltar pro git main, eu preciso usar o git pull para puxar as ultimas atualizações do site */
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
