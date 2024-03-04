function validarEmail(email) {
  // Regex Original: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
  // Regex Correta: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (email.match(regex)) {
    return 'O e-mail está validado!';
  }

  return 'Erro: verifique seu e-mail e tente novamente.';
}

const exemplo01 = validarEmail('email@hotmail.com');
console.log(exemplo01);

const exemplo02 = validarEmail('email@hotmail.com.br');
console.log(exemplo02);

module.exports = validarEmail;
