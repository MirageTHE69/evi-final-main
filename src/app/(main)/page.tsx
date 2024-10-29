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
    gsap.registerPlugin(ScrollTrigger);

    const animations = [
      {
        ref: heroRef,
        from: { opacity: 0, y: -50 },
        to: { opacity: 1, y: 0 },
        trigger: heroRef.current,
        start: "top top",
      },
      {
        ref: infoRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: infoRef.current,
        start: "top 80%",
      },
      {
        ref: fleetRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: fleetRef.current,
        start: "top 80%",
      },
      {
        ref: productsRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: productsRef.current,
        start: "top 80%",
      },
      {
        ref: testimonialTitleRef,
        from: { opacity: 0, y: -30 },
        to: { opacity: 1, y: 0 },
        trigger: testimonialTitleRef.current,
        start: "top 80%",
      },
      {
        ref: testimonialCarouselRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: testimonialCarouselRef.current,
        start: "top 80%",
      },
      {
        ref: faqRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: faqRef.current,
        start: "top 80%",
      },
      {
        ref: footerRef,
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        trigger: footerRef.current,
        start: "top 80%",
      },
    ];

    animations.forEach(({ ref, from, to, trigger, start }) => {
      if (ref.current) {
        gsap.fromTo(ref.current, from, {
          ...to,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger,
            start: start,
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      }
    });

    if (productsRef.current) {
      const productCards =
        productsRef.current.querySelectorAll(".product-card");
      if (productCards.length > 0) {
        gsap.fromTo(
          productCards,
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
    }

    if (testimonialCarouselRef.current) {
      const testimonialItems =
        testimonialCarouselRef.current.querySelectorAll(".testimonial-item");
      if (testimonialItems.length > 0) {
        gsap.fromTo(
          testimonialItems,
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
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen w-full ">
      <div ref={heroRef}>
        <Navbar />
        <HeroSection />
      </div>

      <div ref={infoRef}>
        <Info />
      </div>

      <div className="bg-[#E5E5E5] py-16">
        <div
          className="w-full text-center mt-8 text-3xl mb-16 font-bold"
          ref={fleetRef}
        >
          <span className="text-[#1B4572]">Explore Our Fleet</span>
        </div>

        <div className="flex flex-col gap-10" ref={productsRef}>
          <Products />
          <Products1 />
        </div>
      </div>

      <div
        className="w-full text-center text-3xl font-bold"
        ref={testimonialTitleRef}
      >
        <span className="text-[#1B4572]">What Our Customers Say</span>
      </div>
      <div className="mb-14" ref={testimonialCarouselRef}>
        <TestimonialCarousel />
      </div>

      <div ref={faqRef}>
        <FAQSection />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
