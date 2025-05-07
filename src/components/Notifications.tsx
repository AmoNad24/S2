import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, AlertTriangle, Check, Megaphone } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {  Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Notification = {
  id: string;
  time: string;
  severity: 'critical' | 'warning' | 'info';
  description: string;
  status: 'investigating' | 'resolved' | 'unresolved';
};

export function NotificationsPage() {
  // Notification data
  const notifications: Notification[] = [
    { id: '1', time: '2025-04-09 08:45', severity: 'critical', description: 'App outage in US-East', status: 'investigating' },
    { id: '2', time: '2025-04-08 14:30', severity: 'warning', description: 'High memory usage in node group-2', status: 'resolved' },
    { id: '3', time: '2025-04-07 10:10', severity: 'warning', description: 'Unusual login activity detected', status: 'investigating' },
    { id: '4', time: '2025-04-06 09:15', severity: 'info', description: 'Backup completed successfully', status: 'resolved' },
  ];

  const broadcasts = [
    { date: 'April 9', content: 'Patch rollout for east region at 2:00 AM' },
    { date: 'April 7', content: 'High CPU usage alert rule updated' },
    { date: 'April 5', content: 'New audit retention policy applied' },
    { date: 'April 3', content: 'Certificate renewal scheduled' },
  ];

  // Chart.js data
  const alertDistributionData = {
    labels: ['Critical', 'Warning', 'Info'],
    datasets: [
      {
        data: [32, 74, 214],
        backgroundColor: ['#ef4444', '#f59e0b', '#60a5fa'],
        borderWidth: 0,
      }
    ]
  };

  

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info': return <Check className="h-4 w-4 text-blue-500" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-yellow-500';
      case 'resolved': return 'text-green-500';
      case 'unresolved': return 'text-red-500';
      default: return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Notifications</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320</div>
            <p className="text-xs text-muted-foreground">Across all systems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Under investigation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Audit Events</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,120</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Broadcasts</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Posted this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Alert Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Doughnut 
              data={alertDistributionData} 
              options={{
                ...chartOptions,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      boxWidth: 12,
                      padding: 20
                    }
                  }
                }
              }} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Broadcasts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {broadcasts.map((broadcast, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <p className="font-medium">{broadcast.date}:</p>
                  <p className="text-muted-foreground">{broadcast.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Incident Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell>{notification.time}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getSeverityIcon(notification.severity)}
                      <span className="ml-2 capitalize">{notification.severity}</span>
                    </div>
                  </TableCell>
                  <TableCell>{notification.description}</TableCell>
                  <TableCell className={getStatusColor(notification.status)}>
                    {notification.status.charAt(0).toUpperCase() + notification.status.slice(1)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

     
    </div>
  );
}