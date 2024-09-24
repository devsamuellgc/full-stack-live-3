import { useState, useContext, createContext } from "react";

// 1º - Criou o contexto de autenticação
const AuthContext = createContext();

// 2º - Criamos o provider
function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: "", email: "" });

  function logOut() {
    setUser({ name: "", email: "" });
    window.location.href = "/login";
  }

  const value = { user, setUser, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Encapsulando a minha lógica de chamada do contexto
function useAuthContext() {
  const values = useContext(AuthContext);

  return values;
}

export { useAuthContext, AuthProvider };
