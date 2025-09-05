import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-jupiter-bg">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <Integrations />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
