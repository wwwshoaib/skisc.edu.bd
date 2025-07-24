import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://i.postimg.cc/SxfSh3Hk/Whats-App-Image-2023-02-15-at-6-36-06-PM.jpg",
    text: "SKISC Campus!"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/SxfSh3Hk/Whats-App-Image-2023-02-15-at-6-36-06-PM.jpg",
    text: "SKISC Campus!"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/SxfSh3Hk/Whats-App-Image-2023-02-15-at-6-36-06-PM.jpg",
    text: "SKISC Campus!"
  }
];


export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // 8 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="overflow-hidden rounded-sm shadow-lg h-64 md:h-[400px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0 }}
          className="relative h-64  md:h-full"
        >
          <img
            src={slides[current].image}
            alt={slides[current].text}
            className="w-full h-full md:h-full"
          />

          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            {slides[current].text}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
