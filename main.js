/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar initAccordion = /*#__PURE__*/function () {\n  // FIXME: transformando em uma class\n  function initAccordion(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, initAccordion);\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initAccordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.nextElementSibling.classList.toggle(this.activeClass);\n      item.classList.toggle(this.activeClass);\n    }\n\n    // adiciona os e ventos ao accordion\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.toggleAccordion(item);\n        }); // FIXME: pelo o que entendi vai ser o this da minha class,\n        // mas como eu quero o tem tbm, entao passo como argumento\n      });\n    }\n\n    // iniciar função\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        // ativar primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n    }\n  }]);\n  return initAccordion;\n}(); // FIXME: agora so dar um git add -A git commit -a -m 'Accordion transformado em classe', depois dou um git checkout main\n// e git pull para ver se nao teve diferença nenhuma no codigo, caso n teve eu volto pro meu git checkout refatorar-accordion\n//no caso o git pull baixa no branch que eu estiver as atualizações pelo o que entendi, agora dou o git merge main, n vai ter nenhuma\n//mudança, e depois dou o git push, e copio e colo o codigo. lembrando q depois q eu fazer o negocio no github preciso fazer o \n// git checkout main e git pull\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    var numeros = document.querySelectorAll('[data-numero]');\n    numeros.forEach(function (numero) {\n      var total = +numero.innerText;\n      var inscremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += inscremento;\n        numero.innerText = start; // FIXME:o corretor quer que os objetos sejam imutaveis, no caso\n        // n quer que eu mude o que tem dentro de número, entao eu vou precisar\n        // passar por cima da regra\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  var observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      // se isso for verdade vai ativar a funçao\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n  observer = new MutationObserver(handleMutation); // FIXME: ali disse que eu usei\n  // o 'observer' antes de definir ele entao coloquei ele la em cima, mas ai diz\n  // que eu usei o 'handleMutation' antes de difinir ele, entao coloquei uma let\n  // com o 'observer' e usei o 'handleMutation' aqui em baixo\n  var observerTarget = document.querySelector('.numeros');\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n// FIXME: pode acabar dando um erro quando eu faço por exemplo import outsideClick from \"./outsideclick.js\";\n// pq o programa pode esperar que eu use uma ferramenta para juntar o meu js, e eu n estou fazendo isso\n// no momento, e sim usando o typeModule que é do js, e o typeModule eu preciso colocar a extensao do arquivos\n// q estou usando que é o .js, eu preciso colocar \"import/extesions\": 0 nos rules\nfunction handClick(event) {\n  var _this = this;\n  event.preventDefault();\n  this.classList.add('active');\n  (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n    _this.classList.remove('active');\n  });\n}\nfunction initDropdownMenu() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(function (menu) {\n    // FIXME: na arrowFunction com as chaves, eu  preciso colocar o entreparenses na variavel\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\nfunction createAnimal(animal) {\n  var div = document.createElement('div');\n  div.classList.add('numeros-animais');\n  div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3><span data-numero>\").concat(animal.total, \"</span>\");\n  return div;\n}\nfunction initFetchAnimais() {\n  function fetchAnimais(_x) {\n    return _fetchAnimais.apply(this, arguments);\n  }\n  function _fetchAnimais() {\n    _fetchAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animaisResponse, animasiJSON, numerosGrid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animaisResponse = _context.sent;\n            _context.next = 6;\n            return animaisResponse.json();\n          case 6:\n            animasiJSON = _context.sent;\n            numerosGrid = document.querySelector('.numeros-grid');\n            animasiJSON.forEach(function (animal) {\n              var divAnimal = createAnimal(animal);\n              numerosGrid.appendChild(divAnimal);\n            });\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            _context.next = 15;\n            break;\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _fetchAnimais.apply(this, arguments);\n  }\n  fetchAnimais('./animaisapi.json');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var brcPreco = document.querySelector('.btc-preco');\n    brcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    return console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  console.log(diasSemana);\n  console.log(horarioSemana);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var teste = [1, 2, 3, 4, 5].indexOf(6);\n  console.log(teste);\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n  console.log(horarioAberto);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu.mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu.mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click', 'touchstart'];\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    console.log('teste1');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      console.log('teste1');\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      return menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu.mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para fazer referência ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.containerModal.classList.toggle('ativo');\n    }\n\n    // adiciona o evento de toggle ao modal\n  }, {\n    key: \"eventToggleModal\",\n    value: function eventToggleModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n\n    // fecha o modal ao clicar do lado de fora\n  }, {\n    key: \"cliqueForaModal\",\n    value: function cliqueForaModal(event) {\n      if (event.target === this.containerModal) {\n        // antes o this era referente ao containerModal, como agora o this\n        // nao faz mas referencia a ele, entao preciso colocar this.containerModal\n        this.toggleModal();\n      }\n    }\n\n    // adiciona os eventos aos elementos do modal\n  }, {\n    key: \"addModalEvents\",\n    value: function addModalEvents() {\n      this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n      this.botaoFechar.addEventListener('click', this.eventToggleModal);\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      // FIXME: aqui eu n preciso fazer o 'lenght' pq estou usando o querySelector no construtor para pegar os botoes\n      // e o container, entao ele me retorna 'undefined' se nao existir, entao n precisa usar aqui\n      // FIXME: IMPORTANTE, se eu estivesse usando o querySelectorALL ele me retornaria uma nodelist, e caso n existisse\n      // ele me retornaria uma nodelist vazia, por isso com o querySelectorAll eu preciso usar o 'lenght'\n      if (this.botaoAbrir && this.botaoAbrir && this.containerModal) {\n        this.addModalEvents();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handOutsideClick(event) {\n    console.log(element);\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, '');\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  var sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  var windowMetade = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      console.log('menor', sectionTop - windowMetade < 0);\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) section.classList.add('ativo'); // FIXME: quando é o if sem as chaves preciso colocar na mesma linha\n      else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  // FIXME: transformei em classe\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      // FIXME: se a pessoas n definir as options entao esse vai ser esse o padrao\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      // FIXME: se caso a pessoa passar os options\n      this.options = options;\n    }\n    // FIXME: nao é o ideal fazer por exemplo this.options = options || 'teste'; pq vai que a pessoa passe\n    // um '0' entao vai dar como false e vai pular pro teste, pq '0' é false, mesmo que seja o valor mesmo que\n    // a pessoa queira passar\n    // FIXME: lembrando que o this é minha classe 'ScrollSuave'\n    this.scrollToSection = this.scrollToSection.bind(this); // FIXME: com o bind eu consigo definir qual vai ser\n    // o this dessa função. No caso o retorno disso aqui é minha função 'scrollToSection' pelo o que entendi,\n    // entao o this daqui vai ser a minha classe ScrollSuave, já que o this por padrao da\n    // scrollToSection é a class ScrollSuave, e tbm no caso eu estou escrevendo por cima dessa\n    // função scrollToSection() {} para sempre, entao agora o this do scrollToSection(event) { é o ScrollSuave,\n    // e nao o 'link', nao sei se é bem isso, mas acho q é, mesmo que nao seja uma arrow function no addEventListener\n    console.log(this.scrollToSection);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      /* FIXME: como aqui não uso nenhuma parte interna do objeto do\n      construtor, é melhor colocar entao esse método como static, pq n usa nenhuma parte do construtor,\n      no caso assim static scrollToSection(event) {, mas n vou usar static pq vou sim usar uma parte\n      do this */\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      /* estava assim\n      section.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start',\n      });\n      mas eu tirei, e coloquei 'options' para pessoa q baixar esse arquivo poder passar as opçoes\n      que quiser */\n      section.scrollIntoView(this.options); // TODO: IMPORTANTE todo this que eu usar aqui vai fazer referencia ao 'link'\n      // do link.addEventListener('click', this.scrollToSection);\n      // pq estou usando o addEventListener sem arrow Function, entao this.options nao vai funcionar, pq esta\n      // fazendo referencia ao this do 'link' nao a minha classe ScrollSuave\n      // no caso estava assim link.addEventListener('click', this.scrollToSection); porem se eu fizer com\n      // arrow function essa parte, entao o this vai fazer referencia a minha classe ScrollSuave\n      /* ficaria assim addLinkEvent() {\n      this.linksInternos.forEach((link) => {\n        link.addEventListener('click', (event) => { // preciso passar o event pq é arrow function(eu acho)\n          this.scrollToSection(event);\n        });\n      });\n      }\n      FIXME: mas assim se eu quiser alguma hora remover o eventListener eu nao vou poder pq a função é anonima,\n      pq eu perco a referencia dessa função já que ela é anonima */\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.lenth) {\n        // FIXME: se n tiver nada da erro\n        this.addLinkEvent();\n        // console.log(this)\n      }\n\n      return this; // FIXME: é bom eu retornar o this pq eu faço no script.js a inicialização do projeto assim scrollSuave.init();\n      // mas retornando o this, ele vai me retornar a minha class tbm, entao eu posso usar outras propriedades do objeto como\n      // por exemplo scrollSuave.init().linksInternos;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TavNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar TavNav = /*#__PURE__*/function () {\n  function TavNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TavNav);\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // Ativa a tab de acordo com o index da mesma\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TavNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      var _this = this;\n      this.tabContent.forEach(function (section) {\n        section.classList.remove(_this.activeClass);\n      });\n      var direcao = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(this.activeClass, direcao);\n    }\n\n    // Adiciona os eventos nas tabs\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener('click', function () {\n          return _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        // Ativar primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n    }\n  }]);\n  return TavNav;\n}();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/teste.js":
/*!*****************************!*\
  !*** ./js/modules/teste.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   teste1: () => (/* binding */ teste1),\n/* harmony export */   teste2: () => (/* binding */ teste2)\n/* harmony export */ });\nfunction teste1() {\n  //FIXME: Sem default, pois estou usando as chaves no 'import'\n  console.log('isso é teste 1');\n}\n/*FIXME: Note que usei duas funções, entao usei as chaves para isso no 'import' */\nfunction teste2() {\n  console.log('isso é teste 2');\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/teste.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll('[data-tooltip]');\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      this.tooltipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n      this.tooltipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n    }\n  };\n  var onMouseLeave = {\n    handleEvent: function handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    } // FIXME: como é um método tem q ter virgula\n  }; // FIXME: sempre fechar objeto com ponto e virgula\n\n  function criarTooltipBox(element) {\n    var tooltipBox = document.createElement('div');\n    var text = element.getAttribute('aria-label');\n    console.log(text);\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n  function onMouseOver(event) {\n    var tooltipBox = criarTooltipBox(this);\n    console.log(event);\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n    onMouseLeave.tooltipBox = tooltipBox;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n  tooltips.forEach(function (item) {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_teste_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/teste.js */ \"./js/modules/teste.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu.mobile.js */ \"./js/modules/menu.mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init(); // FIXME: para iniciar\n/* FIXME: o ideal é que pegamos cada função daqui e possa possa colocar\nem qualquer site, e atráves de uma configuração ou outra ela possa usar\nFIXME: vou começar com o scrollsuave, fiz um git checkout -b refatorar-scrollsuave\nentao agora estou no meu novo branch que é o refatorar-scrollsuave, e agora\nvou fazer algumas coisas no initScrollSuave, mas primeiro eu dou um npm run dev\npara ficar rodando o modo de desenvolvimento, depois de eu fazer as coisas no scroll-suave,\nno caso transformei em class para o usuario poder usar esse arquivo de modo que ele possa\nusar para seus projetos, vou no import e mudo para ScrollSuave, e agora faço como fosse o usuario\ncolocando as opçoes no newScrollSuave, no segundo argumento eu posso fazer uma constante e passar ela\npor exemplo const options = {\n    behavior: 'smooth',\n    block: 'start',\n}\ne passo ela no segundo argumento\n\nagora q terminei tudo é legal que a pessoa q usar isso aqui vai poder importar para qualquer site praticamente\n\ndei um git add -A git commit -a -m 'Scroll transformado em Class' e git merge main depois git push e copiei e colei o codigo,\nque ele cria meu branch no github e envia esse meu codigo pra la, agora vou fazer as etapas de juntar com meu main no site\ndo github, depois dei um git main, e um git branch -D 'refator-scrollsuave' já que nao vou mais usar ele, Lembrando que como\nvoltar pro git main, eu preciso usar o git pull para puxar as ultimas atualizações do site\npreciso dar o git igual eu descrevi no 'accordion.js' */\n\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n// TODO: é bom fazer em classes pq imagina se eu quero dar o toggleModal  nao só quando o cara clica em login\n// e sim quando faz outra coisa, entao ele é ativado, por exemplo se eu fizer modal.toggleModal(); ao iniciar o site\n// já vai estar o toggleModal ativo\n\n(0,_modules_teste_js__WEBPACK_IMPORTED_MODULE_3__.teste1)();\n(0,_modules_teste_js__WEBPACK_IMPORTED_MODULE_3__.teste2)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n// FIXME: Agora faço o git checkout -b refatorar-accordion e dou o npm run dev, vou fazer o que preciso fazer la\n// igual fiz para scrollSuave\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return e;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var t,\n    e = {},\n    r = Object.prototype,\n    n = r.hasOwnProperty,\n    o = Object.defineProperty || function (t, e, r) {\n      t[e] = r.value;\n    },\n    i = \"function\" == typeof Symbol ? Symbol : {},\n    a = i.iterator || \"@@iterator\",\n    c = i.asyncIterator || \"@@asyncIterator\",\n    u = i.toStringTag || \"@@toStringTag\";\n  function define(t, e, r) {\n    return Object.defineProperty(t, e, {\n      value: r,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), t[e];\n  }\n  try {\n    define({}, \"\");\n  } catch (t) {\n    define = function define(t, e, r) {\n      return t[e] = r;\n    };\n  }\n  function wrap(t, e, r, n) {\n    var i = e && e.prototype instanceof Generator ? e : Generator,\n      a = Object.create(i.prototype),\n      c = new Context(n || []);\n    return o(a, \"_invoke\", {\n      value: makeInvokeMethod(t, r, c)\n    }), a;\n  }\n  function tryCatch(t, e, r) {\n    try {\n      return {\n        type: \"normal\",\n        arg: t.call(e, r)\n      };\n    } catch (t) {\n      return {\n        type: \"throw\",\n        arg: t\n      };\n    }\n  }\n  e.wrap = wrap;\n  var h = \"suspendedStart\",\n    l = \"suspendedYield\",\n    f = \"executing\",\n    s = \"completed\",\n    y = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var p = {};\n  define(p, a, function () {\n    return this;\n  });\n  var d = Object.getPrototypeOf,\n    v = d && d(d(values([])));\n  v && v !== r && n.call(v, a) && (p = v);\n  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);\n  function defineIteratorMethods(t) {\n    [\"next\", \"throw\", \"return\"].forEach(function (e) {\n      define(t, e, function (t) {\n        return this._invoke(e, t);\n      });\n    });\n  }\n  function AsyncIterator(t, e) {\n    function invoke(r, o, i, a) {\n      var c = tryCatch(t[r], t, o);\n      if (\"throw\" !== c.type) {\n        var u = c.arg,\n          h = u.value;\n        return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) {\n          invoke(\"next\", t, i, a);\n        }, function (t) {\n          invoke(\"throw\", t, i, a);\n        }) : e.resolve(h).then(function (t) {\n          u.value = t, i(u);\n        }, function (t) {\n          return invoke(\"throw\", t, i, a);\n        });\n      }\n      a(c.arg);\n    }\n    var r;\n    o(this, \"_invoke\", {\n      value: function value(t, n) {\n        function callInvokeWithMethodAndArg() {\n          return new e(function (e, r) {\n            invoke(t, n, e, r);\n          });\n        }\n        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(e, r, n) {\n    var o = h;\n    return function (i, a) {\n      if (o === f) throw new Error(\"Generator is already running\");\n      if (o === s) {\n        if (\"throw\" === i) throw a;\n        return {\n          value: t,\n          done: !0\n        };\n      }\n      for (n.method = i, n.arg = a;;) {\n        var c = n.delegate;\n        if (c) {\n          var u = maybeInvokeDelegate(c, n);\n          if (u) {\n            if (u === y) continue;\n            return u;\n          }\n        }\n        if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) {\n          if (o === h) throw o = s, n.arg;\n          n.dispatchException(n.arg);\n        } else \"return\" === n.method && n.abrupt(\"return\", n.arg);\n        o = f;\n        var p = tryCatch(e, r, n);\n        if (\"normal\" === p.type) {\n          if (o = n.done ? s : l, p.arg === y) continue;\n          return {\n            value: p.arg,\n            done: n.done\n          };\n        }\n        \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(e, r) {\n    var n = r.method,\n      o = e.iterator[n];\n    if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y;\n    var i = tryCatch(o, e.iterator, r.arg);\n    if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y;\n    var a = i.arg;\n    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y);\n  }\n  function pushTryEntry(t) {\n    var e = {\n      tryLoc: t[0]\n    };\n    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);\n  }\n  function resetTryEntry(t) {\n    var e = t.completion || {};\n    e.type = \"normal\", delete e.arg, t.completion = e;\n  }\n  function Context(t) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], t.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(e) {\n    if (e || \"\" === e) {\n      var r = e[a];\n      if (r) return r.call(e);\n      if (\"function\" == typeof e.next) return e;\n      if (!isNaN(e.length)) {\n        var o = -1,\n          i = function next() {\n            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;\n            return next.value = t, next.done = !0, next;\n          };\n        return i.next = i;\n      }\n    }\n    throw new TypeError(_typeof(e) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), o(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) {\n    var e = \"function\" == typeof t && t.constructor;\n    return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name));\n  }, e.mark = function (t) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t;\n  }, e.awrap = function (t) {\n    return {\n      __await: t\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {\n    return this;\n  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {\n    void 0 === i && (i = Promise);\n    var a = new AsyncIterator(wrap(t, r, n, o), i);\n    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {\n      return t.done ? t.value : a.next();\n    });\n  }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () {\n    return this;\n  }), define(g, \"toString\", function () {\n    return \"[object Generator]\";\n  }), e.keys = function (t) {\n    var e = Object(t),\n      r = [];\n    for (var n in e) r.push(n);\n    return r.reverse(), function next() {\n      for (; r.length;) {\n        var t = r.pop();\n        if (t in e) return next.value = t, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, e.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(e) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var t = this.tryEntries[0].completion;\n      if (\"throw\" === t.type) throw t.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(e) {\n      if (this.done) throw e;\n      var r = this;\n      function handle(n, o) {\n        return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o;\n      }\n      for (var o = this.tryEntries.length - 1; o >= 0; --o) {\n        var i = this.tryEntries[o],\n          a = i.completion;\n        if (\"root\" === i.tryLoc) return handle(\"end\");\n        if (i.tryLoc <= this.prev) {\n          var c = n.call(i, \"catchLoc\"),\n            u = n.call(i, \"finallyLoc\");\n          if (c && u) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          } else if (c) {\n            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);\n          } else {\n            if (!u) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(t, e) {\n      for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n        var o = this.tryEntries[r];\n        if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) {\n          var i = o;\n          break;\n        }\n      }\n      i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);\n      var a = i ? i.completion : {};\n      return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a);\n    },\n    complete: function complete(t, e) {\n      if (\"throw\" === t.type) throw t.arg;\n      return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y;\n    },\n    finish: function finish(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;\n      }\n    },\n    \"catch\": function _catch(t) {\n      for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n        var r = this.tryEntries[e];\n        if (r.tryLoc === t) {\n          var n = r.completion;\n          if (\"throw\" === n.type) {\n            var o = n.arg;\n            resetTryEntry(r);\n          }\n          return o;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(e, r, n) {\n      return this.delegate = {\n        iterator: values(e),\n        resultName: r,\n        nextLoc: n\n      }, \"next\" === this.method && (this.arg = t), y;\n    }\n  }, e;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;