import { useEffect, useState } from "react";
import { useRedirect } from "../hooks/useRedirect";

export default function Home() {
  const [user, setUser] = useState({ name: "Usuário", email: "" });
  const { goTo } = useRedirect();

  function logOut() {
    localStorage.removeItem("user");
    goTo("/login");
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const formattedUser = JSON.parse(savedUser);

    if (formattedUser) {
      setUser(formattedUser);
    } else {
      goTo("/login");
    }
  }, []);

  return (
    <main>
      <header
        className="
        flex 
        px-6 
        py-4 border bg-sky-600 text-white items-center justify-between font-semibold"
      >
        <h1>Bem-vindo, {user.name}</h1>
        <button onClick={logOut} className="hover:opacity-75">
          Sair
        </button>
      </header>
    </main>
  );
}
