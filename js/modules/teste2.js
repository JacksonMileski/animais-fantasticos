export function teste3(){
    console.log('isso é teste 3');
}

export function teste4(){
    console.log('isso é teste 4');
}

//FIXME: Podemos exportar objetos, funções, classes, números, strings e mais
export const senha = 938283298239;
var x = 44232; //FIXME: mesmo sendo 'var' nao vai poder ser usado em outro .js, apenas se exportar


//FIXME: THIS FORA DE UM OBJETO FAZ REFERENCIA A UNDEFINED, AO INVÉS DE FAZER REFERÊNCIA AO WINDOW
//ISSO EM MODULO, SE FOSSE FORA DO MODULO FARIA REFERENCIA AO WINDOW. ACHO QUE TUDO ISSO É MODULO
//PQ ESTOU COM type="module//MAS THIS DENTRO DE UM OBJETO FAZ REFERENCIA AO OBJETO

//FIXME:O Module é assincrono, tenta carregar na ordem, caso for muito grande n carrega na ordem, porem na hora da execução
//ele carrega na ordem// Acho que é isso

//FIXME: No module tem o 'use strict' que previne algumas ações consideradas erros, basta adicionarmos 'use strrict'
//no topo de um arquivo, que ele entrará neste modo.
//FIXME: coloquei alguns erros que acontecem no index.html no script com 'use strict'