// Arrow Functions //////////////////////////////////////////////
// Tratamento mais intuitivo do contexto do objeto atual.
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
// ECMA6 ///////////////////////////////////////////////////////
numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//  ex 1
var self = this;
let cincos = []
this.numeros.forEach(function (v) {
    if (v % 5 === 0)
        self.cincos.push(v);
});

//  ex 2
this.numeros.forEach(function (v) {
    if (v % 5 === 0)
        this.cincos.push(v);
}, this);

//  ex 3 (apenas apartir do ECMAScript5.1)
this.numeros.forEach(function (v) {
    if (v % 5 === 0)
        this.cincos.push(v);
}.bind(this));