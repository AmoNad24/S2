import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Wallet, Sliders, Divide } from "lucide-react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export function CostManagementPage() {
  // Data matching original implementation
  const costData = {
    summary: [
      { title: "Total Spend", value: "$128,400", description: "Month-to-date", icon: PieChart },
      { title: "Forecasted Spend", value: "$142,000", description: "For April 2025", icon: Wallet },
      { title: "Budget Utilization", value: "86%", description: "Monthly Budget: $165,000", icon: Sliders }
    ],
    regionCosts: [
      { region: "India-Mumbai", cost: 34000 },
      { region: "India-Hyderabad", cost: 27000 },
      { region: "Australia", cost: 21000 },
      { region: "Japan", cost: 16000 },
      { region: "Singapore", cost: 14000 }
    ],
    resourceCosts: [
      { resource: "Compute (VM)", cost: 3000 },
      { resource: "Storage (Block)", cost: 500 },
      { resource: "Object Storage", cost: 276 },
      { resource: "Data Transfer", cost: 720 },
      { resource: "Database Services", cost: 750 }
    ],
    pricingDetails: [
      { service: "Compute (VM)", unitPrice: "$0.12/hr", usage: "25,000 hrs", total: "$3,000" },
      { service: "Storage (Block)", unitPrice: "$0.10/GB", usage: "5,000 GB", total: "$500" },
      { service: "Object Storage", unitPrice: "$0.023/GB", usage: "12,000 GB", total: "$276" },
      { service: "Data Transfer", unitPrice: "$0.09/GB", usage: "8,000 GB", total: "$720" },
      { service: "Database Services", unitPrice: "$0.25/hr", usage: "3,000 hrs", total: "$750" }
    ]
  };

  // Doughnut chart data for region costs
  const regionCostData = {
    labels: costData.regionCosts.map(item => item.region),
    datasets: [{
      data: costData.regionCosts.map(item => item.cost),
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f59e0b',
        '#6366f1',
        '#ef4444'
      ],
      borderWidth: 0
    }]
  };

  // Bar chart data for resource costs (corrected from doughnut)
  const resourceCostData = {
    labels: costData.resourceCosts.map(item => item.resource),
    datasets: [{
      label: 'Cost ($)',
      data: costData.resourceCosts.map(item => item.cost),
      backgroundColor: '#60a5fa',
      borderWidth: 0
    }]
  };

  // Chart options
  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 12,
          padding: 20
        }
      }
    }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `$${value}`
        }
      }
    }
  };

  return (
    <div className="content-section" id="cost-management-content">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Cost Management</h2>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {costData.summary.map((item, index) => {
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Region Cost - Doughnut Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Region-wise Cost Split</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <Doughnut 
                data={regionCostData}
                options={doughnutOptions}
              />
            </CardContent>
          </Card>

          {/* Resource Cost - Bar Chart (corrected) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Resource-type Cost Split</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <Bar 
                data={resourceCostData}
                options={barOptions}
              />
            </CardContent>
          </Card>
        </div>

        {/* Pricing Details Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pricing Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costData.pricingDetails.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.unitPrice}</TableCell>
                    <TableCell>{item.usage}</TableCell>
                    <TableCell>{item.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}