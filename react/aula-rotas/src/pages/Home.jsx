import { useEffect } from "react";
import { useRedirect } from "../hooks/useRedirect";
import { Header } from "../components/Header";
import { Body } from "../components/Body";
import { useAuthContext } from "../contexts/auth";
import { CounterProvider } from "../contexts/counter";

export default function Home() {
  const { user } = useAuthContext();
  const { goTo } = useRedirect();

  useEffect(() => {
    if (!user.name) {
      goTo("/login");
    }
  }, []);

  return (
    <main>
      <CounterProvider>
        <Header />
        <Body />
      </CounterProvider>
    </main>
  );
}
