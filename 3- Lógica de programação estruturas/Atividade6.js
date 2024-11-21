//Programa que adivinha números:
//SLIDE 68

const readline = require("readline"); // Importa o módulo readline
const rl = readline.createInterface({
  input: process.stdin, // A entrada do terminal (Usuário insere número)
  output: process.stdout, // A saída do terminal (resposta do programa)
});

let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório de 1 a 10

rl.question("Adivinhe o número de 1 a 10: ", function (palpite) {
  // Pergunta para o usuário
  if (palpite == numeroAleatorio) {
    // Se o palpite for igual ao número aleatório
    console.log("Você acertou!");
  } else {
    // Caso o palpite seja diferente do número aleatório
    console.log("Errou! O número era " + numeroAleatorio);
  }
  rl.close(); // Finaliza o programa
});
