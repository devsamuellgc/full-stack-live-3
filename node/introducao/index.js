const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Quiz Nome
// rl.question("Qual é o seu nome?", (name) => {
//   console.log(`Olá, ${name}`);
//   rl.close();
// });

// Jogo Pedra, Papel e Tesoura
// index           0        1         2
const opcoes = ["pedra", "papel", "tesoura"];

function jogar() {
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
  rl.question("Escolha pedra, papel ou tesoura: ", (escolhaUsuario) => {
    if (escolhaComputador === escolhaUsuario) {
      console.log(
        `Sua ecolha: ${escolhaUsuario}, escolha da máquina: ${escolhaComputador}. Empate!`
      );
    } else if (
      (escolhaUsuario === opcoes[0] && escolhaComputador === opcoes[2]) ||
      (escolhaUsuario === opcoes[1] && escolhaComputador === opcoes[0]) ||
      (escolhaUsuario === opcoes[2] && escolhaComputador === opcoes[1])
    ) {
      console.log(
        `Sua ecolha: ${escolhaUsuario}, escolha da máquina: ${escolhaComputador}. Você venceu!`
      );
    } else {
      console.log(
        `Sua ecolha: ${escolhaUsuario}, escolha da máquina: ${escolhaComputador}. Você perdeu!`
      );
    }

    rl.close();
  });
}

// jogar();

// Jogo da adivinhação

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
  rl.question("Adivinhe um número de 1 a 10: ", (resposta) => {
    const numero = parseInt(resposta);

    if (numero === numeroSecreto) {
      console.log(
        `Número escolhido: ${numero} e número sorteado: ${numeroSecreto}. Parabéns, você acertou!`
      );
    } else {
      console.log(
        `Número escolhido: ${numero} e número sorteado: ${numeroSecreto}. Que pena, você errou!`
      );
    }

    rl.close();
  });
}

// adivinharNumero();

