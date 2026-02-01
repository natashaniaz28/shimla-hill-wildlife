"use client";

import { useState } from "react";
import Image from "next/image";
import AnimalModal from "./AnimalModal";
import { Animal } from "@/lib/type";

export default function AnimalCard({ animal }: { animal: Animal }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="relative h-48 w-full">
          <Image
            src={animal.images[0]}
            alt={animal.commonName}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-green-900 mb-1">
            {animal.commonName}
          </h3>

          <p className="text-sm italic text-gray-600 mb-2">
            {animal.scientificName}
          </p>

          <span className="inline-block text-xs px-3 py-1 rounded-full bg-green-100 text-green-800">
            {animal.category}
          </span>
        </div>
      </div>

      {open && (
        <AnimalModal
          animal={animal}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
