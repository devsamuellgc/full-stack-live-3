import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Bem-vindo ao MeuApp</h1>
          <p className="text-xl mb-8">
            A melhor plataforma para suas necessidades.
          </p>
        </section>
      </main>
      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          © 2024 MeuApp. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
