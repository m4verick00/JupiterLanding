"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Users } from "lucide-react";

const plans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for getting started with Jupiter",
    icon: Star,
    color: "ion-neon",
    features: [
      "Self-host on your infrastructure",
      "All core SIEM features",
      "250+ Sigma detection rules",
      "50+ network detections",
      "Basic dashboards and visualizations",
      "Community support",
      "MIT license",
      "No event limits",
    ],
    cta: "Start Free",
    ctaVariant: "neon" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing security teams",
    icon: Zap,
    color: "ion-purple",
    features: [
      "Everything in Community",
      "Advanced alert routing",
      "SSO integration",
      "Role-based access control",
      "Policy packs and templates",
      "30-day data retention helpers",
      "Priority rule updates",
      "Email support (24h response)",
      "Custom integrations",
    ],
    cta: "Start Pro Trial",
    ctaVariant: "neon" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    icon: Shield,
    color: "jupiter-accent",
    features: [
      "Everything in Pro",
      "High availability deployment",
      "SAML/SCIM integration",
      "Private rules feed",
      "Dedicated support (4h response)",
      "Custom deployment support",
      "Training and onboarding",
      "SLA guarantees",
      "White-label options",
    ],
    cta: "Contact Sales",
    ctaVariant: "neon-outline" as const,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-jupiter-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-heading font-bold text-text-primary lg:text-4xl mb-4">
            Transparent pricing, no surprises
          </h2>
          <p className="text-lg text-text-dim max-w-3xl mx-auto">
            Start free, scale as you grow. No hidden costs, no vendor lock-in, no compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="neon" className="px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full glass border-ion-neon/20 hover:border-ion-neon/40 transition-all duration-300 ${
                plan.popular ? "border-ion-neon/40 shadow-neon/20" : ""
              }`}>
                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-${plan.color}/10 border border-${plan.color}/20`}>
                      <plan.icon className={`w-8 h-8 text-${plan.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-text-primary mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-text-dim mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="text-4xl font-mono font-bold text-text-primary">
                      {plan.price}
                      {plan.period && (
                        <span className="text-lg text-text-dim font-normal">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.name === "Community" && (
                      <div className="text-sm text-signal-green">
                        Forever free
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-signal-green mt-0.5 flex-shrink-0" />
                        <span className="text-text-dim text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.ctaVariant} 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href={plan.name === "Enterprise" ? "#contact" : "/console"}>
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass border-ion-neon/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                All plans include
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-ion-neon mx-auto mb-2" />
                  <h4 className="font-semibold text-text-primary mb-1">Self-Hosted</h4>
                  <p className="text-sm text-text-dim">Deploy on your infrastructure</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-ion-purple mx-auto mb-2" />
                  <h4 className="font-semibold text-text-primary mb-1">Open Source</h4>
                  <p className="text-sm text-text-dim">Full source code access</p>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-jupiter-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-text-primary mb-1">No Limits</h4>
                  <p className="text-sm text-text-dim">Unlimited events and users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
