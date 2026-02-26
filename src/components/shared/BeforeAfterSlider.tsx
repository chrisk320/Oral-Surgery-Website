"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio = "aspect-[4/3]",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const sliderX = useMotionValue(0);
  const clipPercent = useTransform(
    sliderX,
    [0, containerWidth],
    [0, 100]
  );

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setContainerWidth(w);
        sliderX.set(w / 2);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [sliderX]);

  return (
    <div
      ref={containerRef}
      className={`relative ${aspectRatio} overflow-hidden rounded-xl select-none cursor-col-resize`}
      style={{ touchAction: "none" }}
    >
      {/* Before layer (full width, behind) */}
      <div className="absolute inset-0">
        {beforeSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full bg-[#1B3A5C]/20 flex items-center justify-center">
            <span className="text-[#1B3A5C]/40 font-semibold text-sm uppercase tracking-wider">
              {beforeLabel}
            </span>
          </div>
        )}
        {/* Before label badge */}
        <span className="absolute top-3 left-3 text-xs font-semibold bg-black/40 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* After layer (clipped from left, revealing as handle moves right) */}
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath: useTransform(
            clipPercent,
            (v) => `inset(0 0 0 ${v}%)`
          ),
        }}
      >
        {afterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={afterSrc}
            alt={afterAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full bg-[#2A9D8F]/30 flex items-center justify-center">
            <span className="text-[#2A9D8F]/60 font-semibold text-sm uppercase tracking-wider">
              {afterLabel}
            </span>
          </div>
        )}
        {/* After label badge */}
        <span className="absolute top-3 right-3 text-xs font-semibold bg-[#2A9D8F]/80 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
          {afterLabel}
        </span>
      </motion.div>

      {/* Drag handle */}
      {containerWidth > 0 && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: containerWidth }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x: sliderX }}
          onDragStart={() => setHasInteracted(true)}
          className="absolute top-0 bottom-0 -translate-x-1/2 w-1 bg-white cursor-col-resize z-10 flex items-center justify-center"
        >
          {/* Handle pill */}
          <div className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-gray-100">
            <GripVertical className="w-4 h-4 text-[#334155]" />
          </div>
        </motion.div>
      )}

      {/* "Drag to compare" hint — fades on first interaction */}
      {!hasInteracted && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-black/50 text-white px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none whitespace-nowrap">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
}
