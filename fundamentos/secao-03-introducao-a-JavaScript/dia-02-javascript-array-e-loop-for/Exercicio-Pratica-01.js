let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;

for  (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumNumbers += numbers[index];
};

const arithmeticAverangeNumbers = sumNumbers/numbers.length;
console.log('A soma de todos os numeros do array é: ' + sumNumbers,'\n E a Média Aritimetica da lista numbers é :', + arithmeticAverangeNumbers);

if (numbers[numbers.length - 1] > 20) {
    console.log('O ultimo elemento da lista numbers é maior que 20.');
} else {
    console.log('O ultimo elemento da lista numbers é menor ou igual a 20');
};