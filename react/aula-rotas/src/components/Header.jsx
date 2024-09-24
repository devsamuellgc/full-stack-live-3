import { useAuthContext } from "../contexts/auth";
import { useCounterContext } from "../contexts/counter";

export function Header() {
  const { counter } = useCounterContext();
  const { user, logOut } = useAuthContext();

  return (
    <header
      className="
    flex 
    px-6 
    py-4 border bg-sky-600 text-white items-center justify-between font-semibold"
    >
      <h1>Bem-vindo, {user.name}</h1>
      <p>{counter}</p>
      <button onClick={logOut} className="hover:opacity-75">
        Sair
      </button>
    </header>
  );
}
