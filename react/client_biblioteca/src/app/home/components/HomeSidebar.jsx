"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, FileText, Settings, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Home", href: "/home" },
  { icon: Users, label: "Usuários", href: "/home/usuarios" },
  { icon: Users, label: "Autores", href: "/home/autores" },
  { icon: Users, label: "Categorias", href: "/home/categorias" },
  { icon: Users, label: "Livros", href: "/home/livros" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Button variant="ghost" className="w-full justify-start">
          <Menu className="mr-2 h-4 w-4" />
          <span>Menu</span>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-xs text-muted-foreground">© 2024 Seu Projeto</p>
      </SidebarFooter>
    </Sidebar>
  );
}
