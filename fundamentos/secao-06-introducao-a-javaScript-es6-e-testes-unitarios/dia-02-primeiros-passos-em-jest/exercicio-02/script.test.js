const { myFizzBuzz } = require('./script');

describe('Verificando o comportamento da função myFizzBuzz', () => {
  it('Verifica se a função myFizzBuzz(num), recebendo como parametro um número divisível por 3 e 5, o seu retorno é esperado: fizzbuzz' , () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  
  it('Verifica se a função myFizzBuzz(num), sendo num um número divisível por 3, o seu retorno é esperado: fizz.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se a função myFizzBuzz(num), sendo num um número divisível por 5, o seu retorno é esperado: buzz.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se a função myFizzBuzz(num), sendo num um número que NÂO é divisível por 3 ou 5, o seu retorno é esperado: (7)', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Verifica se a função myFizzBuzz(num), sendo num um parâmetro que NÂO é um número, seu retorno é esperado: false', () => {
    expect(myFizzBuzz('2')).toBe(false)
  });
});