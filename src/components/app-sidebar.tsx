// import { Calendar, Home, Inbox, Search, Settings,ChevronDown } from "lucide-react"
import {
  ChevronDown,
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  Server,
  Laptop,
  HardDrive,
  Database,
  Box,
  Folder,
  Shield,
  Shuffle,
  Flame,
  Network,
  Zap,
  Cpu,
  Router,
  GitBranch,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar"

import { Collapsible,CollapsibleTrigger,CollapsibleContent } from "./ui/collapsible"

const resources = [
  {
    title: "Compute Management",
    url: "#",
    icon: Server,
    children: [
      { title: "x86", url: "#", icon: Server },
      { title: "AIX", url: "#", icon: Server },
      { title: "Solaris", url: "#", icon: Server },
      { title: "MAC", url: "#", icon: Laptop },
    ],
  },
  {
    title: "Storage Management",
    url: "#",
    icon: Inbox,
    children: [
      { title: "Block Storage", url: "#", icon: HardDrive },
      { title: "Object Storage", url: "#", icon: Database },
      { title: "S3 Buckets", url: "#", icon: Box },
      { title: "NAS Storage", url: "#", icon: Folder },
    ],
  },
  {
    title: "Network Management",
    url: "#",
    icon: Calendar,
    children: [
      { title: "Security Groups", url: "#", icon: Shield },
      { title: "VLANs", url: "#", icon: GitBranch },
      { title: "LBs", url: "#", icon: Shuffle },
      { title: "Firewalls", url: "#", icon: Flame },
    ],
  },
  {
    title: "Platform as a Service",
    url: "#",
    icon: Search,
    children: [
      { title: "Kubernetes", url: "#", icon: Network },
      { title: "DBaaS", url: "#", icon: Database },
    ],
  },
  {
    title: "NextGen Computing",
    url: "#",
    icon: Settings,
    children: [
      { title: "Serverless", url: "#", icon: Zap },
      { title: "Edge Computing", url: "#", icon: Router },
      { title: "IoT", url: "#", icon: Cpu },
    ],
  },
];

const automationCenter = [
  {
    title: "Task Scheduler",
    url: "#",
    icon: Home,
  },
  {
    title: "Ansible",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Terraform",
    url: "#",
    icon: Calendar,
  },
];

const aimlHub = [
  {
    title: "Models",
    url: "#",
    icon: Home,
  },
  {
    title: "Training",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Inference",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pipelines",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Data Management",
    url: "#",
    icon: Calendar,
  },
];

const observability = [
  {
    title: "Logs",
    url: "#",
    icon: Home,
  },
  {
    title: "Alerts",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Anomaly Detections",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Metrics",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Tracing",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Audit Logs",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Capacity Planning",
    url: "#",
    icon: Calendar,
  },
];

const marketplace = [
  {
    title: "Apps",
    url: "#",
    icon: Home,
  },
  {
    title: "Services",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Templates",
    url: "#",
    icon: Calendar,
  },
];

const compliance = [
  {
    title: "Compliance Reports",
    url: "#",
    icon: Home,
  },
  {
    title: "Audit Reports",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Policy Management",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Risk Assessment",
    url: "#",
    icon: Calendar,
  },
];

const iam = [
  {
    title: "User Management",
    url: "#",
    icon: Home,
  },
  {
    title: "RBAC",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Single Sign-On",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Multi-Factor Setup",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Identity Federation",
    url: "#",
    icon: Calendar,
  },
  {
    title: "API Key Managment",
    url: "#",
    icon: Calendar,
  },
];

const backup = [
  {
    title: "Backup",
    url: "#",
    icon: Home,
  },
  {
    title: "Restore",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Replication",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Disaster Recovery",
    url: "#",
    icon: Calendar,
  }
];

const config = [
  {
    title: "CMDB",
    url: "#",
    icon: Home,
  },
  {
    title: "Version Control",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Configuration Drift",
    url: "#",
    icon: Calendar,
  },
];

const supportCenter = [
  {
    title: "Knowledge Base",
    url: "#",
    icon: Home,
  },
  {
    title: "Ticketing System",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Chatbot",
    url: "#",
    icon: Calendar,
  },
];

const notifications = [
  {
    title: "Alerts",
    url: "#",
    icon: Home,
  },
  {
    title: "Incidents",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Events",
    url: "#",
    icon: Calendar,
  },
];

const costManagement = [
  {
    title: "Cost Analysis",
    url: "#",
    icon: Home,
  },
  {
    title: "Budgeting",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Cost Optimization",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Cost Allocation",
    url: "#",
    icon: Calendar,
  },
];

const migrationToolkit = [
  {
    title: "Inventory Analysis",
    url: "#",
    icon: Home,
  },
  {
    title: "Movegroup Planning",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Server Migration",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Network Migration",
    url: "#",
    icon: Calendar,
  },
];

const integrations = [
  {
    title: "API Integrations",
    url: "#",
    icon: Home,
  },
  {
    title: "Third-Party Integrations",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Webhooks",
    url: "#",
    icon: Calendar,
  },
];

const MenuGroup = ({ title, items }: { title: string; items: any[] }) => {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{title}</span>
            <CollapsibleTrigger asChild>
              <button className="ml-2 p-1 rounded hover:bg-muted">
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </button>
            </CollapsibleTrigger>
          </div>
        </SidebarGroupLabel>

        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children && item.children.length > 0 ? (
                    <Collapsible className="group/item-collapsible">
                      <SidebarMenuButton asChild>
                        <CollapsibleTrigger asChild>
                          <button className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <item.icon className="w-4 h-4 mr-2" />
                              <span>{item.title}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 ml-2 transition-transform group-data-[state=open]/item-collapsible:rotate-180" />
                          </button>
                        </CollapsibleTrigger>
                      </SidebarMenuButton>

                      <CollapsibleContent>
                        <SidebarMenuSub className="pl-4">
                          {item.children.map((child) => (
                            <SidebarMenuSubItem key={child.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={child.url} className="flex items-center">
                                  <child.icon className="w-4 h-4 mr-2" />
                                  <span>{child.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <MenuGroup title="Resources" items={resources} />
        <MenuGroup title="Automation Center" items={automationCenter} />
        <MenuGroup title="AI/ML Hub" items={aimlHub} />
        <MenuGroup title="Observability" items={observability} />
        <MenuGroup title="Marketplace" items={marketplace} />
        <MenuGroup title="Compliance Center" items={compliance} />
        <MenuGroup title="IAM" items={iam} />
        <MenuGroup title="Backup & DR" items={backup} />
        <MenuGroup title="Config Management" items={config} />
        <MenuGroup title="Support Center" items={supportCenter} />
        <MenuGroup title="Notifications" items={notifications} />
        <MenuGroup title="Cost Management" items={costManagement} />
        <MenuGroup title="Migration Toolkit" items={migrationToolkit} />
        <MenuGroup title="Integrations" items={integrations} />
      </SidebarContent>
    </Sidebar>
    
  );
}