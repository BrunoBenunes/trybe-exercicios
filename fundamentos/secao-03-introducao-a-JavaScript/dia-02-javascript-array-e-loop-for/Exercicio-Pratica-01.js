let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Somando e Descobrindo a media aritimetica

let sumNumbers = 0;

for  (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers += numbers[index];
};

const arithmeticAverangeNumbers = sumNumbers/numbers.length;
console.log('A soma de todos os numeros do array é: ' + sumNumbers,'\n E a Média Aritimetica da lista numbers é :', + arithmeticAverangeNumbers);

// Descobrindo se o ultimo elemento e maior que 20

if (numbers[numbers.length - 1] > 20) {
    console.log('O ultimo elemento da lista numbers é maior que 20.');
} else {
    console.log('O ultimo elemento da lista numbers é menor ou igual a 20');
};

// Descobrindo o Maior Valor contido na lista numbers

let highNumber = 0

for (let index = 0; index < numbers.length ; index += 1) {
    if (numbers[index] > highNumber){
        highNumber = numbers[index];
    }
}
console.log('O maior valor contido na lista numbers é: ' + highNumber)

// Descobrindo quantos valores ímpares existem na lista numbers

let oddCount = 0;
let oddElement = []

for (let index = 0; index < numbers.length ; index += 1) {
    if (! (numbers[index] % 2 === 0)) {
        oddCount += 1;
        oddElement.push(numbers[index])
    } 
}
console.log(oddCount,oddElement);

// Descobrindo o Menor valor na lista numbers

let lowNumber = 0

for (let index = 0; index < numbers.length ; index += 1) {
    if (lowNumber === 0){
        lowNumber = numbers[index];
    } else if (numbers[index] < lowNumber) {
        lowNumber = numbers[index]
    }
} 
console.log(lowNumber)

// Criando um array que vá de 1 a 25 e imprima -

let arrayNumbers1a25 = []

for (let index = 1; index <= 25; index += 1) {
    arrayNumbers1a25.push(index)
}
console.log('Criado um array de 1 a 25 utilizando for : ' + arrayNumbers1a25)


// let arrayNumbers1a25 = []

// for (index = 0; index < 25 ; index += 1) {
//     let randomNumber = Math.ceil(Math.random() * 25)
//     if (!(arrayNumbers1a25.includes(randomNumber))) {
//         arrayNumbers1a25.push(randomNumber)
//     } else {
//         index -= 1;
//     }
// }
// console.log('Um Array criado automagicamente com for, sem repetir nenhum valor! : ' + arrayNumbers1a25)