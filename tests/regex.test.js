/* eslint-disable no-undef */
const validarEmail = require('./regex');

describe('Testa a função validarEmail()', () => {
  test('Verifica se um e-mail corretamente escrito é aprovado.', () => {
    const email01 = 'email@hotmail.com';
    const response = validarEmail(email01);

    expect(response).toBe('O e-mail está validado!');
  });
});
