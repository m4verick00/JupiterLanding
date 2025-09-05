"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Search, 
  Play, 
  BarChart3
} from "lucide-react";

const features = [
  {
    category: "Ingest & Normalize",
    icon: Database,
    title: "Unified Telemetry",
    description: "Stream logs, network, endpoints, cloud—normalize into one schema with NiFi pipelines and ECS-like structure.",
    details: ["NiFi pipelines", "ECS-like schema", "Multi-format support", "Real-time processing"],
    color: "ion-neon",
  },
  {
    category: "Detect & Hunt",
    icon: Search,
    title: "Real-Time Detection",
    description: "Suricata/Zeek + Sigma rules + threat intel enrichment for comprehensive security monitoring.",
    details: ["Suricata/Zeek", "YARA rules", "Sigma detection", "MISP/VT/AbuseIPDB"],
    color: "ion-purple",
  },
  {
    category: "Respond",
    icon: Play,
    title: "Playbooks that Act",
    description: "Route to Telegram/Discord, quarantine via n8n, auto-create tickets with intelligent automation.",
    details: ["n8n automation", "Multi-channel alerts", "Auto-quarantine", "Ticket creation"],
    color: "jupiter-accent",
  },
  {
    category: "Visualize",
    icon: BarChart3,
    title: "Attack Path Analysis",
    description: "Time series, entity timeline, attack paths with interactive dashboards and threat hunting tools.",
    details: ["Time series", "Entity timeline", "Attack paths", "Interactive dashboards"],
    color: "signal-green",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-jupiter-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary lg:text-4xl mb-4">
            Complete security telemetry platform
          </h2>
          <p className="text-lg text-text-dim max-w-3xl mx-auto">
            From ingestion to response, Jupiter provides everything you need for enterprise-grade security monitoring.
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Card className="glass border-ion-neon/20 hover:border-ion-neon/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/20`}>
                        <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-text-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-text-dim text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {feature.details.map((detail) => (
                        <Badge key={detail} variant="secondary" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="relative">
                  {/* Placeholder for feature visualization */}
                  <div className={`aspect-video rounded-lg bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/5 border border-${feature.color}/20 flex items-center justify-center`}>
                    <div className="text-center space-y-4">
                      <feature.icon className={`w-16 h-16 text-${feature.color} mx-auto`} />
                      <div className="text-text-dim font-mono text-sm">
                        {feature.category} Visualization
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className={`absolute -top-4 -right-4 w-8 h-8 bg-${feature.color} rounded-full opacity-60`}
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 + 1 }}
                    className={`absolute -bottom-4 -left-4 w-6 h-6 bg-${feature.color} rounded-full opacity-40`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MITRE ATT&CK Matrix Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              MITRE ATT&CK Coverage
            </h3>
            <p className="text-text-dim">
              Comprehensive detection coverage across the MITRE ATT&CK framework
            </p>
          </div>
          
          <Card className="glass border-ion-neon/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-12 gap-1 mb-4">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${
                      Math.random() > 0.3 
                        ? "bg-signal-green/60" 
                        : Math.random() > 0.6 
                        ? "bg-jupiter-accent/60" 
                        : "bg-jupiter-deep/60"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-signal-green/60 rounded-sm"></div>
                  <span className="text-text-dim">High Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-jupiter-accent/60 rounded-sm"></div>
                  <span className="text-text-dim">Medium Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-jupiter-deep/60 rounded-sm"></div>
                  <span className="text-text-dim">Planned</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
