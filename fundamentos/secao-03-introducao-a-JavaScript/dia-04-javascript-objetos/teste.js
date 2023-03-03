const meuObjeto = {
  chave1: 'valor1',
  chave2: 'valor2',
  chave3: 'valor3',
  chave4: [
    {
      pizza: 'asdasd'
    },
    {
      pizza2: 'skdkdkdk'
    }
  ]
};
const chaves = Object.keys(meuObjeto);
console.log(meuObjeto.chave4[0+1])
