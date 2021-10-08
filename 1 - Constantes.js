// Constantes ///////////////////////////////////////////////////////////////////////////////
// ECMA6 adiciona o suporte a constantes ou tambem conhecidas como "variaveis imutáveis", ou seja, variáveis que não podem ser reatribuidas
// isso apenas torna a própria variável imutável e não o seu conteudo.
// EX: no caso do conteudo ser um objeto, isso significa que o próprio objeto ainda pode ser alterado.
/////////////////////////////////////////////////////////////////////////////////////////////
// ECMA6 ////////////////////////////////////////////////////////////////////////////////////
// ex 1:
const PI = 3.141593
PI = 3.1 // Uncaught TypeError: Assignment to constant variable.
// ex 2:
const pessoa = {nome: 'Gustavo'}
pessoa = 'Alessandro' // Uncaught TypeError: Assignment to constant variable.
pessoa.nome = 'Alessandro' // {nome: 'Alessandro'}
/////////////////////////////////////////////////////////////////////////////////////////////
// ECMA5 ////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
PI = 3.1 // PI == 3.141593
/////////////////////////////////////////////////////////////////////////////////////////////