import Link from "next/link";

import { SignUpForm } from "./components/signup-form";

export const metadata = {
  title: "Criar Conta",
  description: "Crie sua nova conta",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crie sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Preencha os dados abaixo para criar sua nova conta
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Já tem uma conta? Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}
