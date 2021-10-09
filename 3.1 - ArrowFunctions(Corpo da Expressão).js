// Arrow Functions //////////////////////////////////////////////
// com as arrow funcions, as funçoes tem a sintaxe mais curta
// porem elas funcionam melhor em funções que não são metodos
////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////
(parametro) => { return parametro + algo}

var elementos = ['fogo', 'agua', 'terra', 'ar']
elementos.map(item => {return item.length}) // [4, 4, 5, 2]


adição = evens.map(v => v + 1)
pares = evens.map(v => ({ even : v, adição: v + 1}))
numeros = evens.map((v, i) => v + i)
////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////
var func = function (parametro){
    return parametro + this.algo
}

var elementos = ['fogo', 'agua', 'terra', 'ar']
elementos.map(function(item){
    return item.length
}) // [4, 4, 5, 2]


adição = evens.map(function(v) {return v + 1})
pares = evens.map(function(v) {return {even: v, adição: v + 1}})
numeros = evens.map(function (v, i) {return v + 1})
////////////////////////////////////////////////////////////////
