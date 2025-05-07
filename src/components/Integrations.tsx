import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface Integration {
    timestamp: string;
    service: string;
    endpoint: string;
    status: string;
}

const integrationsData: Integration[] = [
    { timestamp: '2025-04-09 12:15', service: 'GitHub', endpoint: '/repos/push', status: '200 OK' },
    { timestamp: '2025-04-09 11:40', service: 'Slack', endpoint: '/alerts/send', status: '200 OK' },
    { timestamp: '2025-04-09 10:55', service: 'Jira', endpoint: '/issues/create', status: '202 Accepted' },
    { timestamp: '2025-04-09 10:12', service: 'PagerDuty', endpoint: '/incidents/trigger', status: '403 Forbidden' },
];

const popularIntegrations = [
    { name: 'Slack', description: 'Real-time alert and notification integration' },
    { name: 'Jira', description: 'Issue tracking and automation workflows' },
    { name: 'GitHub', description: 'Repository and CI/CD automation' },
    { name: 'ServiceNow', description: 'ITSM and incident management linkage' },
    { name: 'PagerDuty', description: 'On-call scheduling and response automation' },
];

const IntegrationsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showIntegrationsModal = () => {
        setIsModalOpen(true);
    };

    const closeIntegrationsModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-6">
            <div className="flex justify-end mb-4">
                <Button onClick={showIntegrationsModal} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Plus className="mr-2 h-4 w-4" /> Add Integration
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle>API Integrations</CardTitle>
                        <CardDescription>Active integrations with internal and external systems</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">48</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Webhooks</CardTitle>
                        <CardDescription>Configured for event-driven triggers</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">21</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Third-Party Services</CardTitle>
                        <CardDescription>Connected SaaS & infrastructure providers</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-semibold">32</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Popular Third-Party Integrations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {popularIntegrations.map((integration) => (
                                <li key={integration.name}>
                                    <strong>{integration.name}:</strong> {integration.description}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent API Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Timestamp</TableHead>
                                    <TableHead>Service</TableHead>
                                    <TableHead>Endpoint</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {integrationsData.map((integration, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{integration.timestamp}</TableCell>
                                        <TableCell>{integration.service}</TableCell>
                                        <TableCell>{integration.endpoint}</TableCell>
                                        <TableCell
                                            className={cn(
                                                'font-medium',
                                                integration.status === '200 OK' && 'text-green-500',
                                                integration.status === '202 Accepted' && 'text-yellow-500',
                                                integration.status === '403 Forbidden' && 'text-red-500',
                                            )}
                                        >
                                            {integration.status}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                    <Card className="w-full max-w-md bg-gray-900 border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">Add Integration</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                                Add API Integration
                            </Button>
                            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                                Add Webhook
                            </Button>
                            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                                Add Third-Party App
                            </Button>
                            <Button
                                onClick={closeIntegrationsModal}
                                className="w-full bg-red-500 hover:bg-red-600 text-white"
                            >
                                Cancel
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default IntegrationsPage;
