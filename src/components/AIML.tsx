import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Cog, Rocket } from "lucide-react";
import { useState } from "react";

type AutomationTask = {
  id: string;
  name: string;
  type: 'scheduled' | 'ansible' | 'terraform' | 'workflow';
  lastRun: string;
  status: 'success' | 'failed' | 'warning' | 'queued';
  nextRun?: string;
};

export function AIML() {
  const [showModal, setShowModal] = useState(false);


  const tasks: AutomationTask[] = [
    {
      id: '1',
      name: 'Daily Backup',
      type: 'scheduled',
      lastRun: '2025-04-15 02:00',
      status: 'success',
      nextRun: '2025-04-16 02:00'
    },
    {
      id: '2',
      name: 'Provision VMs',
      type: 'ansible',
      lastRun: '2025-04-15 10:12',
      status: 'success'
    },
    {
      id: '3',
      name: 'Patch Deployment',
      type: 'ansible',
      lastRun: '2025-04-14 15:30',
      status: 'warning'
    },
    {
      id: '4',
      name: 'Log Rotation',
      type: 'scheduled',
      lastRun: '2025-04-14 10:00',
      status: 'failed',
      nextRun: '2025-04-15 10:00'
    }
  ];

  const playbooks = [
    { name: 'Provision VMs', description: 'Automates VM setup and configuration' },
    { name: 'Patch Deployment', description: 'Applies security updates to servers' },
    { name: 'App Deployment', description: 'Deploys latest application builds' }
  ];

  const scripts = [
    { name: 'VPC Setup', description: 'Define and launch isolated cloud networks' },
    { name: 'Instance Scaling', description: 'Automate scaling of compute instances' },
    { name: 'DNS Configuration', description: 'Manage DNS zones and records' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-500';
      case 'failed': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      case 'queued': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Automation Center</h2>
        <Button onClick={() => setShowModal(true)}>
          <Rocket className="mr-2 h-4 w-4" />
          Create New Automation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Run</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.filter(t => t.type === 'scheduled').map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>{task.lastRun}</TableCell>
                    <TableCell className={getStatusColor(task.status)}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </TableCell>
                    <TableCell>{task.nextRun}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Automation Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Automation</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.lastRun}</TableCell>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell className={getStatusColor(task.status)}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ansible Playbooks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {playbooks.map((playbook, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium flex items-center">
                    <Cog className="mr-2 h-4 w-4" />
                    {playbook.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{playbook.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Terraform Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scripts.map((script, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium flex items-center">
                    
                    {script.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{script.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Automation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Select Automation Type</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Scheduled Task
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Cog className="mr-2 h-4 w-4" />
                Ansible Playbook
              </Button>
              <Button variant="outline" className="w-full justify-start">
                
                Terraform Script
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Rocket className="mr-2 h-4 w-4" />
                Workflow
              </Button>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button>Continue</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}