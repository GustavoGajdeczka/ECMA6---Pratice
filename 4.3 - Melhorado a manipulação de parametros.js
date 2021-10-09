// Operador Spread ////////////////////////////////
// Distribuição de elementos de uma coleção iterável (como uma matriz ou mesmo uma string) 
// em elementos literais e parâmetros de função individuais.
////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////
var params = ['hello', true, 7]
var outros = [1, 2, ...params] // [1, 2, 'Hello', True, 7]

function foo(x, y, ...a){
    return (x + y) * a.length
}
foo(1, 2, ...params) === 9

var str = 'foo'
var chars = [...str] // ['f', 'o', 'o']

////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////
var params = ['Hello', true, 7]
var outros = [1, 2]

function foo (x, y){
    var a = Array.prototype.slice.call(arguments, 2)
    return (x + y) * a.length
}
foo.apply(undefined, [1,2].concat(params)) === 9

var str = 'foo'
var chars = str.split("") // ["f", "o", "o"]