import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { HomeHeader } from "./components/HomeHeader";
import { AppSidebar } from "./components/HomeSidebar";

export const metadata = {
  title: "Seu Projeto",
  description: "Descrição do seu projeto",
};

export default function RootLayout({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col">
          <HomeHeader />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
