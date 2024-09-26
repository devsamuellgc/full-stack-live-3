import { useEffect, useState } from "react";
import { useRedirect } from "../hooks/useRedirect";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { useAuthContext } from "../contexts/auth";
import { CounterProvider } from "../contexts/counter";
import axios from "axios";

export default function Home() {
  const { user } = useAuthContext();
  const { goTo } = useRedirect();
  const [advice, setAdvice] = useState("");

  async function fetchAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(response.data.slip.advice);
  }

  useEffect(() => {
    if (!user.name) {
      goTo("/login");
    }
    fetchAdvice();
  }, []);

  return (
    <main>
      <CounterProvider>
        <Header />
        <div className="px-6 flex flex-col gap-2">
          <p>{advice}</p>
          <button
            className="p-2 rounded bg-slate-200 w-fit"
            onClick={fetchAdvice}
          >
            Novo conselho
          </button>
        </div>
        <Body />
      </CounterProvider>
    </main>
  );
}
