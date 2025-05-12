import { 
    Users, Key, Shield, LogIn, Lock, Globe, 
  } from "lucide-react";
  import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
 

  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
import { RoleChart } from "./Charts/Role";
import { ApiKeyChart } from "./Charts/API";
  
  export default function IAMPage() {
    return (
      <div className="space-y-6">
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,204</div>
              <div className="flex items-center text-xs text-gray-500">
                <span>Across all accounts</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Roles</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <div className="flex items-center text-xs text-gray-500">
                <span>Custom and managed</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Access Keys</CardTitle>
              <Key className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <div className="flex items-center text-xs text-gray-500">
                <span>Active keys</span>
              </div>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Federated Identities</CardTitle>
              <Globe className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">29</div>
              <div className="flex items-center text-xs text-gray-500">
                <span>Linked providers</span>
              </div>
            </CardContent>
          </Card>
        </div>
  
      
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Recent Login Activity</CardTitle>
                
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { 
                      user: "admin", 
                      ip: "192.168.1.45", 
                      region: "India-Mumbai", 
                      time: "2025-04-15 10:42", 
                      status: "success" 
                    },
                    { 
                      user: "audit_user", 
                      ip: "172.16.3.22", 
                      region: "Singapore", 
                      time: "2025-04-15 09:37", 
                      status: "failed" 
                    },
                    { 
                      user: "john.doe", 
                      ip: "10.1.2.13", 
                      region: "Japan", 
                      time: "2025-04-14 22:15", 
                      status: "success" 
                    },
                    { 
                      user: "analyst", 
                      ip: "10.0.0.19", 
                      region: "Australia", 
                      time: "2025-04-14 18:29", 
                      status: "mfa" 
                    },
                  ].map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.user}</TableCell>
                      <TableCell>{item.ip}</TableCell>
                      <TableCell>{item.region}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>
                        {item.status === "success" && (
                          <Badge variant="default">Success</Badge>
                        )}
                        {item.status === "failed" && (
                          <Badge variant="destructive">Failed</Badge>
                        )}
                        {item.status === "mfa" && (
                          <Badge variant="destructive">MFA Required</Badge>
                        )}
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
  
          <Card>
  <CardHeader>
    <CardTitle>Role Distribution</CardTitle>
  </CardHeader>
  <CardContent className="h-[300px]">
    <RoleChart />
  </CardContent>
</Card>
        </div>
  
        {/* API Key Usage & SSO Providers */}
        <div className="grid gap-4 md:grid-cols-2">
        <Card>
  <CardHeader>
    <div className="flex justify-between items-center">
      <CardTitle>API Key Usage (Top 5)</CardTitle>
      
    </div>
  </CardHeader>
  <CardContent className="h-[300px]">
    <ApiKeyChart />
  </CardContent>
</Card>
  
          <Card>
            <CardHeader>
              <CardTitle>SSO Providers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span>Azure AD</span>
                </div>
                <Badge variant="default">Enabled</Badge>
              </div>
  
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Okta</span>
                </div>
                <Badge variant="default">Enabled</Badge>
              </div>
  
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <LogIn className="h-5 w-5 text-blue-500" />
                  <span>Google Workspace</span>
                </div>
                <Badge variant="secondary">Disabled</Badge>
              </div>
  
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-blue-500" />
                  <span>Ping Identity</span>
                </div>
                <Badge variant="default">Enabled</Badge>
              </div>
  
             
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }