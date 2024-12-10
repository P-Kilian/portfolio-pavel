"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const BANNER_ITEMS = [
  "Available for freelance work",
  "Based in Belgium",
  "Front-end Developer",
  "React & Next.js",
];

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const thirdTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });

      gsap.set(secondTextRef.current, { xPercent: 100 });
      gsap.set(thirdTextRef.current, { xPercent: 200 });

      tl.to(
        [firstTextRef.current, secondTextRef.current, thirdTextRef.current],
        {
          xPercent: "-=100",
          duration: 15,
          onComplete: () => {
            gsap.set(firstTextRef.current, { xPercent: 200 });
            tl.invalidate().restart();
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const renderBannerContent = (ref: React.RefObject<HTMLDivElement>) => (
    <div
      ref={ref}
      className="flex absolute top-0 left-0 items-center whitespace-nowrap"
    >
      {BANNER_ITEMS.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-4 text-xl font-medium">{item}</span>
          <span className="text-xl opacity-50">•</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={bannerRef}
      className="w-full h-14 relative overflow-hidden bg-black py-4 text-white"
    >
      <div className="flex relative">
        {renderBannerContent(firstTextRef)}
        {renderBannerContent(secondTextRef)}
        {renderBannerContent(thirdTextRef)}
      </div>
    </div>
  );
}
