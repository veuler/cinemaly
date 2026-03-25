const { useState, useEffect, useRef } = React;
const { motion, AnimatePresence } = window.Motion;

const CapsuleApp = () => {
  const [appStage, setStage] = useState("dropzone");
  const [gallery, setGallery] = useState([]);
  const [routeData, setRouteData] = useState(null);

  const [selectedImg, setSelectedImg] = useState(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  const mapRef = useRef(null);
  const chapterRefs = useRef([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const processCapsuleFile = async (file) => {
    setStage("unzipping");
    try {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      const markerStr = "___MLX_ZIP_START___";
      const marker = [];
      for (let i = 0; i < markerStr.length; i++)
        marker.push(markerStr.charCodeAt(i));

      let zipStart = -1;
      for (let i = uint8Array.length - marker.length; i >= 0; i--) {
        let match = true;
        for (let j = 0; j < marker.length; j++) {
          if (uint8Array[i + j] !== marker[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          zipStart = i + marker.length;
          break;
        }
      }
      if (zipStart === -1)
        throw new Error("Capsule data not found or corrupted.");

      const cleanZipBuffer = uint8Array.slice(zipStart);
      const decompressed = fflate.unzipSync(cleanZipBuffer);

      const tempGallery = [];
      let tempRoute = null;

      for (const filename in decompressed) {
        const fileData = decompressed[filename];
        if (filename === "rota.json") {
          const jsonText = new TextDecoder("utf-8").decode(fileData);
          tempRoute = JSON.parse(jsonText).rotalar;
        }
        if (filename.startsWith("galeri/") && filename.endsWith(".jpg")) {
          tempGallery.push(
            URL.createObjectURL(new Blob([fileData], { type: "image/jpeg" })),
          );
        }
      }

      if (tempRoute) {
        tempRoute.forEach((city) => {
          city.imageUrls = [];
          if (city.imagePaths) {
            city.imagePaths.forEach((path) => {
              if (decompressed[path]) {
                const blobUrl = URL.createObjectURL(
                  new Blob([decompressed[path]], { type: "image/jpeg" }),
                );
                city.imageUrls.push(blobUrl);
              }
            });
          }
        });
      }

      setRouteData(tempRoute);
      setGallery(tempGallery);
      setStage("reveal");
    } catch (err) {
      alert("Error: " + err.message);
      setStage("dropzone");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processCapsuleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      processCapsuleFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  useEffect(() => {
    if (appStage === "reveal" && routeData && routeData.length > 0) {
      const isMobileDevice = window.innerWidth <= 768;

      const map = new window.maplibregl.Map({
        container: "map-background",
        style:
          "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: routeData[0].koordinat,
        zoom: isMobileDevice ? 9 : 10,
        pitch: 0,
        bearing: 0,
        interactive: false,
        attributionControl: false,
      });
      mapRef.current = map;

      routeData.forEach((city, index) => {
        const el = document.createElement("div");
        el.className = "map-city-label active";

        if (city.imageUrls && city.imageUrls.length > 0) {
          const imgWrapper = document.createElement("div");
          imgWrapper.className = "city-map-images";

          city.imageUrls.slice(0, 3).forEach((url, i) => {
            const photoDiv = document.createElement("div");
            photoDiv.className = `arch-photo arch-image-${i}`;
            photoDiv.style.backgroundImage = `url("${url}")`;

            const openLightbox = (e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedImg(url);
            };

            photoDiv.addEventListener("click", openLightbox);
            photoDiv.addEventListener("touchstart", openLightbox);

            imgWrapper.appendChild(photoDiv);
          });
          el.appendChild(imgWrapper);
        }

        const dot = document.createElement("div");
        dot.className = "neon-dot";
        el.appendChild(dot);

        const nameSpan = document.createElement("span");
        nameSpan.className = "city-map-name";
        nameSpan.innerText = city.isim;
        el.appendChild(nameSpan);

        new window.maplibregl.Marker({ element: el })
          .setLngLat(city.koordinat)
          .addTo(map);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cityIndex = entry.target.getAttribute("data-index");
              const targetCity = routeData[cityIndex];

              mapRef.current.flyTo({
                center: targetCity.koordinat,
                zoom: isMobileDevice ? 11.5 : 13,
                pitch: isMobileDevice ? 50 : 70,
                bearing: -10,
                speed: 0.35,
                curve: 2.5,
                essential: true,
              });

              document
                .querySelectorAll(".chapter")
                .forEach((el) => el.classList.remove("active"));
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.6 },
      );

      chapterRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
      return () => observer.disconnect();
    }
  }, [appStage, routeData]);

  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  useEffect(() => {
    if (selectedImg) {
      const preventScroll = (e) => {
        e.preventDefault();
      };

      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("wheel", preventScroll, { passive: false });

      return () => {
        window.removeEventListener("touchmove", preventScroll);
        window.removeEventListener("wheel", preventScroll);
      };
    }
  }, [selectedImg]);
  useEffect(() => {
    if (appStage === "reveal") {
      const imgObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "100px" },
      );

      document
        .querySelectorAll(".lazy-reveal")
        .forEach((img) => imgObserver.observe(img));

      const galleryEl = document.querySelector(".gallery-section");
      const mapHider = new IntersectionObserver(
        (entries) => {
          const mapDiv = document.getElementById("map-background");
          if (mapDiv) {
            mapDiv.style.opacity = entries[0].isIntersecting ? "0" : "1";
            mapDiv.style.transition = "opacity 0.6s ease";
            mapDiv.style.pointerEvents = entries[0].isIntersecting
              ? "none"
              : "auto";
          }
        },
        {
          rootMargin: "0px 0px -80% 0px",
        },
      );

      if (galleryEl) mapHider.observe(galleryEl);

      return () => {
        imgObserver.disconnect();
        if (galleryEl) mapHider.disconnect();
      };
    }
  }, [appStage, gallery, routeData]); // Resimler render olduktan sonra çalışması için dependecy'ler
  const totalLocations = routeData ? routeData.length : 0;
  const totalPhotos =
    (gallery ? gallery.length : 0) +
    (routeData
      ? routeData.reduce(
          (acc, city) => acc + (city.imageUrls ? city.imageUrls.length : 0),
          0,
        )
      : 0);

  return (
    <div
      className="app-wrapper"
      onDragOver={(e) => e.preventDefault()}
      onDrop={appStage === "dropzone" ? handleDrop : (e) => e.preventDefault()}
    >
      <AnimatePresence>
        {appStage === "dropzone" && (
          <motion.label
            className="dropzone"
            style={{ cursor: "pointer" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -1000 }}
          >
            <input
              type="file"
              accept=".html"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />

            <motion.div style={{ textAlign: "center" }}>
              <motion.h1
                animate={{
                  textShadow: [
                    "0px 0px 0px #10b981",
                    "0px 0px 20px #10b981",
                    "0px 0px 0px #10b981",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isMobile ? "TAP TO SELECT CAPSULE" : "DROP OR CLICK TO UNLOCK"}
                <br />
                <span
                  style={{
                    color: "#10b981",
                    fontSize: "0.5em",
                    letterSpacing: "1px",
                    textShadow: "none",
                  }}
                >
                  (Select this downloaded file)
                </span>
              </motion.h1>
            </motion.div>
          </motion.label>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(5, 5, 5, 0.95)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.img
              src={selectedImg}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "8px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.5), 0 0 40px rgba(16,185,129,0.2)",
                objectFit: "contain",
                cursor: "default",
              }}
            />
            <button
              onClick={() => setSelectedImg(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "white",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {appStage === "unzipping" && (
        <div className="dropzone">
          <h1 style={{ color: "orange" }}>DECRYPTING CAPSULE...</h1>
        </div>
      )}

      {appStage === "reveal" && (
        <>
          <div id="map-background"></div>
          <div className="scrolly-container">
            <div className="chapters-wrapper">
              {routeData.map((city, index) => (
                <div
                  key={index}
                  className="chapter"
                  data-index={index}
                  ref={(el) => (chapterRefs.current[index] = el)}
                >
                  <h2>{city.isim}</h2>
                  {city.not && city.not.trim() !== "" && <p>{city.not}</p>}
                </div>
              ))}
            </div>

            <div className="gallery-section">
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "8px", // Eskiden 40px'ti
                  marginTop: "-15px", // Hafif yukarı taşıdık
                  color: "#f59e0b",
                  textShadow: "0 0 15px rgba(16,185,129,0.5)",
                  letterSpacing: "4px",
                }}
              >
                MEMORIES
              </h2>

              <p
                style={{
                  textAlign: "center",
                  color: "#a8a29e", // Zarif gri (stone-400)
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "40px", // Ana boşluğu buraya verdik, tasarım bütünlüğü korundu
                  marginTop: "0",
                }}
              >
                {totalLocations} Locations{" "}
                <span style={{ color: "#f59e0b", margin: "0 8px" }}>•</span>{" "}
                {totalPhotos} Photos
              </p>

              {routeData.map((city, cityIndex) => {
                if (!city.imageUrls || city.imageUrls.length === 0) return null;
                return (
                  <div
                    key={`city-gallery-${cityIndex}`}
                    style={{ marginBottom: "15px" }}
                  >
                    <h3 className="gallery-category-title">{city.isim}</h3>
                    <div className="gallery-grid">
                      {city.imageUrls.map((url, idx) => (
                        <img
                          key={`city-${cityIndex}-img-${idx}`}
                          custom={idx}
                          src={url}
                          loading="lazy"
                          decoding="async"
                          className="gallery-item lazy-reveal"
                          alt="Memory"
                          onClick={() => setSelectedImg(url)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {gallery.length > 0 && (
                <div style={{ marginBottom: "15px" }}>
                  {routeData.some(
                    (c) => c.imageUrls && c.imageUrls.length > 0,
                  ) && <h3 className="gallery-category-title">OTHER</h3>}
                  <div className="gallery-grid">
                    {gallery.map((url, index) => (
                      <img
                        key={`general-img-${index}`}
                        src={url}
                        loading="lazy"
                        decoding="async"
                        className="gallery-item lazy-reveal"
                        alt="Memory"
                        onClick={() => setSelectedImg(url)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {!hasScrolled && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -100,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: 9999,
                  color: "#10b981",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  backgroundColor: "rgba(10, 10, 10, 0.85)",
                  backdropFilter: "blur(12px)",
                  padding: "20px 0 15px 0",
                  borderBottom: "1px solid rgba(16,185,129,0.25)",
                  boxShadow:
                    "0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(16,185,129,0.1)",
                  textShadow: "0 0 10px rgba(16,185,129,0.4)",
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? "20px" : "13px",
                    fontWeight: "900",
                    letterSpacing: "4px",
                    marginBottom: "8px",
                    textAlign: "center",
                  }}
                >
                  SLOWLY SCROLL TO EXPLORE
                </span>
                <motion.svg
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  width={isMobile ? "28" : "22"}
                  height={isMobile ? "28" : "22"}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CapsuleApp />);
