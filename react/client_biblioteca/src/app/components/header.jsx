import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          MeuApp
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link href="/criar-conta">Criar Conta</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
