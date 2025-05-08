// import { SidebarProvider,  } from "@/components/ui/sidebar"
// import { Sidebar } from "@/components/app-sidebar"
// import {Topbar} from "./components/topbar"

// import {Outlet} from 'react-router-dom';

// // Layout.tsx
"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/app-sidebar";
import { Topbar } from "./components/topbar";
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col"> {/* Make the layout container take full viewport height and use flex column */}
      <Topbar />
      <div className="flex flex-row flex-1 overflow-hidden"> {/* Make the content area flex row and take remaining height */}
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 transition-all duration-300"> {/* Main takes remaining width and allows vertical scroll */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}