"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useApi } from "@/hooks/useApi";

export default function HomePage() {
  const { removeToken } = useApi();
  const router = useRouter();

  // const fetchUsers = async () => {
  //   const token = getToken();
  //   try {
  //     const response = await api.get("/users", {
  //       headers: { Authorization: `Barrer ${token}` },
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     if (error.status === 401) {
  //       router.push("/login");
  //     }
  //   }
  // };

  const handleLogout = () => {
    removeToken();
    router.push("login");
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-6">Bem-vindo à sua conta</h1>
      <p className="text-xl mb-8">Você está logado com sucesso!</p>
      <Button onClick={handleLogout}>Sair</Button>
    </div>
  );
}
