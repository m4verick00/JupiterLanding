"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JupiterCanvas from "./JupiterCanvas";
import { Play, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-jupiter-bg min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-cosmic" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-jupiter-deep/20 to-jupiter-bg" />
      
      {/* Starfield */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ion-neon rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl font-heading font-bold text-text-primary lg:text-6xl xl:text-7xl leading-tight"
              >
                Planet-scale security telemetry.{" "}
                <span className="bg-gradient-to-r from-ion-neon to-ion-purple bg-clip-text text-transparent">
                  Zero-friction.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-text-dim max-w-2xl leading-relaxed"
              >
                Collect, detect, and respond across your stack with an open, self-hostable SIEM that feels like a product—not a project.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="neon" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="/console">
                  Start free on your server
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="neon-outline" size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See 2-minute demo
                </a>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="pt-8 border-t border-ion-neon/20"
            >
              <p className="text-sm text-text-dim mb-4">Trusted by security teams worldwide</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-text-dim">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-signal-green rounded-full"></div>
                  Open Source • MIT
                </span>
                <span>Built on FastAPI + NiFi + Suricata/Zeek</span>
                <span>Self-hostable • Enterprise-grade</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Jupiter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[420px] lg:h-[520px] xl:h-[600px]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-ion-neon/20 via-transparent to-transparent rounded-full blur-3xl" />
            
            {/* 3D Canvas Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass border border-ion-neon/20">
              <JupiterCanvas />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-ion-neon rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-ion-purple rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-ion-neon/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-ion-neon rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
