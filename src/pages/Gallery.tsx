"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GallerySection as GallerySectionType,
  gallerySections,
} from "../lib/gallary-data";
import GalleryModal from "../components/Gallery-model";

export default function Gallery() {
  const [selectedSection, setSelectedSection] =
    useState<GallerySectionType | null>(null);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-500 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <motion.h1
            className="mb-3 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 sm:mb-4 sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-blue-100 sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A glimpse into our events and community moments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {gallerySections.map((section) => (
              <GallerySection
                key={section.id}
                section={section}
                onClick={() => setSelectedSection(section)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedSection && (
        <GalleryModal
          section={selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}

function GallerySection({
  section,
  onClick,
}: {
  section: GallerySectionType;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 cursor-pointer group hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={section.coverImage}
          alt={section.title}
          className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100" />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="mb-3 text-xl font-semibold text-gray-900 sm:text-2xl">
          {section.title}
        </h3>
        <p className="text-base text-gray-600 sm:text-lg line-clamp-2">
          {section.description}
        </p>
      </div>
    </motion.div>
  );
}
