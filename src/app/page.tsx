"use client";

import { useRef, useState, useEffect } from "react";
import { generatePolyglotCapsule } from "../utils/polyglotBuilder";

import { Lexend_Giga, Lexend_Tera } from "next/font/google";

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  display: "swap",
});

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  display: "swap",
});

const ImageThumbnail = ({
  file,
  isCover,
  onMakeCover,
  onRemove,
}: {
  file: File;
  isCover: boolean;
  onMakeCover: () => void;
  onRemove: () => void;
}) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div
      className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all group ${
        isCover
          ? "border-amber-500 shadow-[0_0_10px_-2px_rgba(245,158,11,0.5)]"
          : "border-stone-700 opacity-80 hover:opacity-100"
      }`}
    >
      {url && (
        <img src={url} className="w-full h-full object-cover" alt="thumbnail" />
      )}

      {isCover && (
        <span className="absolute top-0 left-0 bg-amber-500 text-stone-900 text-[9px] md:text-[10px] font-black px-1.5 py-0.5 rounded-br-lg z-10 pointer-events-none">
          COVER
        </span>
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="absolute top-1 right-1 w-5 h-5 bg-rose-600/90 hover:bg-rose-500 text-white rounded-md flex items-center justify-center z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all shadow-lg backdrop-blur-[2px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {!isCover && (
        <button
          onClick={onMakeCover}
          type="button"
          className="absolute inset-0 bg-black/60 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-white opacity-0 md:group-hover:opacity-100 transition-opacity z-10 backdrop-blur-[1px]"
        >
          MAKE COVER
        </button>
      )}
    </div>
  );
};

const MiniThumbnail = ({ file, isCover }: { file: File; isCover: boolean }) => {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div
      className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border transition-all ${
        isCover
          ? "border-amber-500/80 shadow-[0_0_8px_-2px_rgba(245,158,11,0.4)]"
          : "border-stone-700/50"
      }`}
    >
      {url && (
        <img src={url} className="w-full h-full object-cover" alt="mini" />
      )}
    </div>
  );
};
export default function Home() {
  const [galleryImages, setGalleryImages] = useState<FileList | null>(null);
  const [cities, setCities] = useState<
    { isim: string; not: string; images: File[] }[]
  >([]);
  const [cityInput, setCityInput] = useState("");
  const [noteInput, setNoteInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const [cityImages, setCityImages] = useState<File[]>([]);
  const cityImagesInputRef = useRef<HTMLInputElement>(null);
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

  const [alertConfig, setAlertConfig] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const showNotification = (
    message: string,
    type: "error" | "success" = "error",
  ) => {
    setAlertConfig({ message, type });
    setTimeout(() => {
      setAlertConfig(null);
    }, 5500);
  };

  const handleEditCity = (index: number) => {
    const city = cities[index];
    setCityInput(city.isim);
    setNoteInput(city.not);
    setEditingIndex(index);

    if (city.images && city.images.length > 0) {
      setCityImages([...city.images]);

      const dt = new DataTransfer();
      city.images.forEach((file) => dt.items.add(file));
      if (cityImagesInputRef.current) {
        cityImagesInputRef.current.files = dt.files;
      }
    } else {
      setCityImages([]);
      if (cityImagesInputRef.current) {
        cityImagesInputRef.current.value = "";
      }
    }

    setTimeout(() => {
      document.getElementById("form-start-point")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleMakeCover = (index: number) => {
    const updated = [...cityImages];
    const [selected] = updated.splice(index, 1);
    updated.unshift(selected);
    setCityImages(updated);

    const dt = new DataTransfer();
    updated.forEach((file) => dt.items.add(file));
    if (cityImagesInputRef.current) {
      cityImagesInputRef.current.files = dt.files;
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setCityImages((prev) => {
      const updated = prev.filter((_, idx) => idx !== indexToRemove);

      const dt = new DataTransfer();
      updated.forEach((file) => dt.items.add(file));
      if (cityImagesInputRef.current) {
        cityImagesInputRef.current.files = dt.files;
      }
      return updated;
    });
  };

  const handleCancelEdit = () => {
    setCityInput("");
    setNoteInput("");
    setCityImages([]);
    setEditingIndex(null);
    if (cityImagesInputRef.current) cityImagesInputRef.current.value = "";
  };

  const handleAddCity = () => {
    if (cityInput.trim() === "") {
      showNotification("City or region name is required.", "error");
      return;
    }

    if (noteInput.length > 300) {
      showNotification("Story exceeds the 300-character limit.", "error");
      return;
    }

    const newCityData = {
      isim: cityInput.trim(),
      not: noteInput.trim(),
      images: cityImages ? Array.from(cityImages) : [],
    };

    if (editingIndex !== null) {
      const updatedCities = [...cities];
      updatedCities[editingIndex] = newCityData;
      setCities(updatedCities);
      showNotification("Route successfully updated.", "success");
    } else {
      setCities([...cities, newCityData]);
    }

    handleCancelEdit();
  };

  const handleGenerate = async () => {
    if (editingIndex !== null) {
      showNotification(
        "Please finish or cancel your edit before compiling the capsule.",
        "error",
      );
      return;
    }
    const hasCityImages = cities.some(
      (city) => city.images && city.images.length > 0,
    );

    if ((!galleryImages || galleryImages.length === 0) && !hasCityImages) {
      showNotification(
        "Please select at least one photo for the capsule (General or City-specific).",
        "error",
      );
      return;
    }

    if (cities.length === 0) {
      showNotification(
        "Please add at least one destination to your route.",
        "error",
      );
      return;
    }

    setIsGenerating(true);

    try {
      const routeData = [];

      for (const cityObj of cities) {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityObj.isim)}&format=json&limit=1`,
        );
        const data = await res.json();

        if (data && data.length > 0) {
          const coords = [parseFloat(data[0].lon), parseFloat(data[0].lat)];
          routeData.push({
            isim: cityObj.isim,
            koordinat: coords,
            not: cityObj.not,
            images: cityObj.images,
          });
        } else {
          console.warn(`${cityObj.isim} could not be located on the map.`);
        }
      }

      await generatePolyglotCapsule(
        galleryImages ? Array.from(galleryImages) : [],
        routeData,
      );
      showNotification(
        "Capsule successfully compiled and downloaded.",
        "success",
      );
    } catch (error) {
      console.error("Derleme hatası:", error);
      showNotification(
        "An error occurred while compiling the capsule.",
        "error",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-stone-200 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-stone-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-80"></div>

        <div className="ambient-orb w-[50vw] h-[50vh] top-[-10%] left-[-10%] bg-amber-600/10 blur-[120px] mix-blend-screen animation-float-slow"></div>
        <div className="ambient-orb w-[60vw] h-[60vh] bottom-[-10%] right-[-10%] bg-orange-600/10 blur-[150px] mix-blend-screen animation-float-delayed"></div>
        <div className="ambient-orb w-[40vw] h-[40vh] top-[30%] left-[50%] bg-blue-900/15 blur-[100px] mix-blend-screen animation-float"></div>

        <div className="absolute inset-0 css-grid-pattern opacity-20 mask-[linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-9999 transition-all duration-300 transform w-[92vw] sm:w-auto ${
          alertConfig
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {alertConfig && (
          <div
            className={`flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-2xl backdrop-blur-xl w-full sm:w-auto ${
              alertConfig.type === "error"
                ? "bg-rose-950/80 border-rose-500/50 text-rose-200 shadow-rose-900/50"
                : "bg-stone-900/90 border-amber-500/50 text-amber-100 shadow-amber-900/30"
            }`}
          >
            {alertConfig.type === "error" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-rose-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="font-medium text-sm md:text-base tracking-wide">
              {alertConfig.message}
            </span>
          </div>
        )}
      </div>

      <main className="relative z-10 flex-1 pt-24 md:pt-32 pb-10 md:pb-16 px-0 sm:px-6 flex flex-col items-center justify-center w-full">
        <div className="max-w-3xl w-full bg-stone-900/35 backdrop-blur-3xl p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-4xl border border-stone-700/40 shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-amber-500/8 blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-8 md:mb-12 relative z-10">
            <h1
              className={`${lexendGiga.className} text-xl sm:text-3xl font-extrabold text-[#d4d3d3] tracking-tight mb-3 leading-tight`}
            >
              Transform your digital footprint into a{" "}
              <br className="hidden sm:block" />
              <span
                className={`${lexendTera.className} text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-orange-400 to-rose-400`}
              >
                cinematic documentary.
              </span>{" "}
            </h1>
            <p className="text-stone-400 font-medium text-sm md:text-lg max-w-xl mx-auto px-2">
              Upload your travel photos and route, and Cinemaly creates a free
              interactive cinematic map — no login, no server, zero data stored.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-5 md:mt-7">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No Login
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Zero Data Stored
              </span>

              <a
                href="https://github.com/veuler/cinemaly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 hover:text-white hover:border-stone-600 text-[10px] font-semibold tracking-wide transition-colors duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Open Source
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Desktop & Android
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/60 border border-stone-800/80 text-stone-400 text-[10px] font-semibold tracking-wide cursor-default">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-amber-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share with Anyone
              </span>
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent mt-8 mb-6 md:mt-10 md:mb-8"></div>
          <div className="-mx-6 sm:mx-0 relative flex justify-center items-center">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              preload="auto"
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
          <div className="w-full max-w-3xl mx-auto h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent mt-8 mb-6 md:mt-10 md:mb-8"></div>

          <div
            id="form-start-point"
            className="relative z-10 space-y-8 md:space-y-10"
          >
            <div>
              <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-stone-200 mb-3 md:mb-4 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-md bg-amber-500/15 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                1. General Memory Photos
              </label>
              <label className="relative group flex flex-col items-center justify-center gap-3 w-full border-2 border-dashed border-stone-700/60 hover:border-amber-500/50 rounded-2xl py-8 md:py-10 px-4 cursor-pointer transition-all duration-200 bg-stone-950/30 hover:bg-amber-500/5">
                <div className="w-11 h-11 rounded-full bg-stone-800/80 flex items-center justify-center group-hover:bg-amber-500/10 transition-all duration-200 ring-1 ring-stone-700/50 group-hover:ring-amber-500/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-stone-400 group-hover:text-amber-400 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-stone-300 group-hover:text-white transition-colors duration-200">
                    {galleryImages && galleryImages.length > 0 ? (
                      <span className="text-amber-400">
                        {galleryImages.length} photos selected ✓
                      </span>
                    ) : (
                      "Drag & drop or select photos"
                    )}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    <span className="text-amber-400/80 font-medium">
                      Click to browse files
                    </span>{" "}
                    · JPG, PNG, WEBP
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/webp"
                  multiple
                  onChange={(e) => setGalleryImages(e.target.files)}
                  className="sr-only"
                />
              </label>
            </div>

            <div className="w-full h-px bg-linear-to-r from-transparent via-stone-700/60 to-transparent"></div>

            <div>
              <label className="flex items-center gap-2 text-xs md:text-sm font-bold text-stone-200 mb-1 uppercase tracking-wider">
                <span className="w-6 h-6 rounded-md bg-amber-500/15 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </span>
                2. Travel Route
                <span
                  className="text-amber-400 ml-0.5"
                  title="At least 1 destination required"
                >
                  *
                </span>
              </label>
              <p className="text-[11px] md:text-xs text-stone-500 mb-4 md:mb-5 ml-0.5">
                Add the destinations you want to explore and attach your
                memories.
              </p>

              <div className="bg-stone-900/20 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-stone-700/40 shadow-inner shadow-black/20">
                <div className="mb-4 md:mb-5">
                  <label className="block text-[10px] md:text-xs font-semibold text-stone-400 mb-1.5 md:mb-2 uppercase tracking-wider">
                    City / Country Name{" "}
                    <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Amsterdam, Netherlands, Venice"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    className="w-full bg-stone-900/80 border border-stone-700/60 rounded-xl p-3 md:p-4 text-sm md:text-base text-white placeholder-stone-600 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/20 transition-all"
                  />
                </div>

                <div className="mb-4 md:mb-5">
                  <label className="block text-[10px] md:text-xs font-semibold text-stone-400 mb-1.5 md:mb-2 uppercase tracking-wider">
                    Your Story for this Location (Optional)
                  </label>
                  <textarea
                    spellCheck={false}
                    placeholder="As the winter sun illuminated the streets..."
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    maxLength={300}
                    rows={2}
                    className="w-full bg-stone-900/80 border border-stone-700/60 rounded-xl p-3 md:p-4 text-sm md:text-base text-white placeholder-stone-600 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/20 transition-all resize-none"
                  />
                  <div
                    className={`text-right text-[10px] md:text-xs mt-1 md:mt-2 font-medium transition-colors ${noteInput.length > 250 ? "text-amber-400/70" : "text-stone-500"}`}
                  >
                    {noteInput.length}/300
                  </div>
                </div>

                <div className="mb-4 md:mb-5">
                  <label className="block text-[10px] md:text-xs font-semibold text-stone-400 mb-1.5 md:mb-2 uppercase tracking-wider">
                    City Memories (Optional - First 3 shown on map)
                  </label>
                  <input
                    ref={cityImagesInputRef}
                    type="file"
                    accept="image/jpeg, image/png, image/webp"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        const newFiles = Array.from(e.target.files);
                        setCityImages((prev) => {
                          const updated = [...prev, ...newFiles];

                          const dt = new DataTransfer();
                          updated.forEach((file) => dt.items.add(file));
                          if (cityImagesInputRef.current) {
                            cityImagesInputRef.current.files = dt.files;
                          }
                          return updated;
                        });
                      }
                    }}
                    className="w-full bg-stone-900/80 border border-stone-700/60 rounded-xl p-3 text-xs text-stone-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500/10 file:text-amber-400 hover:file:bg-amber-500/20 transition-all cursor-pointer"
                  />
                  {cityImages.length > 0 && (
                    <div className="mt-3 flex items-center gap-2 px-1 text-[11px] text-amber-400/80 font-medium italic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Cover photos will appear on the map above the cities.
                      Click an image to set it as a cover.
                    </div>
                  )}
                  {/* YENİ: Cover Photo Grid */}
                  {cityImages.length > 0 && (
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                      {cityImages.map((file, idx) => (
                        <ImageThumbnail
                          key={`${file.name}-${idx}`}
                          file={file}
                          isCover={idx < 3}
                          onMakeCover={() => handleMakeCover(idx)}
                          onRemove={() => handleRemoveImage(idx)}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2 w-full">
                  {editingIndex !== null && (
                    <button
                      onClick={handleCancelEdit}
                      className="px-4 py-3 md:py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-sm md:text-base font-semibold transition-all border border-stone-700 hover:border-stone-500"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    onClick={handleAddCity}
                    className={`flex-1 py-3 md:py-3.5 rounded-xl text-sm md:text-base font-semibold transition-all flex items-center justify-center gap-2 border ${
                      editingIndex !== null
                        ? "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 border-blue-500/25 hover:border-blue-400/50 hover:shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]"
                        : "bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border-amber-500/25 hover:border-amber-400/50 hover:shadow-[0_0_20px_-8px_rgba(245,158,11,0.4)]"
                    }`}
                  >
                    {editingIndex !== null ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-4.5 md:w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Update Route
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-4.5 md:w-4.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Add to Route
                      </>
                    )}
                  </button>
                </div>
              </div>

              {cities.length > 0 && (
                <div className="mt-4 md:mt-6 flex flex-col gap-2 md:gap-3">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      onClick={() => handleEditCity(index)}
                      className={`p-4 md:p-5 rounded-xl md:rounded-2xl border relative overflow-hidden group transition-all duration-200 hover:shadow-[0_2px_20px_-8px_rgba(0,0,0,0.5)] cursor-pointer ${
                        editingIndex === index
                          ? "bg-blue-900/20 border-blue-500/50"
                          : "bg-stone-900/60 border-stone-700/50 hover:border-stone-600/60"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${
                          editingIndex === index
                            ? "bg-linear-to-b from-blue-400 to-indigo-500"
                            : "bg-linear-to-b from-amber-300 to-orange-500"
                        }`}
                      ></div>
                      <div className="flex items-start gap-3 ml-2">
                        <span
                          className={`mt-0.5 shrink-0 px-2.5 py-1 rounded-md flex items-center justify-center text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-colors border ${
                            editingIndex === index
                              ? "bg-rose-500/15 text-rose-400 border-rose-500/30 shadow-[0_0_10px_-2px_rgba(244,63,94,0.4)]"
                              : "bg-stone-800 text-stone-400 border-stone-700 group-hover:bg-amber-500/10 group-hover:text-amber-400 group-hover:border-amber-500/30"
                          }`}
                        >
                          {editingIndex === index ? "Editing" : "Edit"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-white text-sm md:text-base leading-snug">
                              {city.isim}
                            </h3>
                            {city.images && city.images.length > 0 && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-2.5 h-2.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {city.images.length}{" "}
                                {city.images.length === 1 ? "photo" : "photos"}
                              </span>
                            )}
                          </div>
                          {city.not && (
                            <p className="text-xs md:text-sm text-stone-400 mt-1.5 leading-relaxed">
                              {city.not}
                            </p>
                          )}
                          {city.images && city.images.length > 0 && (
                            <div className="mt-3 flex gap-1.5 md:gap-2">
                              {city.images.slice(0, 6).map((file, imgIdx) => (
                                <div
                                  key={`mini-${imgIdx}`}
                                  className="relative"
                                >
                                  <MiniThumbnail
                                    file={file}
                                    isCover={imgIdx < 3}
                                  />
                                  {/* 6. resimdeysek ve daha fazlası varsa, üzerine karartma ve +X yazısı atıyoruz */}
                                  {imgIdx === 5 && city.images.length > 6 && (
                                    <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-[2px] rounded-md flex items-center justify-center text-amber-400 text-[10px] md:text-xs font-black z-10 border border-amber-500/30">
                                      +{city.images.length - 5}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg transition-all flex items-center justify-center tracking-wide uppercase ${
                isGenerating
                  ? "bg-stone-800 text-stone-500 cursor-not-allowed"
                  : "bg-linear-to-r from-amber-500 to-orange-500 text-stone-950 hover:from-amber-400 hover:to-orange-400 shadow-[0_0_30px_-10px_rgba(245,158,11,0.6)] md:shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_50px_-10px_rgba(251,146,60,0.7)] hover:-translate-y-0.5"
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center gap-2 md:gap-3">
                  <svg
                    className="animate-spin h-5 w-5 md:h-6 md:w-6 text-stone-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Compiling...
                </span>
              ) : (
                <span
                  className={`text-sm md:text-lg flex items-center gap-2.5 font-bold`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                  Compile Capsule
                </span>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
