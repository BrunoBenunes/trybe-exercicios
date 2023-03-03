function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
 // retire essa linha ao implementar o tipo de variável correta.
}
imprimeIdade(30)

// 2-

const pessoa = {
nome: 'Henri',
idade: 20
}
pessoa.nome = 'Luna'
pessoa.idade = 19

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 3- 

let favoriteFood = 'Lasanha';

favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// 4- 
const name = 'Adriana';
const lastName = 'Soares';

console.log(`Olá ${name} ${lastName} !`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}

let a = 3;
let b = 5;

console.log(`O resultado da soma de ${a} +  ${b} é: ${soma(a,b)}`);

// 5 ----------------------------------
const numeroAleatorio = () => {
  return Math.random()
}
console.log(numeroAleatorio());

// 6 ----------------------------------
const hello = (nome) => {
  return `Olá, ${nome}!`
}
let nome = 'Ivan';
console.log(hello(nome));

// 7 ---------------------------------- 
const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`
}
let sobrenome = 'Pires'
console.log(nomeCompleto(nome, sobrenome));
