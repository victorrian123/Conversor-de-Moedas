function Converter() {
    var valorElemento = document.getElementById("valordolar")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 5
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = `Valor em Real R$: ${valorEmReal} Dolares` 
    elementoValorConvertido.innerHTML = valorConvertido

}

function Converter1() {
    var valorElemento1 = document.getElementById("valoreuro")
    var valor1 = valorElemento1.value
    var valorEmEuroNumerico = parseFloat(valor1)
    var valorEmEuro = valorEmEuroNumerico * 6
    var elementoValorConvertido1 = document.getElementById("valorConvertido2")
    var valorConvertido1 = `Valor em Real R$: ${valorEmEuro} Euros` 
    elementoValorConvertido1.innerHTML = valorConvertido1
}