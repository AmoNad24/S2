import { Input } from "@/components/ui/input"; 


export default function Topbar() { return ( 
<div className="w-full h-16 px-4 flex items-center justify-between bg-background shadow" style={{backgroundColor:"#192539"}}>
     {/* Left side - Logo + Search */} 
     <div className="flex items-center gap-4"> 
        <div className="font-bold text-xl text-white">TCS Logo</div> 
        <Input type="text" placeholder="Search..." className="w-64" />
         </div>


</div>

); }


