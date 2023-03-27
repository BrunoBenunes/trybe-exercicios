const { myRemove } = require('./script');

describe('Verifica o comportamento da função myRemove()', () => {
  it('Verifica de a chamada myRemove([1, 2, 3, 4], 3) tem a array esperada: [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
    expect(myRemove([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
  });
});
