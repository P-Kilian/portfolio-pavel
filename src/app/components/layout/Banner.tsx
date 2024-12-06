import { FC } from "react";

interface BannerProps {
  text?: string;
  speed?: number;
}

const Banner: FC<BannerProps> = ({
  text = "SHAPING YOUR IDEAS",
  speed = 15,
}) => {
  // Create the repeated content once
  const content = (
    <span className="text-white text-sm uppercase tracking-wider px-2">
      {text} <span className="opacity-50 mx-2">—————</span>
    </span>
  );

  return (
    <div className="w-full overflow-hidden bg-black py-3 pointer-events-none select-none">
      <div
        className="flex whitespace-nowrap animate-scroll"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(99)].map((_, index) => (
          <span key={`first-${index}`}>{content}</span>
        ))}
        {[...Array(99)].map((_, index) => (
          <span key={`second-${index}`}>{content}</span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
