const { encode, decode } = require('./script')

describe('Verifica o comportamento da Função encode()', () => {
  it('Verifica se existe a função encode() e é uma função. Retorno esperado: function', () => {
    expect(typeof encode).toBe('function');
  });

  it('Na função encode() verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('Oi eu sou o Bruno')).toBe('O3 25 s45 4 Br5n4');
  });

  it('Verifica se alguma outra letra também é modificada', () => { 
    expect(encode('ps: JS')).toBe('ps: JS');
  });

  it('Verifica seVerifica se a string retornada de encode() tem a mesma quantidade de caracteres que a string passada como parametro', () => {
    expect(encode('Oi sou eu').length).toBe('Oi sou eu'.length);
  })
});


describe('Verifica o comportamento da Função decode()', () => {
  it('Verifica se existe a função decode() e é uma função. Retorno esperado: function', () => {
    expect(typeof decode).toBe('function')
  });

  it('Para a função decode, verifica se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
    expect(decode('O3 25 s45 4 Br5n4')).toBe('Oi eu sou o Bruno');
  });

  it('Verifica se alguma outra letra também é modificada', () => {
    expect(decode('8, 99876')).toBe('8, 99876');
  });

  it('Verifica se a string retornada de decode() tem a mesma quantidade de caracteres que a string passada como parametro', () => {
    expect(decode('O3').length).toBe('O3'.length);
  })
});