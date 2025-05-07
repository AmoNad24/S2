import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Cog, Rocket } from "lucide-react";
import { useState } from "react";

type AutomationTask = {
  id: string;
  name: string;
  type: string;
  lastRun: string;
  status: 'Completed' | 'Failed' | 'Queued';
  nextRun?: string;
};

export function AimlPage() {
  

  const tasks: AutomationTask[] = [
    {
      id: '1',
      name: 'Churn Predictor',
      type: '2h 15m',
      lastRun: 'Apr 9, 2025',
      status: 'Completed',
      
    },
    {
      id: '2',
      name: 'Image Classifier',
      type: '3h 22m',
      lastRun: 'Apr 8, 2025',
      status: 'Queued'
    },
    {
      id: '3',
      name: 'Patch Deployment',
      type: '1h 47m',
      lastRun: 'Apr 7, 2025',
      status: 'Failed'
    }
  ];

  const playbooks = [
    { name: 'Customer Churn Predictor v1.3', description: `Random Forest | Accuracy: 89%
` },
    { name: 'Image Classifier - v2.0', description: `ResNet-50 | Accuracy: 94%` },
    { name: 'Sentiment Analyzer - v1.1', description: `BERT | Accuracy: 91%` }
  ];

  const scripts = [
    { name: 'Real-Time Prediction:', status:'Enabled', description: 'Latency: 120ms' },
    { name: 'Batch Scoring:',status:'Scheduled Daily', description: 'Last Run: Apr 9, 2025' },
    
  ];
  const scripts1 = [
    { name: 'Customer Data-', status:'Enabled', description: 'PostgreSQL' },
    { name: 'Product Feedback-',status:'Scheduled Daily', description: 'S3' },
    { name: 'Social Feeds-', description: 'Kafka' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-500';
      case 'Failed': return 'text-red-500';
      case 'Queued': return 'text-yellow-500';
    //   case 'queued': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };


  return (
    <div className="space-y-6">
      
        <h2 className="text-2xl font-bold">AIML HUB</h2>
        
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Started</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>{task.lastRun}</TableCell>
                    <TableCell>{task.type}</TableCell>
                    <TableCell className={getStatusColor(task.status)}>
                      {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Model Inventory</CardTitle>
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

        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Inference Pipelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scripts.map((playbook, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium flex items-center">
                    <Cog className="mr-2 h-4 w-4" />
                    {playbook.name}
                    
                  </h4>
                  <span>{playbook.status}</span>
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
              {scripts1.map((script, index) => (
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

      
      
    </div>
  );
}