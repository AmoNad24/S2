import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Book, Ticket, Bot, LifeBuoy } from "lucide-react";

type SupportTicket = {
  id: string;
  subject: string;
  priority: 'high' | 'medium' | 'low';
  status: 'investigating' | 'resolved';
};

type KnowledgeBaseCategory = {
  name: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>; // Added icon to match usage
};

export function SupportCenterPage() {
  // Data matching original implementation with proper typing
  const supportData: {
    summary: {
      title: string;
      value: string;
      description: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
    recentTickets: SupportTicket[];
    knowledgeBase: KnowledgeBaseCategory[];
  } = {
    summary: [
      { title: "Open Tickets", value: "14", description: "Across all departments", icon: Ticket },
      { title: "Resolved This Month", value: "89", description: "March 2025", icon: LifeBuoy },
      { title: "Knowledge Base Articles", value: "152", description: "Available for reference", icon: Book },
      { title: "Live Agents", value: "6", description: "Currently Online", icon: LifeBuoy }
    ],
    recentTickets: [
      { id: "#10234", subject: "Database latency issue", priority: "high", status: "investigating" },
      { id: "#10212", subject: "VPN connection failed", priority: "medium", status: "resolved" },
      { id: "#10199", subject: "Unable to launch instance", priority: "low", status: "resolved" },
      { id: "#10187", subject: "UI glitch on metrics page", priority: "low", status: "investigating" }
    ],
    knowledgeBase: [
      { name: "Compute", description: "VM provisioning, scaling, and rebooting" },
      { name: "Networking", description: "Firewall setup, VPN issues, DNS" },
      { name: "Billing", description: "Invoice management, credit usage" },
      { name: "Storage", description: "Backup, snapshot, replication guides" },
      { name: "Access Control", description: "MFA, RBAC, and SSO setup" }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-yellow-500';
      case 'resolved': return 'text-green-500';
      default: return '';
    }
  };

  return (
    <div className="content-section" id="support-center-content">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Support Center</h2>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportData.summary.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Tickets Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportData.recentTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell className={getPriorityColor(ticket.priority)}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                      </TableCell>
                      <TableCell className={getStatusColor(ticket.status)}>
                        {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Knowledge Base Categories - Now properly using KnowledgeBaseCategory type */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Knowledge Base Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportData.knowledgeBase.map((category: KnowledgeBaseCategory, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-medium">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Chatbot Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">AI Chatbot Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <p>Our AI assistant is available 24/7 to help you troubleshoot common issues or direct you to helpful resources.</p>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Chatbot Status:</span>
                    <span className="text-green-500">Online</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Average Resolution Time:</span>
                    <span>1.2 mins</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Escalation Rate:</span>
                    <span>12%</span>
                  </li>
                </ul>
              </div>
              <Button className="self-start md:self-center">
                <Bot className="mr-2 h-4 w-4" />
                Chat Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}