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
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 bg-blue-600 sm:py-16">
        <div className="container px-4 mx-auto max-w-7xl text-center text-white">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Our Gallery
          </h1>
          <p className="mx-auto max-w-3xl text-lg font-medium text-blue-100 sm:text-xl md:text-2xl">
            A glimpse into our events and community moments, highlighting the energy
            and collaboration around Google technologies.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallerySections.map((section) => (
              <GallerySection
                key={section.id}
                section={section}
                onClick={() => setSelectedSection(section)}
              />
            ))}
          </div>
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
        <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
          {section.title}
        </h3>
        <p className="text-base text-gray-600 sm:text-lg line-clamp-2">
          {section.description}
        </p>
      </div>
    </motion.div>
  );
}
