import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

type MarketplaceItem = {
  id: string;
  name: string;
  provider: string;
  description: string;

  logo: string;
};

export function MarketplacePage() {
  const [showModal, setShowModal] = useState(false);

  // Exact data from original HTML
  const marketplaceItems: MarketplaceItem[] = [
    {
      id: '1',
      name: 'Patternfly',
      provider: 'Red Hat',
      description: 'PatternFly is a community project that promotes design commonality and improves user experience.',
      
      logo: 'src/icons/patternfly.svg'
    },
    {
      id: '2',
      name: 'ActiveMQ',
      provider: 'Red Hat',
      description: 'Allows messages to be sent/received to a JMS Queue or Topic using Apache ActiveMQ.',
      
      logo: 'src/icons/activemq.png'
    },
    {
      id: '3', 
      name: 'Apache Spark',
      provider: 'Red Hat',
      description: 'This page covers the Apache Spark component for the Apache Camel.',
      
      logo: 'src/icons/apachespark.png'
    },
    {
      id: '4',
      name: 'Avro',
      provider: 'Red Hat',
      description: 'Provides a dataformat for avro, allowing serialization and deserialization of messages using Apache Avro.',
      
      logo: 'src/icons/avro.webp'
    },
    {
      id: '5',
      name: 'Azure Services',
      provider: 'Red Hat',
      description: 'The Camel Components provide connectivity to Azure services from Camel.',
      
      logo: 'src/icons/azure.png'
    },
    {
      id: '6',
      name: 'GPU Enabled Compute',
      provider: 'Nvidia',
      description: 'GPU Enabled Compute for your GPU Intensive workloads.',
      
      logo: 'src/icons/Nvidia_logo.svg.png'
    },
    {
      id: '7',
      name: 'Dropbox',
      provider: 'Red Hat',
      description: 'Allows you to treat Dropbox remote folders as a producer/consumer of messages.',
      
      logo: 'src/icons/dropbox.png'
    },
    {
      id: '8',
      name: 'Windows Server 2022 CIS',
      provider: 'Microsoft',
      description: 'CIS Hardened image with preconfigured security baselines for Windows Server 2022.',
      
      logo: 'src/icons/windows.png'
    }
    ,
    {
      id: '9',
      name: 'MongoDB Atlas',
      provider: 'MongoDB',
      description: 'Fully managed cloud database for modern apps with automated scaling and backups.',
      
      logo: 'src/icons/MongoDB_Logo.svg.png'
    }
    ,
    {
      id: '10',
      name: 'ElasticSearch',
      provider: 'Elastic',
      description: 'Search, analyze, and visualize data in real time with Elastic Stack.',
      
      logo: 'src/icons/elastic.png'
    }
    ,
    {
      id: '11',
      name: 'PostgreSQL',
      provider: 'Bitnami',
      description: 'Open-source relational database engine, easy to deploy and scale in the cloud.',
      
      logo: 'src/icons/postgres.png'
    }
    ,
    {
      id: '12',
      name: 'Grafana',
      provider: 'Grafana Labs',
      description: 'Open-source analytics and monitoring platform for observability dashboards.',
      
      logo: 'src/icons/grafana.webp'
    }
    ,
    {
      id: '13',
      name: 'Nginx',
      provider: 'NGINX',
      description: 'Web server and reverse proxy for load balancing, HTTP caching, and more.',
      
      logo: 'src/icons/nginx.png'
    }
    ,
    {
      id: '14',
      name: 'Jenkins',
      provider: 'Jenkins Project',
      description: 'Automation server for CI/CD pipelines, build and deployment workflows.',
      
      logo: 'src/icons/jenkins.webp'
    }
  ];

  return (
    <div className="content-section" id="marketplace-content">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Marketplace</h2>
        <div className="flex gap-2">
          <Button onClick={() => setShowModal(true)}>
            <Search className="mr-2 h-4 w-4" />
            Add New Resource
          </Button>
        </div>
      </div>

      {/* Marketplace Items Grid - matches original layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {marketplaceItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardTitle className="text-center">{item.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.provider}</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
             
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Resource Modal - matches original functionality */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add Marketplace Resource</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Upload ISO
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Add Image
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Create Template
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