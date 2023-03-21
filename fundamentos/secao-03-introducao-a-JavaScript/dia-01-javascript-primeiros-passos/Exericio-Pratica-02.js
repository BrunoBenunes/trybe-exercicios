// Triangulo ou Não?
let a1 = 30;
let a2 = 30;
let a3 = 120;
const somaAngle = a1 + a2 + a3;
const trueTriangle = 180;

if (a1 < 0) {
    console.log('O Primeiro número ',a1,' É inválido, pois é um numero negativo!')
} else if (a2 < 0) {
    console.log('o Segundo número ',a2,' É inválido, pois é um numero negativo!')
} else if (a3 < 0) {
    console.log('O Terceiro número ',a3,' É inválido, pois é um numero negativo!')
}
else {
    console.log(somaAngle === trueTriangle)
}