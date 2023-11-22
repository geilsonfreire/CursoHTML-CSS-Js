var contador;
for (contador = 0; contador < 10; contador++) {
    //As instruções incluídas aqui serão executadas 10 vezes
    /*
    Será exibido o valor da variável contador 10 vezes 
    no Console. O primeiro número será 0 e o último será 9 
    (repare que começamos com a nossa variável contador 
    recebendo o número 0 e sendo incrementada 
    até ser menor do que 10, ou seja, até o número 9.
    */
    console.log(contador);
}



var contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

var contador = 0;
do {
    console.log(contador);
    contador += 1;
} while (contador < 10);


var frutas = ['Laranja', 'Uva', 'Pera'];
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(var i = 0; i < frutas.length; i++){
	console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
      
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
for(var fruta in frutas){
	console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}