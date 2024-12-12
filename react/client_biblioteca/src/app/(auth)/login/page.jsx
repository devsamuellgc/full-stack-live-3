import Link from "next/link";
import { LoginForm } from "./components/login-form";


export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-muted-foreground">
            Entre com seu email e senha para acessar sua conta
          </p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/criar-conta"
            className="hover:text-brand underline underline-offset-4"
          >
            Não tem uma conta? Registre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
