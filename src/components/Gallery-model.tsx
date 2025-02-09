import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
}

interface GallerySection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  items: GalleryItem[];
}

interface GalleryModalProps {
  section: GallerySection;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ section, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < section.items.length - 1 ? prevIndex + 1 : 0,
    );
  }, [section.items.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : section.items.length - 1,
    );
  }, [section.items.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackTouch: true,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, onClose]);

  if (!section.items || section.items.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-4 bg-white rounded-lg">
          <p className="text-center">No items to display</p>
          <button
            onClick={onClose}
            className="mt-4 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="gallery-title"
      {...swipeHandlers}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <h2 id="gallery-title" className="text-2xl font-bold">
            {section.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <GalleryData item={section.items[currentIndex]} />
          <button
            onClick={handlePrevious}
            className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 mt-4 text-center">
          {currentIndex + 1} / {section.items.length}
        </div>
      </div>
    </div>
  );
};

interface GalleryDataProps {
  item: GalleryItem;
}

const GalleryData: React.FC<GalleryDataProps> = ({ item }) => (
  <div className="flex items-center justify-center w-full h-full overflow-hidden">
    {item.type === "image" ? (
      <img
        src={item.src}
        alt={item.alt}
        className="object-contain w-full h-full max-w-full max-h-full"
      />
    ) : (
      <video
        src={item.src}
        controls
        className="object-contain w-full h-full max-w-full max-h-full"
      >
        Your browser does not support the video tag.
      </video>
    )}
  </div>
);

export default GalleryModal;
