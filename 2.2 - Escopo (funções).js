// Funções com escopo no bloco ///////////////////////////////////////////////////
// Apartir do ECMAScript6, as funções tambem passam a valer apenas no escopo
// do bloco onde foram criadas, assim como uma variavel 6
////////////////////////////////////////////////////////////////////////////////////
// ECMA6 ///////////////////////////////////////////////////////////////////////////
{
    function foo (){ return 1}
    console.log("bloco1: ", foo() === 1) // True
    {
        function foo(){return 2}
        console.log("bloco2: ", foo() === 2) // True
    }
    console.log("bloco3: ", foo() === 1) // True
}
////////////////////////////////////////////////////////////////////////////////////
// ECMA5 ///////////////////////////////////////////////////////////////////////////
(function() {
    var foo = function () { return 1}
    console.log("bloco1: ", foo() === 1) // True
    (function () {
        var foo = function () { return 2}
        console.log("bloco2: ", foo() === 2) // True
    })()
    console.log("bloco3: ", foo() === 1) // True
})