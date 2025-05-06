import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export function Topbar() {
  return (

    
      
    <header className="  w-full border-b bg-[#192539] text-[#c7c5c5]">
      <div className="flex h-14 items-center px-4">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <img
            src= "src/assets/tcs_logo.png"
            alt="TCS Logo"
            className="h-8"
          />
          <div className="relative ml-4 w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-[#232f42] pl-10 text-[#c7c5c5] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex flex-1"></div>

        {/* User and Region Selector */}
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger className="w-[180px] border-[#3b4656] bg-[#192539] text-[#c7c5c5] hover:bg-[#232f42] focus:ring-0">
              <SelectValue placeholder="India-Mumbai" />
            </SelectTrigger>
            <SelectContent className="bg-[#192539] text-[#c7c5c5]">
              <SelectItem value="mumbai">India-Mumbai</SelectItem>
              <SelectItem value="hyderabad">India-Hyderabad</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
              <SelectItem value="singapore">Singapore</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full hover:bg-[#232f42]"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/6596121.png" alt="User" />
                  <AvatarFallback>AN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-[#192539] text-[#c7c5c5]"
              align="end"
              forceMount
            >
              <DropdownMenuItem className="hover:bg-[#232f42]">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#232f42]">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:bg-[#232f42]"
                onClick={() => {
                  // Add logout logic here
                  window.location.href = "/login";
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="max-w-[180px] truncate text-sm">Amogh Nadkarni</div>
        </div>
      </div>
    </header>
    
  );
}
