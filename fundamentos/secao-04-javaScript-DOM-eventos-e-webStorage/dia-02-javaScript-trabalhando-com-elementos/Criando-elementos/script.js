const addChild = (namePai,nomeId) => {
  const elemento = document.getElementById(namePai);
  const elementoCriado = document.createElement('section');
  elementoCriado.id = nomeId
  elemento.appendChild(elementoCriado)
}
addChild('pai','irmao')
addChild('elementoOndeVoceEsta','filhao')
addChild('primeiroFilhoDoFilho','neto')

const terceiroFilhoApartirDeNeto = document.getElementById('neto').parentElement.parentElement.nextElementSibling;
console.log(terceiroFilhoApartirDeNeto);