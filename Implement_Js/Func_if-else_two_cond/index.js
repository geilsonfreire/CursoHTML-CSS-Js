var c = 5;
var d = -1;

console.log("if com duas condições, onde ambas precisam ser verdadeiras:");
if (c > d && d > 0){
    console.log("c é maior que d E d é um número positivo");
}
if (c > d && d <= 0){
    console.log("c é maior que d E d não é um número positivo");
}
console.log("if com duas condições, onde pelo menos uma precisa ser verdadeira:");  
if (c < d || d > 0){
    console.log("c é menor que d OU d é um número positivo");
}
if (c < d || d <= 0){
    console.log("c é menor que d OU d não é um número positivo");
}

console.log("com mais de duas condições, combinação dos operadores && e II, assim como o uso do operador lógico de negação NOT ( ! ):")
var c = 5;
var d = -1;
var e = false; // valores possíveis -> True, False

console.log("if com mais de duas condições e combinação de && e ||:");
if ((c > d && d > 0) || (c > d && d <= 0)){
    console.log("c é maior que d E d é um número positivo");
    console.log("OU");
    console.log("c é maior que d E d não é um número positivo");
}
console.log("if com condição não verdadeira:");
if (!e){
    console.log("e tem valor false");
}