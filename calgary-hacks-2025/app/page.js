"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedClasses from "../components/FeaturedClasses";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
      <div className="w-full">
        <div className="w-full bg-white">
          <div className="flex flex-col w-full">
            <Header />
            <Hero />
            <FeaturedClasses />
            <Features />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
