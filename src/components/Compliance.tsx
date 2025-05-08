"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Chart as ChartJS, 
  BarElement, 
  LineElement, 
  PointElement, 
  RadarController, 
  RadialLinearScale, 
  LinearScale, 
  CategoryScale, 
  Tooltip, 
  Legend 
} from 'chart.js'
import { Bar, Line, Radar } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
)

const ComplianceCenterPage = () => {
  // Data for charts
  const activeThreatsData = {
    labels: ['Vo1d', 'Squamish Libra', 'UAC-0063', 'Dragon RaaS', 'PlushDaemon'],
    datasets: [{
      label: 'Threats',
      data: [100, 95, 89, 83, 77],
      backgroundColor: '#EF4444'
    }]
  }

  const targetedVictimsData = {
    labels: ['Asia', 'Europe', 'Americas', 'Eastern Europe', 'Northern America'],
    datasets: [{
      label: 'Victims',
      data: [1000, 950, 920, 850, 820],
      backgroundColor: '#10B981'
    }]
  }

  const activeMalwareData = {
    labels: ['Brute Ratel', 'SectopRAT', 'Lumma Stealer', 'ta505', 'Astral Stealer'],
    datasets: [{
      label: 'Malware',
      data: [35, 40, 28, 25, 33],
      backgroundColor: 'rgba(59, 130, 246, 0.6)',
      borderColor: '#3B82F6',
      borderWidth: 1
    }]
  }

  const activeVulnerabilitiesData = {
    labels: ['CVE-2025-0282', 'CVE-2025-0283', 'CVE-2024-50623', 'CVE-2025-26633'],
    datasets: [{
      label: 'Vulnerabilities',
      data: [58, 58, 33, 31],
      backgroundColor: '#F59E0B'
    }]
  }

  const latestReportsData = {
    labels: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5'],
    datasets: [{
      label: 'Reports',
      data: [1, 3, 2, 5, 3],
      borderColor: '#F43F5E',
      backgroundColor: 'rgba(244, 63, 94, 0.2)',
      tension: 0.4,
      fill: true
    }]
  }

  const activeLabelsData = {
    labels: ['elf', 'mozi', 'mirai', 'redteam'],
    datasets: [{
      label: 'Mentions',
      data: [80, 70, 65, 60],
      backgroundColor: '#8B5CF6'
    }]
  }

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Intrusion Sets</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.02K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 2</span> (24 hours)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Malware</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.31K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 4</span> (24 hours)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11.45K</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 7</span> (24 hours)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Indicators</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.1M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 2621</span> (24 hours)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Active Threats (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar 
              data={activeThreatsData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Targeted Victims (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar 
              data={targetedVictimsData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Active Malware (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Radar 
              data={activeMalwareData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {
                    angleLines: {
                      display: true
                    },
                    suggestedMin: 0
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Active Vulnerabilities (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar 
              data={activeVulnerabilitiesData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Line 
              data={latestReportsData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Active Labels (Last 3 Months)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <Bar 
              data={activeLabelsData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ComplianceCenterPage