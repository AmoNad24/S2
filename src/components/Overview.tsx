import { 
    Server, 
    Package, 
    Database, 
    HardDrive,
    ChevronUp,
    AlertCircle,
    CheckCircle2,
    Clock,
    Bell,
    AlertTriangle
  } from "lucide-react";
  import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
//   import { Button } from "@/components/ui/button";
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
import { AnomalyChart } from "./Charts/Anomalies";
import { RecommendationChart } from "./Charts/Reccomendation";
  
  export default function OverviewPage() {
    return (
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Instances</CardTitle>
              <Server className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11.02K</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>243 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Containers</CardTitle>
              <Package className="h-4 w-4 text-blue-500" />
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
              <CardTitle className="text-sm font-medium">Database</CardTitle>
              <Database className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.93K</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>5 (24 hours)</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Storage</CardTitle>
              <HardDrive className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">543.86 TB</div>
              <div className="flex items-center text-xs text-green-500">
                <ChevronUp className="h-3 w-3" />
                <span>15TB (24 hours)</span>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Anomalies vs Alerts Chart */}
        <Card className="col-span-2">
  <CardHeader>
    <CardTitle>Anomalies vs Fired Alerts</CardTitle>
  </CardHeader>
  <CardContent className="h-[300px]">
    <AnomalyChart />
  </CardContent>
</Card>
  
        {/* Recent Activity & Status */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { date: "2025-03-31 10:00", user: "admin", desc: "Deployed Kubernetes cluster" },
                    { date: "2025-03-31 09:30", user: "admin", desc: "Terminated VM: dev-server" },
                    { date: "2025-03-30 16:12", user: "admin", desc: "Updated firewall rules" },
                    { date: "2025-03-30 12:40", user: "admin", desc: "Created snapshot for db-server" },
                    { date: "2025-03-30 11:20", user: "admin", desc: "Restarted container: nginx-proxy" },
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.date}</TableCell>
                      <TableCell>{item.user}</TableCell>
                      <TableCell>{item.desc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cluster</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span>Control Panel</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <div>
                  <span>Operators</span>
                  <p className="text-xs text-gray-500">1 degraded</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <span>Image Vulnerabilities</span>
                  <p className="text-xs text-gray-500">0 vulnerabilities</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <span>Storage</span>
                  <p className="text-xs text-red-500">Degraded</p>
                </div>
              </div>
  
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-2">Notifications</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="destructive">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    1 Critical
                  </Badge>
                  <Badge variant="destructive">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    1 Warning
                  </Badge>
                  <Badge variant="default">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    3 Success
                  </Badge>
                  <Badge variant="outline">
                    <Bell className="h-3 w-3 mr-1" />
                    3 Info
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  
        {/* Recommendations */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recommendations by Severity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around text-center mb-6">
                {[
                  { count: 2, label: "Critical", color: "text-red-500" },
                  { count: 5, label: "Important", color: "text-yellow-500" },
                  { count: 7, label: "Moderate", color: "text-blue-500" },
                  { count: 12, label: "Low", color: "text-gray-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xl">{item.count}</div>
                    <div className={item.color}>{item.label}</div>
                  </div>
                ))}
              </div>
  
              <CardTitle className="text-sm mb-4">Recommendations by Category</CardTitle>
              <div className="flex items-center">
              <div className="w-24 h-24 mr-4">
  <RecommendationChart />
</div>
                <ul className="space-y-2">
                  <li className="text-blue-300">Fault Tolerance: <span className="text-black">4</span></li>
                  <li className="text-blue-500">Service Availability: <span className="text-black">25</span></li>
                  <li className="text-blue-700">Performance: <span className="text-black">4</span></li>
                  <li className="text-blue-900">Security: <span className="text-black">12</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader>
              <CardTitle>Improve Recommended Pathways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  tag: "Performance",
                  systems: "378 systems",
                  desc: "Upgrade your kernel version to remediate ntpd time sync issues...",
                  reboot: "System reboot is not required"
                },
                {
                  tag: "Stability",
                  systems: "211 systems",
                  desc: "Adjust your networking configuration to get ahead of network performance...",
                  reboot: "System reboot is required"
                },
                {
                  tag: "Availability",
                  systems: "166 systems",
                  desc: "Fine tune your Oracle DB configuration to improve database performance...",
                  reboot: "System reboot is not required"
                }
              ].map((item, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <Badge variant="outline" className="text-blue-500 border-blue-500 mb-2">
                    {item.tag}
                  </Badge>
                  <a href="#" className="text-blue-600 block mb-2">{item.systems}</a>
                  <p className="text-sm mb-2">{item.desc}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.reboot}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }