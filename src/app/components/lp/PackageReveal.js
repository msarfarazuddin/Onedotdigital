'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Packages from "./Packages";

gsap.registerPlugin(ScrollTrigger);

export default function PackageReveal() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const headingRef = useRef(null);
  const packagesRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const heading = headingRef.current;
    const packages = packagesRef.current;

    if (!section || !imageWrapper || !heading || !packages) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        // Desktop
        isDesktop: "(min-width: 1025px)",
        // Mobile
        isMobile: "(max-width: 1024px)"
      }, (context) => {
        let { isMobile } = context.conditions;

        // Zoom animation
        gsap.fromTo(
          imageWrapper,
          { scale: 1 },
          {
            scale: isMobile ? 3.5 : 2.7,
            transformOrigin: isMobile ? "center 90%" : "center center",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=1200",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          }
        );

        // Fade out the heading
        gsap.fromTo(
          heading,
          { opacity: 1 },
          {
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=480",
              scrub: true,
            },
          }
        );

        // Reveal the Packages component
        ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: "+=1200",
          onUpdate: (self) => {
            if (self.progress > 0.95) {
              gsap.to(packages, { autoAlpha: 1, duration: 0.5 });
            } else {
              gsap.to(packages, { autoAlpha: 0, duration: 0.5 });
            }
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* This wrapper will zoom */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 w-full lg:h-full md:h-full h-[85vh] z-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/images/mobile.png"
          alt="Zoomed image"
          fill
          className="object-cover object-top"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h2
            ref={headingRef}
            className="text-white text-3xl md:text-6xl font-extralight font-glancyr drop-shadow-lg -mb-10 text-center"
          >
            Smart Strategy<br /> Strong Execution<br /> Real Results
          </h2>
        </div>
      </div>

      {/* This stays fixed and doesn't zoom */}
      <div
        ref={packagesRef}
        className="absolute inset-0 z-10 opacity-0"
      >
        <Packages />
      </div>
    </section>
  );
}
