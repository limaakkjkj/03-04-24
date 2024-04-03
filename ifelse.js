/**
 * O algoritmo ifelse serve para validação de dados, por exemplo:
 * if (variavell = variavel2) ( algo irá acontecer se a variavel1 for igual a variavel2 ) else { algo irá acontecer se a variavell for diferente da variavel2 }
 * 
 * if: nome do algoritmo
 * parênteses (): local onde se declaram os parâmetros ou expressão a ser validada
 * chaves (): bloco de códigos a serem executados, ou seja, tudo que estiver dentro do bloco de códigos será executado
 * else: "senão" é onde serão executados os códigos, que estiverem dentro do bloco (), caso a validação do algoritmo "if" retorne falsa
 * 
 * operadores lógicos
 * 
 * == serve para comparar se uma variável/valor é igual a outra
 * != serva para comparar se uma variável/valor é diferente da outra
 * > serve para comparar se uma variável/valor é maior que a outra
 * < serve para comparar e uma variável/valor é menor que a outra
 * >= serve para comparar se uma variável/valor é maior ou igual a outra
 * <= serve para comparar se uma variável/valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no inicio da declaração de parâmetros/expressão, por exemplo:
 * if (!variavel1 == variavel2) {bloco de codigo} aqui significa que: se a comparação da variável1 com a variável2 retornar falso
 * os códigos que estiverem dentro do bloco de código serão executados
 * não havendo a necessidade do uso da cláusula "else"
 * 
 * criar um validador onde você irá declarar duas variáveis, cada uma com um valor DIFERENTE da outra
 * então haverá uma resposta diferente para cada situação
 * 
 * vamos criar dois inputs, onde cada input irá para cada uma das duas variáveis
 * ou seja:
 * 
 * <input type="text" id="txtVar1"/>
 * <input type="text" id="txtVar2"/>
 * 
 * var txtVar1 = document.getElementById("txtVar1");
 * var txtVar1 = document.getElementById("txtVar2");
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * enviar os dados via console.log()
*/


var txtVar1 = document.getElementById("txtVar1");
var txtVar2 = document.getElementById("txtVar2");


document.getElementById("validateButton").addEventListener("click", function() {
  
  var value1 = txtVar1.value;
  var value2 = txtVar2.value;

  
  if (value1 !== value2) {
    console.log("Os valores são diferentes.");
    
  } else {
    console.log("Os valores são o mesmo.");
  }
});
