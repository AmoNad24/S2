import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, Bell, Eye, Clock, Gauge, Route, ClipboardList, Layers } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export function ObservabilityPage() {
  // Data structure matching original implementation
  const observabilityData = {
    cards: [
      { title: "Active Alerts", value: "12", icon: Bell, trend: "", description: "Across all regions" },
      { title: "Log Events (24h)", value: "5.2M", icon: ClipboardList, trend: "", description: "Processed logs" },
      { title: "Average Latency", value: "123 ms", icon: Gauge, trend: "", description: "Across services" },
      { title: "System Uptime", value: "99.97%", icon: Activity, trend: "", description: "Last 30 days" }
    ],
    recentAlerts: [
      { time: "2025-04-15 11:42", service: "Auth", severity: "critical", status: "investigating" },
      { time: "2025-04-15 10:15", service: "Compute", severity: "warning", status: "resolved" },
      { time: "2025-04-15 09:30", service: "Storage", severity: "critical", status: "unresolved" },
      { time: "2025-04-14 22:08", service: "Network", severity: "info", status: "resolved" }
    ],
    noisyServices: [
      { service: "Compute", alerts: 42, severity: "warning" },
      { service: "Storage", alerts: 35, severity: "critical" },
      { service: "Network", alerts: 28, severity: "moderate" },
      { service: "Billing", alerts: 12, severity: "info" }
    ],
    uptimeSummary: [
      { service: "Compute", uptime: "99.95%", outages: 2, maxDowntime: "7 mins" },
      { service: "Storage", uptime: "99.91%", outages: 3, maxDowntime: "12 mins" },
      { service: "Network", uptime: "99.98%", outages: 1, maxDowntime: "3 mins" },
      { service: "Auth", uptime: "99.89%", outages: 4, maxDowntime: "15 mins" }
    ]
  };

  // Chart data matching original implementation
  const alertVolumeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Alerts',
      data: [12, 15, 10, 8, 9, 14, 11],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      fill: true,
      tension: 0.4
    }]
  };

  const latencyData = {
    labels: ['Auth', 'Storage', 'Compute', 'Network', 'Billing'],
    datasets: [{
      label: 'Latency (ms)',
      data: [110, 98, 140, 120, 95],
      backgroundColor: '#3b82f6'
    }]
  };

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'critical': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      case 'moderate': return 'text-orange-500';
      case 'info': return 'text-blue-500';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'investigating': return 'text-yellow-500';
      case 'resolved': return 'text-green-500';
      case 'unresolved': return 'text-red-500';
      default: return '';
    }
  };

  return (
    <div className="content-section" id="observability-content">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Observability</h2>
        </div>

        {/* Cards Section - Fixed layout to match original */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {observabilityData.cards.map((card, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <card.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tables Section - Correct 3-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Recent Alerts Table */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {observabilityData.recentAlerts.map((alert, index) => (
                    <TableRow key={index}>
                      <TableCell className="py-2">{alert.time}</TableCell>
                      <TableCell className="py-2">{alert.service}</TableCell>
                      <TableCell className={`py-2 ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </TableCell>
                      <TableCell className={`py-2 ${getStatusColor(alert.status)}`}>
                        {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Noisy Services Table */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Top Noisy Services</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Alerts</TableHead>
                    <TableHead>Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {observabilityData.noisyServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="py-2">{service.service}</TableCell>
                      <TableCell className="py-2">{service.alerts}</TableCell>
                      <TableCell className={`py-2 ${getSeverityColor(service.severity)}`}>
                        {service.severity.charAt(0).toUpperCase() + service.severity.slice(1)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Uptime Summary Table */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Uptime Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Uptime</TableHead>
                    <TableHead>Outages</TableHead>
                    <TableHead>Max Downtime</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {observabilityData.uptimeSummary.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="py-2">{service.service}</TableCell>
                      <TableCell className="py-2">{service.uptime}</TableCell>
                      <TableCell className="py-2">{service.outages}</TableCell>
                      <TableCell className="py-2">{service.maxDowntime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Proper 2-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Alert Volume Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Alert Volume (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <Line 
                data={alertVolumeData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }}
              />
            </CardContent>
          </Card>

          {/* Latency Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Latency by Service</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <Bar 
                data={latencyData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}