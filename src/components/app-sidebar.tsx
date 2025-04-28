import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar"

// Menu items.
const resources = [
  {
    title: "Compute Management",
    url: "#",
    icon: Home,
  },
  {
    title: "Storage Management",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Network Management",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Platform as a Services",
    url: "#",
    icon: Search,
  },
  {
    title: "NextGen Computing",
    url: "#",
    icon: Settings,
  },
]
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
]

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
]


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
]

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
]
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
]

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
]
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
  
]
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
  
  
]
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
  
  
]
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
  
  
]

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
  
  
]

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
  
  
]

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

  
]



export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">


      <SidebarContent>

        {/* Resources*/}
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>



        {/* Automation Center */}
        <SidebarGroup>
          <SidebarGroupLabel>Automation Center</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {automationCenter.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
       
       {/* AIML Hub */}
        <SidebarGroup>
          <SidebarGroupLabel>AI/ML Hub</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aimlHub.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Observability */}
        <SidebarGroup>
          <SidebarGroupLabel>Observability</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {observability.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Marketplace */}
        <SidebarGroup>
          <SidebarGroupLabel>Marketplace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {marketplace.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


       {/* Compliance Center */}
        <SidebarGroup>
          <SidebarGroupLabel>Compliance Center</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {compliance.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* IAM */}
        <SidebarGroup>
          <SidebarGroupLabel>IAM</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {iam.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Backup & DR */}
        <SidebarGroup>
          <SidebarGroupLabel>Backup & DR</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {backup.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Config Management */}
        <SidebarGroup>
          <SidebarGroupLabel>Config Managment</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {config.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Support Center */}
        <SidebarGroup>
          <SidebarGroupLabel>Support Center</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportCenter.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Notifications*/}
        <SidebarGroup>
          <SidebarGroupLabel>Notifications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {notifications.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Cost Management*/}
        <SidebarGroup>
          <SidebarGroupLabel>Cost Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {costManagement.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


       {/* Migration Toolkit*/}
        <SidebarGroup>
          <SidebarGroupLabel>Migration Toolkit</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {migrationToolkit.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       {/* Integrations*/}
        <SidebarGroup>
          <SidebarGroupLabel>Integrations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {integrations.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>




      </SidebarContent>
    </Sidebar>
  )
}
