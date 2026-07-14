"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  dataAdSlot?: string;
  style?: React.CSSProperties;
}

export const AdBanner = ({ dataAdSlot, style }: AdBannerProps) => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double pushing in React Strict Mode (which can cause AdSense errors)
    if (initialized.current) return;

    try {
      if (typeof window !== "undefined") {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        initialized.current = true;
      }
    } catch (err) {
      console.error("AdSense initialization error: ", err);
    }
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto py-8 flex justify-center items-center z-[30] relative overflow-hidden min-h-[100px] bg-[#030014]/20 rounded-xl border border-cyan-500/10 backdrop-blur-sm px-4">
      <ins
        className="adsbygoogle"
        style={style || { display: "block", width: "100%", minWidth: "250px" }}
        data-ad-client="ca-pub-4013818155159731"
        data-ad-slot={dataAdSlot || "7255943294"} // Fallback placeholder slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
