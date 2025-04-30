import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {Topbar} from "./components/topbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Topbar/>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </>
  )
}