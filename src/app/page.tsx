"use client";

import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Systems from "@/components/sections/Systems";
import Research from "@/components/sections/Research";
import CTA from "@/components/sections/CTA";
import AsunaPresence from "@/components/features/AsunaPresence";
import { AsunaProvider } from "@/components/features/AsunaContext";

export default function Home() {
  return (
    <AsunaProvider>
      <CustomCursor />
      <AsunaPresence />
      <Navbar />

      <main className="page-breathe">
        <Hero />
        <About />
        <Systems />
        <Research />
        <CTA />
      </main>

      <Footer />
    </AsunaProvider>
  );
}
