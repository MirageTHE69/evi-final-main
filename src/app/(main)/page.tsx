"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "../../components/nav";
import Products from "@/components/productCard";
import Products1 from "@/components/productCard2";
import Info from "@/components/info";
import TestimonialCarousel from "@/components/testimonial";
import FAQSection from "@/components/faqSection";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const testimonialTitleRef = useRef<HTMLDivElement>(null);
  const testimonialCarouselRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero Section Animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Info Section Animation
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Explore Our Fleet Section Animation
    if (fleetRef.current) {
      gsap.fromTo(
        fleetRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: fleetRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Products Section Animation
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      // Staggered animation for individual product cards
      gsap.fromTo(
        productsRef.current.querySelectorAll(".product-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Testimonials Title Animation
    if (testimonialTitleRef.current) {
      gsap.fromTo(
        testimonialTitleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Testimonials Carousel Animation
    if (testimonialCarouselRef.current) {
      gsap.fromTo(
        testimonialCarouselRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialCarouselRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      // Staggered animation for individual testimonials
      gsap.fromTo(
        testimonialCarouselRef.current.querySelectorAll(".testimonial-item"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialCarouselRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // FAQ Section Animation
    if (faqRef.current) {
      gsap.fromTo(
        faqRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Footer Animation
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }

    // Cleanup function to kill all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-screen">
      {/* Hero Section */}
      <div ref={heroRef}>
        <Navbar />
        <HeroSection />
      </div>

      {/* Info Section */}
      <div ref={infoRef}>
        <Info />
      </div>

      {/* Explore Our Fleet Section */}
      <div className="bg-[#E5E5E5] py-16">
        <div
          className="w-full text-center mt-8 text-3xl mb-16 font-bold"
          ref={fleetRef}
        >
          <span className="text-[#1B4572]">Explore Our Fleet</span>
        </div>

        {/* Products Section */}
        <div className="flex flex-col gap-10 " ref={productsRef}>
          <Products />
          <Products1 />
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="w-full text-center  text-3xl  font-bold"
        ref={testimonialTitleRef}
      ></div>
      <div className="mb-14" ref={testimonialCarouselRef}>
        <TestimonialCarousel />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef}>
        <FAQSection />
      </div>

      {/* Footer */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
