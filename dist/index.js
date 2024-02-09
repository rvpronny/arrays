/**
 * Imprime em tela o conteúdo dos variaveis
 * @param {string} descritivo Qoal é o descritivo que será impresso
 * @param {number | string | boolean} oque conteúdo que será impresso
 */
function imprimir(descritivo, oque) {
    console.log(descritivo, oque);
}
/**
 * Soma dois números e retorna o resultado
 * @param numero primeiro Número do soma
 * @param soma Valor a ser acresceotado
 */
function somar(numero, soma) {
    var x;
    numero = 50;
    x = numero + soma;
    return x;
}
/**
 * Recebe Objeto com x e y e retorna a soma
 * @param objeto Objeto com  e y
 * @returns soma de x + y
 */
function somarObjeto(objeto) {
    objeto.x = 100;
    objeto.y = 200;
    return objeto.x + objeto.y;
}
var x = 10;
var y = 20;
var numeros = {
    x: 10,
    y: 20
};
//var empresa: string = "Fleek"
//var ativo: boolean = true
//imprimir("\n\nValor de Empresa: ", empresa)
//imprimir("\n\nValor de x: ", x)
//imprimir("\n\nValor de Empresa: ", empresa)
//imprimir("\n\nValor de Ativo: ", ativo)
/*console.log("\n\nValor de x: ", x, "\n\nValor de Empresa: ", empresa, "\n\nValor de Ativo: ", ativo)*/
var somatoria = somar(x, y);
imprimir("Soma do Objeto: ", somarObjeto(numeros));
imprimir("Soma", somatoria);
imprimir("\n\nValor do variável x: ", x);
imprimir("\n\nValor do variável y: ", y);
imprimir("\n\nValor do objeto x: ", numeros.x);
imprimir("\n\nValor do objeto y: ", numeros.y);
//# sourceMappingURL=index.js.map