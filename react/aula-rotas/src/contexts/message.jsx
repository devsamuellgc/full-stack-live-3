/**
 * Criar um contexto
 * Um estado com uma mensagem
 * Criar 2 páginas -> Incluir nas rotas (arquivo routes.jsx)
 * 1ª pág. - Botão centralizado "Gerar mensagem"
 * Função de gerar mensagem ao clicar no botão, redirecionar para a 2ª pág.
 * 2ª pág. - Apresentar a mensagem gerada
 */

import { createContext, useContext, useState } from "react";
import { useRedirect } from "../hooks/useRedirect";

const MessageContext = createContext();

function MessageProvider({ children }) {
  const [message, setMessage] = useState("");
  const { goTo } = useRedirect();

  function handleMessage(message) {
    setMessage(message);
  }

  function submitMessage() {
    goTo("/mensagem");
  }

  const value = { message, handleMessage, submitMessage };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
}

function useMessageContext() {
  const values = useContext(MessageContext);

  return values;
}

export { useMessageContext, MessageProvider };
