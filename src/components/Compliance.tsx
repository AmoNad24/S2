import { 
    FileText, ClipboardCheck, Shield, AlertTriangle,
    ChevronUp, Search, Plus, Download, Filter
  } from "lucide-react";
  import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
//   import { ComplianceTrendChart } from "@/components/compliance-trend-chart";
//   import { RiskDistributionChart } from "@/components/risk-distribution-chart";
//   import { AuditStatusChart } from "@/components/audit-status-chart";
  
  export default function CompliancePage() {
    return (
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Intrusion Sets</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.02K</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>2 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Malware</CardTitle>
              <AlertTriangle className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.31K</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>4 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Reports</CardTitle>
              <FileText className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11.45K</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>7 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Indicators</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.1M</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>2621 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Charts Row 1 */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Trend (Last 3 Months)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              {/* <ComplianceTrendChart /> */}
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Risk Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              {/* <RiskDistributionChart /> */}
            </CardContent>
          </Card>
        </div>
  
        {/* Charts Row 2 */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Audit Status</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px]">
              {/* <AuditStatusChart /> */}
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Top Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "ISO 27001", value: 98, target: 100 },
                  { name: "SOC 2", value: 92, target: 100 },
                  { name: "GDPR", value: 89, target: 100 },
                  { name: "HIPAA", value: 85, target: 100 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Recent Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "Critical", count: 12, icon: AlertTriangle },
                  { type: "High", count: 24, icon: AlertTriangle },
                  { type: "Medium", count: 37, icon: AlertTriangle },
                  { type: "Low", count: 45, icon: AlertTriangle },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <item.icon className={`h-4 w-4 ${
                        item.type === "Critical" ? "text-red-500" :
                        item.type === "High" ? "text-orange-500" :
                        item.type === "Medium" ? "text-yellow-500" : "text-gray-500"
                      }`} />
                      <span>{item.type}</span>
                    </div>
                    <Badge variant="outline">{item.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Compliance Reports Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle>Compliance Reports</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search reports..."
                    className="pl-10 w-[200px]"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Report
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Standard</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Findings</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { 
                    name: "Q2 2025 Security Audit", 
                    standard: "ISO 27001", 
                    date: "2025-06-15", 
                    status: "Completed", 
                    findings: 12 
                  },
                  { 
                    name: "GDPR Compliance Review", 
                    standard: "GDPR", 
                    date: "2025-05-28", 
                    status: "In Progress", 
                    findings: 8 
                  },
                  { 
                    name: "HIPAA Assessment", 
                    standard: "HIPAA", 
                    date: "2025-05-10", 
                    status: "Completed", 
                    findings: 5 
                  },
                  { 
                    name: "SOC 2 Type II Report", 
                    standard: "SOC 2", 
                    date: "2025-04-22", 
                    status: "Pending Review", 
                    findings: 15 
                  },
                ].map((report, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell>{report.standard}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          report.status === "Completed" ? "default" :
                          report.status === "In Progress" ? "destructive" : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{report.findings} findings</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
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