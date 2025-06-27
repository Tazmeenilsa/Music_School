'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { TestimonialsCard } from "@/components/TestimonialsCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection />
      <FeaturedCourses />
      <TestimonialsCard />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
