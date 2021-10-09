// Arrow Functions //////////////////////////////////////////////
// com as arrow funcions, as funçoes tem a sintaxe mais curta
////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let cincos = []
numeros.forEach(item => {
    if(item % 5 === 0){
        cincos.push(item)
    }
})
console.log(cincos) // 5, 10, 15, 20
////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let cincos = []
numeros.forEach(function (item){
    if(item % 5 === 0){
        cincos.push(item)
    }
})
console.log(cincos) // 5, 10, 15, 20
