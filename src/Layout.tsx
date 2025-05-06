import { SidebarProvider,  } from "@/components/ui/sidebar"
import { Sidebar } from "@/components/app-sidebar"
import {Topbar} from "./components/topbar"
import OverviewPage from "./components/Overview"
import CompliancePage from "./components/Compliance"
import IAMPage from "./components/Iam"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Topbar/>
            <SidebarProvider>
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-6 lg:pl-[275px] transition-all duration-300"> {/* Added lg:pl-[275px] and transition */}
                    {/* <OverviewPage/> */}
                    <IAMPage/>
                </main>
            </SidebarProvider>
        </>
    )
}