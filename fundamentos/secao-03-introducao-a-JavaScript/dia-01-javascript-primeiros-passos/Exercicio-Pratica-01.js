let a = 10
let b = 5
let c = 20
const adicao = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % b;
console.log(adicao,subtracao,multiplicacao,divisao,modulo);

if ( a > b) {
    console.log('O numero ',a,' é maior que ',b);
} else {
    console.log('O numero ',b,' é maior que ',a);
}

if ( a > b && a > c){
    console.log('Entre ',a,b,c,' O maior numero é o ',a);
} else if (b > a && b > c) {
    console.log('Entre ',a,b,c,' O maior numero é o ',b);
} else if (c > a && c > b) {
    console.log('Entre ',a,b,c,' O maior numero é o ',c);
}