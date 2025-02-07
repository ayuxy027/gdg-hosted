import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
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

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : section.items.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < section.items.length - 1 ? prevIndex + 1 : 0));
  };

  // Swipe Handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    trackTouch: true,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') handlePrevious();
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!section.items || section.items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-4 rounded-lg">
          <p className="text-center">No items to display</p>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 mt-4">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="gallery-title"
      {...swipeHandlers} // Add swipe handlers to the root element
    >
      <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] flex flex-col overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <h2 id="gallery-title" className="text-2xl font-bold">{section.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <GalleryData item={section.items[currentIndex]} />
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center mt-4 p-4">
          {currentIndex + 1} / {section.items.length}
        </div>
      </div>
    </div>
  );
};

interface GalleryDataProps {
  item: GalleryItem;
}

const GalleryData: React.FC<GalleryDataProps> = ({ item }) => {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain max-w-full max-h-full"
        />
      ) : item.type === 'video' ? (
        <video
          src={item.src}
          controls
          className="w-full h-full object-contain max-w-full max-h-full"
        >
          Your browser does not support the video tag.
        </video>
      ) : null}
    </div>
  );
};

export default GalleryModal;
