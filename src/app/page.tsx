'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { TestimonialsCard } from "@/components/TestimonialsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
      <FeaturedCourses />
      <TestimonialsCard/>
    </main>
  );
}
