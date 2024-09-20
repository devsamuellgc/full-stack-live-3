import { useState } from "react";
import { InputStructure } from "../components/InputStructure";
import { useToast } from "../hooks/useToast";
import { useRedirect } from "../hooks/useRedirect";

export default function Login() {
  const [user, setUser] = useState({ name: "", email: "" });
  const { goTo } = useRedirect();
  const { showToast } = useToast();

  function handleSubmit() {
    if (user.name.length > 0 && user.email.length > 0) {
      const userJson = JSON.stringify(user);
      localStorage.setItem("user", userJson);
      goTo("/");
    } else {
      showToast("Todos os campos são obrigatórios!", "error");
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <form className="w-56 h-64 bg-gray-100 p-4 rounded-md shadow flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <InputStructure
            label="Nome"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, name: e.target.value }))
            }
            name="name"
            value={user.name}
            placeholder="Digite seu nome"
          />
          <InputStructure
            label="E-mail"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
            name="email"
            value={user.email}
            placeholder="Seu e-mail aqui"
            type="email"
          />
        </div>
        <button
          type="button"
          className="
            w-full 
            py-1 
            flex 
            items-center 
            justify-center bg-sky-600 shadow-sm text-white rounded self-end"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
