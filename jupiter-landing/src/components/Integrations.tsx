"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Shield, 
  Database, 
  Search,
  Globe,
  Server,
  FileText,
  Zap
} from "lucide-react";

const integrations = [
  { name: "Suricata", category: "Network", type: "Open Source", icon: Network },
  { name: "Zeek", category: "Network", type: "Open Source", icon: Network },
  { name: "Wazuh", category: "Endpoint", type: "Open Source", icon: Shield },
  { name: "OSQuery", category: "Endpoint", type: "Open Source", icon: Database },
  { name: "Sigma", category: "Detection", type: "Open Source", icon: Search },
  { name: "MISP", category: "Threat Intel", type: "Open Source", icon: Globe },
  { name: "VirusTotal", category: "Threat Intel", type: "Free Tier", icon: Shield },
  { name: "GreyNoise", category: "Threat Intel", type: "Free Tier", icon: Globe },
  { name: "AbuseIPDB", category: "Threat Intel", type: "Free Tier", icon: Globe },
  { name: "Loki", category: "Logging", type: "Open Source", icon: FileText },
  { name: "Prometheus", category: "Metrics", type: "Open Source", icon: Server },
  { name: "ELK Stack", category: "Logging", type: "Open Source", icon: Database },
  { name: "S3/MinIO", category: "Storage", type: "Open Source", icon: Database },
  { name: "Postgres", category: "Database", type: "Open Source", icon: Database },
];

const categories = [
  { name: "Network Security", icon: Network, count: 2 },
  { name: "Endpoint Protection", icon: Shield, count: 2 },
  { name: "Threat Intelligence", icon: Globe, count: 4 },
  { name: "Logging & Metrics", icon: FileText, count: 4 },
  { name: "Storage & Database", icon: Database, count: 2 },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-jupiter-deep/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary lg:text-4xl mb-4">
            Seamless integrations with your existing stack
          </h2>
          <p className="text-lg text-text-dim max-w-3xl mx-auto">
            Connect Jupiter with your favorite security tools and data sources. No vendor lock-in, maximum flexibility.
          </p>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-5 mb-16"
        >
          {categories.map((category) => (
            <Card key={category.name} className="glass border-ion-neon/20 hover:border-ion-neon/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <category.icon className="w-8 h-8 text-ion-neon mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-text-dim">
                  {category.count} integrations
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Integrations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="glass border-ion-neon/20 hover:border-ion-neon/40 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-4 text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="p-2 rounded-lg bg-ion-neon/10 border border-ion-neon/20 group-hover:bg-ion-neon/20 transition-colors">
                      <integration.icon className="w-6 h-6 text-ion-neon" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-sm mb-1">
                      {integration.name}
                    </h3>
                    <p className="text-xs text-text-dim mb-2">
                      {integration.category}
                    </p>
                    <Badge 
                      variant={integration.type === "Open Source" ? "open-source" : "neon"}
                      className="text-xs"
                    >
                      {integration.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass border-ion-neon/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-ion-neon mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                Need a custom integration?
              </h3>
              <p className="text-text-dim mb-6">
                Jupiter&apos;s modular architecture makes it easy to add new data sources and integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="text-sm">
                  REST API
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Webhooks
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Custom Connectors
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
