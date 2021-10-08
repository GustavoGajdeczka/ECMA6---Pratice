// Variaveis com escopo no bloco ///////////////////////////////////////////////////
// bloco é tudo que se encontra dentro de {chaves}, geralmente dentro de condições if, switch e loops for e while 
// let, const = existem apenas no escopo do bloco
// var        = existe apenas no escopo do bloco da função, ou globalmente se declaradas fora da função
// dessa forma as variaveis perdem o 'hoisting' que é quando a variavel pode ser chamada mesmo antes de ser declarada
////////////////////////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////////////////////////
// EX 1:
function veiculo(){
    if(true){
        var veiculo1 = 'moto';        //existe apenas no escopo do bloco da função
        const veiculo2 = 'carro';     //existe apenas no escopo do bloco
        let veiculo3 = 'barco';        //existe apenas no escopo do bloco
    }
    console.log(veiculo1); // 'moto'
    console.log(veiculo2); // erro: veiculo2 is not defined
    console.log(veiculo3); // erro: veiculo3 is not defined
}
// EX 2:
function simplesVar(){
    a = 5
    var a = a * 2 // 'hoisted ou içado'
    return a // resultado = 10 // isso ocorre pois o var permite que a variavel seja 'içada' e possa ser utilizada mesmo antes de sua declaração
}
function simplesLet(){
    a = 5 // <== ReferenceError: a is not defined // isso ocorre pois tanto o let quanto o const criam uma sombra na variavel, não permitindo que ela seja usada antes de ser declarada
    let a = a * 2
    return a
}

////////////////////////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////////////////////////
function veiculo(){
    if(true){
        veiculo1 = 'moto';        
        veiculo2 = 'carro';     
        veiculo3 = 'barco';        
    }
    console.log(veiculo1); // 'moto'
    console.log(veiculo2); // 'carro'
    console.log(veiculo3); // 'barco'
}
/////////////////////////////////////////////////////////////////////////////////////

