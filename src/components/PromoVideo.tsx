"use client";

import { useRef, useState, useEffect } from "react";

export default function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          setAutoplayFailed(true);
        });
      }
    }
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setAutoplayFailed(false);
    }
  };

  return (
    <div className="-mx-6 sm:mx-0 relative flex justify-center items-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        preload="metadata"
        poster="/video-poster.jpg"
        className="w-full h-auto object-cover sm:rounded-2xl border-y sm:border-x border-stone-800/50 shadow-2xl shadow-amber-500/10 aspect-video"
      >
        <source src="/cinemaly-promo.webm" type="video/webm" />
        <source src="/cinemaly-promo.mp4" type="video/mp4" />
      </video>

      {autoplayFailed && (
        <button
          onClick={handleManualPlay}
          className="absolute z-10 flex items-center justify-center w-16 h-16 rounded-full bg-stone-900/60 backdrop-blur-md border border-stone-700 hover:bg-amber-500/20 hover:border-amber-500 transition-all duration-300"
          aria-label="Play Video"
        >
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
