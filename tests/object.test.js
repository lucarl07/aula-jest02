/* eslint-disable no-undef */
const carroDesejado = {
  portas: 4,
  cor: 'prata',
  mecanica: {
    motorizacao: [2.0, 'turbo', '140cv'],
  },
  tetoSolar: true,
};

// eslint-disable-next-line no-unused-vars
const carroAVenda = {
  portas: 4,
  cor: 'verde',
  mecanica: {
    motorizacao: [1.0, 'aspirado', '60cv'],
  },
  ano: 2018,
  tetoSolar: false,
  cambio: 'manual',
};

const carroOlx = {
  portas: 4,
  cor: 'prata',
  mecanica: {
    motorizacao: [2.0, 'turbo', '140cv'],
    cambio: 'automatico',
    tracao: '4x4',
  },
  ano: 2022,
  tetoSolar: true,
  wifi: true,
  cameraTraseira: true,
  centralMultimidia: true,
};

/* const carro = {
  cor: 'Amarelo',
  marca: 'Lorota',
  modelo: 'Boiola',
  ano: 2024,
  estaQuitado: false,
};

console.log(`Meu carro é um ${carro.marca} ${carro.modelo} `); */

test('Características do carro desejado', () => {
  expect(carroOlx).toMatchObject(carroDesejado);
});
