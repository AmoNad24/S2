import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Sidebar() {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden p-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 mt-6">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex sm:flex-col w-64 h-screen bg-muted p-6">
        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
        <nav className="flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </>
  )
}
