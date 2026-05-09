import React from "react";

type ProgressiveBlurProps = {
  className?: string;
  backgroundColor?: string;
  position?: "top" | "bottom";
  height?: string;
  blurAmount?: string;
};

const ProgressiveBlur = ({
  className = "",
  backgroundColor = "#f5f4f3",
  position = "top",
  height = "150px",
  blurAmount = "4px",
}: ProgressiveBlurProps) => {
  const isTop = position === "top";

  return (
    <div
      className={`pointer-events-none absolute left-0 w-full select-none z-10 ${className}`}
      style={{
        [isTop ? "top" : "bottom"]: 0,
        height,
        background: isTop
          ? `linear-gradient(to top, transparent, ${backgroundColor})`
          : `linear-gradient(to bottom, transparent, ${backgroundColor})`,
        maskImage: isTop
          ? `linear-gradient(to bottom, ${backgroundColor} 50%, transparent)`
          : `linear-gradient(to top, ${backgroundColor} 50%, transparent)`,
        WebkitBackdropFilter: `blur(${blurAmount})`,
        backdropFilter: `blur(${blurAmount})`,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    />
  );
};

type ScrollableBlurContainerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  height?: string;
  blurHeight?: string;
  className?: string;
};

const ScrollableBlurContainer = ({
  children,
  backgroundColor = "#f5f4f3",
  height = "80vh",
  blurHeight = "150px",
  className = "",
}: ScrollableBlurContainerProps) => {
  return (
    <div 
      className={`relative flex w-full flex-col items-center justify-center ${className}`}
      style={{ backgroundColor }}
    >
      <ProgressiveBlur position="top" backgroundColor={backgroundColor} height={blurHeight} />
      <ProgressiveBlur position="bottom" backgroundColor={backgroundColor} height={blurHeight} />

      <div 
        className="flex w-full flex-col items-center overflow-y-auto overflow-x-hidden"
        style={{ height }}
      >
        {children}
      </div>
    </div>
  );
};

export { ProgressiveBlur, ScrollableBlurContainer };
