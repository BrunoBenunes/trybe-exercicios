// elemento OndeVoceEsta
const elementoOndeVoceEsta = document.querySelector('#pai').firstElementChild.nextElementSibling;
console.log(elementoOndeVoceEsta);

// Elemento pai apartir de do elemento OndeVoceEsta
const paiApartirDeElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').parentElement
console.log(paiApartirDeElementoOndeVoceEsta)
paiApartirDeElementoOndeVoceEsta.style.color = 'blue'

// Elemento primeiroFilhoDoFilho adicionando um texto a ele.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
primeiroFilhoDoFilho.innerHTML = '<p> Olá </p>'
primeiroFilhoDoFilho.style.color = 'red';

// Elemento primeiroFilho a partir do elemento Pai
const primeiroFilhoApartirDePai = document.querySelector('#pai').firstElementChild;
console.log(primeiroFilhoApartirDePai);

// Elemento primeiroFilho a partir do elemento OndeVoceEsta
const primeiroFilhoApartirDeOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilhoApartirDeOndeVoceEsta);

// Texto Atenção a partir de elementoOndeVoceEsta
const textAtencaoApartirDoElementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').nextSibling;
console.log(textAtencaoApartirDoElementoOndeVoceEsta);

// Elemento terceiroFilho a partir de elementoOndeVoceEsta
const terceiroFilhoApartirDeOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(terceiroFilhoApartirDeOndeVoceEsta);

// Elemento terceiroFilho a partir de pai
const terceiroFilhoApartirDePai = document.querySelector('#pai').children.terceiroFilho;
console.log(terceiroFilhoApartirDePai);
