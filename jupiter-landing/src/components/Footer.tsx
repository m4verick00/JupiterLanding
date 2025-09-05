"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink,
  Shield,
  FileText,
  Users,
  Heart
} from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Demo", href: "#demo" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Changelog", href: "/changelog" },
    { name: "Roadmap", href: "/roadmap" },
  ],
  Community: [
    { name: "GitHub", href: "https://github.com/projectjupiter", external: true },
    { name: "Discord", href: "https://discord.gg/jupiter", external: true },
    { name: "Telegram", href: "https://t.me/jupiter_security", external: true },
    { name: "Contributing", href: "/contributing" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Security", href: "/security" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security Policy", href: "/security.txt" },
    { name: "License", href: "/license" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-jupiter-deep border-t border-ion-neon/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-b border-ion-neon/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Stay updated with Jupiter
            </h3>
            <p className="text-text-dim mb-8">
              Get the latest updates, security insights, and feature announcements delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-jupiter-bg border-ion-neon/20 text-text-primary placeholder:text-text-dim"
              />
              <Button variant="neon" type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-text-dim mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-jupiter-accent to-ion-neon flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-jupiter-deep"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-jupiter-accent to-ion-neon rounded-full blur opacity-30"></div>
                </div>
                <span className="text-xl font-heading font-semibold text-text-primary">
                  project jupiter
                </span>
              </Link>
              <p className="text-text-dim mb-6 max-w-sm">
                Planet-scale security telemetry platform. Open source, self-hostable, enterprise-grade.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/projectjupiter" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com/projectjupiter" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:hello@projectjupiter.in">
                    <Mail className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-text-primary mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-text-dim hover:text-text-primary transition-colors duration-200 text-sm flex items-center gap-1"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                        {link.external && <ExternalLink className="w-3 h-3" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-ion-neon/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-text-dim">
              <span>© 2024 Project Jupiter. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Made with <Heart className="w-4 h-4 inline text-threat-red" /> by security operators</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/security.txt" className="text-text-dim hover:text-text-primary transition-colors">
                <Shield className="w-4 h-4 inline mr-1" />
                Security
              </Link>
              <Link href="/status" className="text-text-dim hover:text-text-primary transition-colors">
                <FileText className="w-4 h-4 inline mr-1" />
                Status
              </Link>
              <Link href="/contributors" className="text-text-dim hover:text-text-primary transition-colors">
                <Users className="w-4 h-4 inline mr-1" />
                Contributors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
