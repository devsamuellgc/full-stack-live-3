import { InputStructure } from "../components/InputStructure";
import { useToast } from "../hooks/useToast";
import { useRedirect } from "../hooks/useRedirect";
import { useAuthContext } from "../contexts/auth";

export default function Login() {
  const { goTo } = useRedirect();
  const { showToast } = useToast();
  const { setUser, user } = useAuthContext();

  function handleSubmit() {
    if (user.name.length > 0 && user.email.length > 0) {
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
