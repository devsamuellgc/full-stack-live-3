import { useState, useContext, createContext } from "react";

// 1. Criar o Contexto
const MeuContexto = createContext();

// 2. Provedor do Contexto
function Provedor({ children }) {
  const [mensagem, setMensagem] = useState("Olá, Mundo!");

  return (
    <MeuContexto.Provider value={{ mensagem, setMensagem }}>
      {children}
    </MeuContexto.Provider>
  );
}

// 3. Componente que consome o contexto
function ComponenteFilho() {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <h1>{mensagem}</h1>
      <button onClick={() => setMensagem("Contexto Atualizado!")}>
        Atualizar Mensagem
      </button>
    </div>
  );
}

// 4. Componente principal
function App() {
  return (
    <Provedor>
      <ComponenteFilho />
    </Provedor>
  );
}

export default App;
