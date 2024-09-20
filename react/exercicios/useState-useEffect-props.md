# Exercícios de useState, useEffect e Props no React

## Exercícios de useState

### 1. Contador Simples

Crie um componente com um contador. O valor deve começar em 0 e aumentar em 1 cada vez que o botão "Incrementar" for clicado.

**Tópicos**: Atualização de estado, setState.

### 2. Input Controlado

Crie um campo de texto controlado que exiba o valor digitado pelo usuário abaixo do input.

**Tópicos**: Bind de input, sincronização de estado com o valor do input.

### 3. Contador de Dois Botões

Crie um contador com dois botões: um para incrementar e outro para decrementar. O valor não pode ser negativo.

**Tópicos**: Condicionais no uso de `setState`.

### 4. Toggle de Exibição

Crie um botão que, ao ser clicado, mostre ou oculte um texto na tela.

**Tópicos**: Uso booleano do estado, toggle entre `true` e `false`.

---

## Exercícios de useEffect

### 1. Efeito ao Montar o Componente

Crie um componente que exiba uma mensagem no console quando ele for montado na tela, usando o `useEffect` com um array de dependências vazio.

**Tópicos**: Efeito inicial com `useEffect`.

### 2. Efeito com Dependências

Crie um contador que atualize o título da página para o número de cliques em um botão. O título da página deve ser atualizado somente quando o valor do contador mudar.

**Tópicos**: Efeito dependente de estado.

### 3. Fetch de Dados com `useEffect`

Crie um componente que faça uma chamada para uma API (por exemplo, a API pública de usuários do GitHub) e exiba os dados na tela. Utilize o `useEffect` para realizar a chamada à API quando o componente for montado.

**Tópicos**: Efeito com fetch e uso de `async`/`await`.

### 4. Limpeza no `useEffect`

Crie um componente com um temporizador (timer) que mostre o tempo em segundos desde que o componente foi montado. O temporizador deve ser pausado quando o componente for desmontado.

**Tópicos**: Função de limpeza no `useEffect`.

---

## Exercícios de Props

### 1. Componente Saudação

Crie um componente que receba uma `prop` com o nome da pessoa e exiba "Olá, [nome]!" na tela. Utilize `props` para passar o nome dinamicamente.

**Tópicos**: Passagem e uso de props.

### 2. Lista de Tarefas

Crie um componente de lista de tarefas (to-do list) que receba como `prop` um array de tarefas e exiba cada uma delas em uma lista `<ul>`.

**Tópicos**: Renderização de listas com props.

### 3. Botão Personalizado

Crie um componente de botão que recebe uma `prop` para definir o texto exibido no botão. O componente pai deve poder passar diferentes textos para o botão.

**Tópicos**: Personalização de componentes com props.

### 4. Passando Funções como Props

Crie um componente de botão que recebe uma função via `prop`. Quando o botão for clicado, ele deve executar a função passada, por exemplo, exibindo um alerta ou console log.

**Tópicos**: Funções passadas como props, interações entre componentes pai e filho.

---

## Desafios Avançados

### 1. Controle de Modal com useState e props

Crie um componente de modal (janela de diálogo) que pode ser aberto e fechado usando `useState`. O estado de aberto ou fechado deve ser controlado pelo componente pai, passando a função de controle através de `props`.

**Tópicos**: Integração de `useState` com props, passando funções entre componentes.

### 2. API e props

Faça uma chamada a uma API para buscar dados de um usuário (por exemplo, do GitHub). O componente principal deve fazer o fetch e passar os dados para um componente filho que irá exibi-los na tela.

**Tópicos**: Combinação de `useEffect` com props para renderização de dados.
