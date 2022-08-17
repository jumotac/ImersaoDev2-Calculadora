var primeiroValor = parseInt (prompt('Digite o primeiro valor:'))
var segundoValor = parseInt (prompt('Digite o segundo valor:'))

var operacao = prompt('Digite: \n 1 para Divisão; \n 2 para Multiplicação; \n 3 para Soma; \n 4 para Subtração.')

if (operacao ==1) {
    var resultado = primeiroValor / segundoValor 
    document.write('<h2>' + primeiroValor + ' / ' + segundoValor + ' = ' + resultado + '<h2>')
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor 
    document.write('<h2>' + primeiroValor + ' x ' + segundoValor + ' = ' + resultado + '<h2>')
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor 
    document.write('<h2>' + primeiroValor + ' + ' + segundoValor + ' = ' + resultado + '<h2>')
}else if (operacao ==4) {
    var resultado = primeiroValor - segundoValor 
    document.write('<h2>' + primeiroValor + ' - ' + segundoValor + ' = ' + resultado + '<h2>')
}else {
    document.write('<h2> Opção Inválida <h2>')
}

// ANOTAÇÒES:
// if = se
// else = senão
// else if = senão se

// REVISÃO:
// Escrever na tela - document.wirte()
// concatenação (juntar palavra com variáveis) - ("palavra" + variável)
// == - comparação é diferente de = que usamos para atribuição  