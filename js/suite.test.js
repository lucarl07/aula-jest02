/* eslint-disable no-undef */
test('Verifica palavras dentro de um array', () => {
  const cestaDeFrutas = ['Pera', 'Uva', 'Maçã', 'Manga', 'Melancia'];

  expect(cestaDeFrutas).toContain('Uva');
});

test('Verifica se não há cargo de gerente entre os funcionários', () => {
  const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coordenador'];

  expect(cargos).not.toContain('Gerente');
});

test('Verifica se há a palavra Senai', () => {
  const frase = 'O Senai olhou pro manicômio em Barbacena e pensou: "Fracos".';

  expect(frase).toMatch(/[S,s]enai/);
});
