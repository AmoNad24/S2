"use client";
import { useState } from "react";
import { 
  LayoutDashboard, 
  Server, 
  Shield,
  ChevronDown,
  ChevronRight,
  HardDrive,
  Database,
  Box,
  Folder,
  GitBranch,
  Shuffle,
  Flame,
  Network,
  Zap,
  Cpu,
  Router,
  Laptop,
  ChevronLeft,
  Home,
  Bell,
  Bot,
  BrainCircuit,
  Calendar,
  Eye,
  Inbox,
  LifeBuoy,
  Plug,
  RotateCw,
  Settings,
  Store,
  Users,
  Wallet,
  MoveRight} from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
  },
  {
    title: "Resources",
    icon: Server,
    subItems: [
      { 
        title: "Compute Management", 
        icon: Server,
        children: [
          { title: "x86", icon: Server },
          { title: "AIX", icon: Server },
          { title: "Solaris", icon: Server },
          { title: "MAC", icon: Laptop }
        ]
      },
      { 
        title: "Storage Management", 
        icon: HardDrive,
        children: [
          { title: "Block Storage", icon: HardDrive },
          { title: "Object Storage", icon: Database },
          { title: "S3 Buckets", icon: Box },
          { title: "NAS Storage", icon: Folder }
        ]
      },
      { 
        title: "Network Management", 
        icon: Network,
        children: [
          { title: "Security Groups", icon: Shield },
          { title: "VLANs", icon: GitBranch },
          { title: "LBs", icon: Shuffle },
          { title: "Firewalls", icon: Flame }
        ]
      },
      { 
        title: "Platform as a Service", 
        icon: Database,
        children: [
          { title: "Kubernetes", icon: Network },
          { title: "DBaaS", icon: Database }
        ]
      },
      { 
        title: "NextGen Computing", 
        icon: Cpu,
        children: [
          { title: "Serverless", icon: Zap },
          { title: "Edge Computing", icon: Router },
          { title: "IoT", icon: Cpu }
        ]
      }
    ]
  },
  {
    title: "Automation Center",
    icon: Bot,
    subItems: [
      { title: "Task Scheduler", icon: Calendar },
      { title: "Ansible", icon: Settings },
      { title: "Terraform", icon: GitBranch }
    ]
  },
  {
    title: "AI/ML Hub",
    icon: BrainCircuit,
    subItems: [
      { title: "Models", icon: Home },
      { title: "Training", icon: Inbox },
      { title: "Inference", icon: Calendar },
      { title: "Pipelines", icon: Calendar },
      { title: "Data Management", icon: Calendar }
    ]
  },
  {
    title: "Observability",
    icon: Eye,
    subItems: [
      { title: "Logs", icon: Home },
      { title: "Alerts", icon: Inbox },
      { title: "Anomaly Detection", icon: Calendar },
      { title: "Metrics", icon: Calendar },
      { title: "Tracing", icon: Calendar },
      { title: "Audit Logs", icon: Calendar },
      { title: "Capacity Planning", icon: Calendar }
    ]
  },
  {
    title: "Marketplace",
    icon: Store,
    subItems: [
      { title: "Apps", icon: Home },
      { title: "Services", icon: Inbox },
      { title: "Templates", icon: Calendar }
    ]
  },
  {
    title: "Compliance Center",
    icon: Shield,
    subItems: [
      { title: "Compliance Reports", icon: Home },
      { title: "Audit Reports", icon: Inbox },
      { title: "Policy Management", icon: Calendar },
      { title: "Risk Assessment", icon: Calendar }
    ]
  },
  {
    title: "IAM",
    icon: Users,
    subItems: [
      { title: "User Management", icon: Home },
      { title: "RBAC", icon: Inbox },
      { title: "Single Sign-On", icon: Calendar },
      { title: "Multi-Factor Setup", icon: Calendar },
      { title: "Identity Federation", icon: Calendar },
      { title: "API Key Management", icon: Calendar }
    ]
  },
  {
    title: "Backup & DR",
    icon: RotateCw,
    subItems: [
      { title: "Backup", icon: Home },
      { title: "Restore", icon: Inbox },
      { title: "Replication", icon: Calendar },
      { title: "Disaster Recovery", icon: Calendar }
    ]
  },
  {
    title: "Config Management",
    icon: Settings,
    subItems: [
      { title: "CMDB", icon: Home },
      { title: "Version Control", icon: Inbox },
      { title: "Configuration Drift", icon: Calendar }
    ]
  },
  {
    title: "Support Center",
    icon: LifeBuoy,
    subItems: [
      { title: "Knowledge Base", icon: Home },
      { title: "Ticketing System", icon: Inbox },
      { title: "Chatbot", icon: Calendar }
    ]
  },
  {
    title: "Notifications",
    icon: Bell,
    subItems: [
      { title: "Alerts", icon: Home },
      { title: "Incidents", icon: Inbox },
      { title: "Events", icon: Calendar }
    ]
  },
  {
    title: "Cost Management",
    icon: Wallet,
    subItems: [
      { title: "Cost Analysis", icon: Home },
      { title: "Budgeting", icon: Inbox },
      { title: "Cost Optimization", icon: Calendar },
      { title: "Cost Allocation", icon: Calendar }
    ]
  },
  {
    title: "Migration Toolkit",
    icon: MoveRight,
    subItems: [
      { title: "Inventory Analysis", icon: Home },
      { title: "Movegroup Planning", icon: Inbox },
      { title: "Server Migration", icon: Calendar },
      { title: "Network Migration", icon: Calendar }
    ]
  },
  {
    title: "Integrations",
    icon: Plug,
    subItems: [
      { title: "API Integrations", icon: Home },
      { title: "Third-Party Integrations", icon: Inbox },
      { title: "Webhooks", icon: Calendar }
    ]
  }
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const toggleItem = (title: string) => {
      setOpenItems(prev =>
          prev.includes(title)
              ? prev.filter(item => item !== title)
              : [...prev, title]
      );
  };


  return (
      <div className={cn(
          "  top-[56px] left-0 bottom-0 border-r transition-all duration-300", 
          "bg-gray-50 text-gray-700", 
          isCollapsed ? "w-[70px]" : "w-[250px]"
      )}>
          <div className="relative flex items-center justify-between p-2">

              <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleCollapse}
                  className={cn(
                      "absolute rounded-full border bg-white shadow-sm hover:bg-gray-100 text-gray-700",
                      isCollapsed ? "-right-7 top-4" : "-right-7 top-5"
                  )}
              >
                  {isCollapsed ? (
                      <ChevronRight className="h-4 w-4" />
                  ) : (
                      <ChevronLeft className="h-4 w-4" />
                  )}
              </Button>
          </div>

          <ScrollArea className="h-full">
              <div className="space-y-1 p-2">
                  {menuItems.map((item) => (
                      <div key={item.title}>
                        
                        <Link to={item.title}>
                          {!item.subItems ? (
                              <Button
                              variant="ghost"
                              size="sm"
                              className={cn(
                                  "w-full justify-start hover:bg-gray-200 text-gray-700",
                                  isCollapsed ? "justify-center px-0" : "px-2 pr-8"
                              )}
                          >
                              <item.icon className="h-4 w-4" />
                              {!isCollapsed && (
                                  <span className="ml-2 text-sm">{item.title}</span>
                              )}
                          </Button>
                          ) : (
                              <div>
                                  <Button
                                      variant="ghost"
                                      size="sm"
                                      className={cn(
                                          "w-full justify-start hover:bg-gray-200 text-gray-700",
                                          isCollapsed ? "justify-center px-0" : "px-2"
                                      )}
                                      onClick={() => toggleItem(item.title)}
                                  >
                                      <item.icon className="h-4 w-4" />
                                      {!isCollapsed && (
                                          <>
                                              <span className="ml-2 text-sm">{item.title}</span>
                                              <ChevronDown
                                                  className={cn(
                                                      "ml-auto h-4 w-4 transition-transform",
                                                      openItems.includes(item.title) && "rotate-180"
                                                  )}
                                              />
                                          </>
                                      )}
                                  </Button>
                                        

                                  {!isCollapsed && openItems.includes(item.title) && (
                                      <div className="ml-2 mt-1 space-y-1 border-l border-gray-200 pl-4">
                                          {item.subItems.map((subItem) => (
                                              <div key={subItem.title}>
                                                  {!subItem.children ? (
                                                      <Button
                                                          variant="ghost"
                                                          size="sm"
                                                          className="w-full justify-start hover:bg-gray-200 text-gray-700 px-2"
                                                      >
                                                          <subItem.icon className="h-4 w-4" />
                                                          <span className="ml-2 text-sm">{subItem.title}</span>
                                                      </Button>
                                                  ) : (
                                                      <>
                                                          <Button
                                                              variant="ghost"
                                                              size="sm"
                                                              className="w-full justify-start hover:bg-gray-200 text-gray-700 px-2"
                                                              onClick={() => toggleItem(subItem.title)}
                                                          >
                                                              <subItem.icon className="h-4 w-4" />
                                                              <span className="ml-2 text-sm">{subItem.title}</span>
                                                              <ChevronDown
                                                                  className={cn(
                                                                      "ml-auto h-4 w-4 transition-transform",
                                                                      openItems.includes(subItem.title) && "rotate-180"
                                                                  )}
                                                              />
                                                          </Button>
                                                          {openItems.includes(subItem.title) && (
                                                              <div className="ml-2 space-y-1 border-l border-gray-200 pl-4">
                                                                  {subItem.children.map((child) => (
                                                                      <Button
                                                                          key={child.title}
                                                                          variant="ghost"
                                                                          size="sm"
                                                                          className="w-full justify-start hover:bg-gray-200 text-gray-700 px-2"
                                                                      >
                                                                          <child.icon className="h-4 w-4" />
                                                                          <span className="ml-2 text-sm">{child.title}</span>
                                                                      </Button>
                                                                  ))}
                                                              </div>
                                                          )}
                                                      </>
                                                  )}
                                              </div>
                                          ))}
                                      </div>
                                  )}
                                  
                              </div>
                          )}
                          </Link> 
                      </div>
                      
                  ))}
              </div>
          </ScrollArea>
      </div>
  );
}