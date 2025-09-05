"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Database } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Open core, enterprise-grade",
    description: "Built on proven open-source foundations with enterprise security features and support.",
    badge: "Open Source",
    badgeVariant: "open-source" as const,
  },
  {
    icon: Zap,
    title: "Detections that ship day one",
    description: "250+ Sigma rules, 50+ network detections, and 24x7 rule updates via GitHub sync.",
    badge: "Ready to Use",
    badgeVariant: "neon" as const,
  },
  {
    icon: Database,
    title: "Own your data, anywhere",
    description: "Self-host on Debian 13, Kubernetes, or bare-metal. Keep costs predictable and data private.",
    badge: "Self-Hosted",
    badgeVariant: "secondary" as const,
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-jupiter-deep/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary lg:text-4xl mb-4">
            Why security teams choose Jupiter
          </h2>
          <p className="text-lg text-text-dim max-w-2xl mx-auto">
            Built for operators, by operators. No vendor lock-in, no surprise costs, no compromises on security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass border-ion-neon/20 hover:border-ion-neon/40 transition-all duration-300 hover:shadow-neon/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-ion-neon/10 border border-ion-neon/20">
                      <prop.icon className="w-6 h-6 text-ion-neon" />
                    </div>
                    <Badge variant={prop.badgeVariant}>{prop.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl text-text-primary">
                    {prop.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-text-dim text-base leading-relaxed">
                    {prop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-mono font-bold text-ion-neon">250+</div>
            <div className="text-sm text-text-dim">Sigma Rules</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-mono font-bold text-ion-purple">50+</div>
            <div className="text-sm text-text-dim">Network Detections</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-mono font-bold text-jupiter-accent">24x7</div>
            <div className="text-sm text-text-dim">Rule Updates</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-mono font-bold text-signal-green">100%</div>
            <div className="text-sm text-text-dim">Open Source</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
