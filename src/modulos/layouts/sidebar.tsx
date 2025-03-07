import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  Calendar,
  Home,
  Inbox,
  Layers,
  PieChart,
  Settings,
  Users,
} from "lucide-react";

const menuItems = [
  { url: "/dashboard", nombre: "Panel Control", icon: Home },
  { url: "/dashboard/categorias", nombre: "Categorías", icon: PieChart },
  { url: "/dashboard/productos", nombre: "Productos", icon: Users },
  { url: "/dashboard/caja", nombre: "Caja", icon: Inbox },
  { url: "/dashboard/proveedores", nombre: "Proveedores", icon: Calendar },
];

function DashboardSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          <Layers className="mr-2 h-6 w-6" />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>

            <SidebarMenu>


              {menuItems.map((item) => (
                <SidebarMenuItem key={item.url}  >
                  <SidebarMenuButton
                    asChild
                    isActive={item.url === window.location.pathname}
                     className="hover:bg-blue-700 hover:text-white" 
                  >
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.nombre}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}


            </SidebarMenu>

          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}

export default DashboardSidebar;
