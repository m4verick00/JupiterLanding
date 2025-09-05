"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ExternalLink } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Integrations", href: "#integrations" },
  { name: "Detections", href: "#detections" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-ion-neon/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-dim hover:text-text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/projectjupiter" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="neon-outline" size="sm" asChild>
              <Link href="#demo">
                Book Demo
              </Link>
            </Button>
            <Button variant="neon" size="sm" asChild>
              <Link href="/console">
                Launch Console
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-ion-neon/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-text-dim hover:text-text-primary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="https://github.com/projectjupiter" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="neon-outline" size="sm" className="w-full" asChild>
                  <Link href="#demo">
                    Book Demo
                  </Link>
                </Button>
                <Button variant="neon" size="sm" className="w-full" asChild>
                  <Link href="/console">
                    Launch Console
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
