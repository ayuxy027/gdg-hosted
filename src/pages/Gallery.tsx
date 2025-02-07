'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GallerySection as GallerySectionType, gallerySections } from '../lib/gallary-data'
import GalleryModal from '../components/Gallery-model'


export default function Gallery() {
  const [selectedSection, setSelectedSection] = useState<GallerySectionType | null>(null)

  return (
    <div className="pt-16">
      <section className="py-20 bg-blue-600">
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold">Gallery</h1>
          <p className="max-w-3xl mx-auto text-xl">A glimpse into our events and community moments, highlighting the energy and collaboration around Google technologies.</p>
        </div>
      </section>
      <div className="grid px-6 py-20 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {gallerySections.map((section) => (
          <GallerySection
            key={section.id}
            section={section}
            onClick={() => setSelectedSection(section)}
          />
        ))}
      </div>
      {selectedSection && (
        <GalleryModal
          section={selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  )
}

function GallerySection({ section, onClick }: { section: GallerySectionType; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={section.coverImage}
        alt={section.title}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </div>
    </motion.div>
  )
}

