// Todo list
// Funções: Adicionar, listar e remover tarefas

const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function carregarTarefas() {
  try {
    const data = fs.readFileSync("tarefas.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function salvarTarefas(tarefas) {
  fs.writeFileSync("tarefas.json", JSON.stringify(tarefas));
}

function adicionarTarefa(tarefa) {
  const tarefas = carregarTarefas();
  tarefas.push(tarefa);
  salvarTarefas(tarefas);
  console.log(`Tarefa adicionada: "${tarefa}"`);
}

function listarTarefas() {
  const tarefas = carregarTarefas();
  console.log("Tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa}`);
  });
}

function removerTarefa(indice) {
  const tarefas = carregarTarefas();
  if (indice < 1 || indice > tarefas.length) {
    console.log("Índice inválido");
  }
  const tarefaRemovida = tarefas.splice(indice - 1, 1);
  salvarTarefas(tarefas);
  console.log(`Tarefa removida: ${tarefaRemovida}`);
}

function iniciar() {
  rl.question("Digite o comando desejado (add, list, remove): ", (comando) => {
    if (comando === "add") {
      rl.question("Digite a tarefa: ", (tarefa) => {
        adicionarTarefa(tarefa);
        rl.close();
      });
    } else if (comando === "list") {
      listarTarefas();
      rl.close();
    } else if (comando === "remove") {
      rl.question("Digite o número da tarefa para remover: ", (indice) => {
        removerTarefa(parseInt(indice));
        rl.close();
      });
    } else {
      console.log("Comando inválido!");
      rl.close();
    }
  });
}

iniciar();
