import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, Undo, Copy, RefreshCw, AlertTriangle, Check } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
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

type BackupJob = {
  id: string;
  time: string;
  resource: string;
  type: 'scheduled' | 'on-demand';
  status: 'success' | 'failed' | 'warning';
  size?: string;
};

type DRPlan = {
  id: string;
  name: string;
  lastTested: string;
  status: 'success' | 'failed' | 'pending';
  rpo: string;
  rto: string;
};

export function BackupDRPage() {
  const backupJobs: BackupJob[] = [
    { id: '1', time: '2025-04-15 02:00', resource: 'VM: web-server-1', type: 'scheduled', status: 'success', size: '45GB' },
    { id: '2', time: '2025-04-14 23:15', resource: 'DB: customer-data', type: 'on-demand', status: 'warning', size: '120GB' },
    { id: '3', time: '2025-04-14 21:30', resource: 'Storage: nas-vol-2', type: 'scheduled', status: 'failed', size: '320GB' },
    { id: '4', time: '2025-04-14 19:45', resource: 'VM: api-node', type: 'scheduled', status: 'success', size: '28GB' },
  ];

  const drPlans: DRPlan[] = [
    { id: '1', name: 'Region Failover', lastTested: '2025-04-10', status: 'success', rpo: '5 min', rto: '15 min' },
    { id: '2', name: 'Critical App Recovery', lastTested: '2025-03-28', status: 'success', rpo: '15 min', rto: '30 min' },
    { id: '3', name: 'DB Sync Policy', lastTested: 'Ongoing', status: 'pending', rpo: 'Real-time', rto: '5 min' },
    { id: '4', name: 'VM Tier Plan', lastTested: '2025-04-05', status: 'failed', rpo: '30 min', rto: '1 hr' },
  ];

  // Chart.js data and options
  const backupSuccessData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Success Rate (%)',
        data: [95, 96, 93, 94, 97, 98, 96],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const restoreTrendData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Restore Jobs',
        data: [3, 4, 2, 5, 6, 7, 5],
        backgroundColor: '#10b981'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <Check className="h-4 w-4 text-green-500" />;
      case 'failed': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'pending': return <RefreshCw className="h-4 w-4 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Backup & Disaster Recovery</h2>
       
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Backup Jobs</CardTitle>
            <Save className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">312</div>
            <p className="text-xs text-muted-foreground">Scheduled and on-demand</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Restore Points</CardTitle>
            <Undo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <p className="text-xs text-muted-foreground">Available for recovery</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Replication Jobs</CardTitle>
            <Copy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">Cross-region and on-prem</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">DR Plans</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Active strategies</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Backup Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {backupJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.time}</TableCell>
                    <TableCell className="font-medium">{job.resource}</TableCell>
                    <TableCell>{job.type}</TableCell>
                    <TableCell>{job.size}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getStatusIcon(job.status)}
                        <span className="ml-2">{job.status}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>DR Plan Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plan</TableHead>
                  <TableHead>Last Tested</TableHead>
                  <TableHead>RPO</TableHead>
                  <TableHead>RTO</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drPlans.map((plan) => (
                  <TableRow key={plan.id}>
                    <TableCell className="font-medium">{plan.name}</TableCell>
                    <TableCell>{plan.lastTested}</TableCell>
                    <TableCell>{plan.rpo}</TableCell>
                    <TableCell>{plan.rto}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getStatusIcon(plan.status)}
                        <span className="ml-2">{plan.status}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Backup Success Rate (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Line 
              data={backupSuccessData} 
              options={{
                ...chartOptions,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100
                  }
                }
              }} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Restore Activity Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar 
              data={restoreTrendData} 
              options={chartOptions} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}