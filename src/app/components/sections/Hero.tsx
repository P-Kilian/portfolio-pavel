"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroBackground from "../HeroBackground";

export default function Hero() {
  const helloRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([helloRef.current, nameRef.current], {
        y: 100,
        opacity: 0,
      });

      gsap.to([helloRef.current, nameRef.current], {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative h-screen w-full pt-5"
    >
      <HeroBackground />
      <div className="relative h-full w-full mx-auto flex flex-col items-center justify-center px-40 gap-20 rounded-t-lg text-black bg-primary-500">
        <div className="self-end">
          <h1 className="text-9xl text-right font-bold font-poppins ">
            <span ref={helloRef}>Hello</span>
            <br />
            <span ref={nameRef}>I&apos;m Pavel</span>
          </h1>
        </div>
        <div className="max-w-lg self-start">
          <p className="text-lg font-ibm-plex">
            I am a front-end developer who aims at providing the best service
            possible as I am very cool.
          </p>
        </div>
      </div>
    </section>
  );
}
