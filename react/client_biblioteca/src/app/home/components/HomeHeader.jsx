import { SidebarTrigger } from "@/components/ui/sidebar";

export function HomeHeader() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">Seu Projeto</h1>
    </header>
  );
}
