import Image from "next/image";
import { Animal } from "@/lib/type";

interface Props {
  animal: Animal;
  onClose: () => void;
}


export default function AnimalModal({ animal, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl mx-4 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">

        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b">
          <div>
            <h2 className="text-2xl font-semibold text-green-900">
              {animal.commonName}
            </h2>
            <p className="italic text-gray-600">
              {animal.scientificName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Image */}
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={animal.images[0]}
              alt={animal.commonName}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>Category:</strong> {animal.category}
            </p>

            <p>
              <strong>Distribution:</strong> {animal.distribution}
            </p>

            {animal.habitat && (
              <p>
                <strong>Habitat:</strong> {animal.habitat}
              </p>
            )}

            {animal.breeding?.season && (
              <p>
                <strong>Breeding Season:</strong> {animal.breeding.season}
              </p>
            )}

            {animal.breeding?.incubationPeriod && (
              <p>
                <strong>Incubation Period:</strong>{" "}
                {animal.breeding.incubationPeriod}
              </p>
            )}

            {animal.breeding?.clutchSize && (
              <p>
                <strong>Clutch Size:</strong>{" "}
                {animal.breeding.clutchSize}
              </p>
            )}

            {animal.breeding?.gestationPeriod && (
              <p>
                <strong>Gestation Period:</strong>{" "}
                {animal.breeding.gestationPeriod}
              </p>
            )}

            <p>
              <strong>Conservation Status:</strong>{" "}
              {animal.conservationStatus.iucn}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="px-6 pb-8 text-gray-700 leading-relaxed">
          <h3 className="font-semibold text-green-900 mb-2">
            Introduction
          </h3>
          <p>{animal.introduction}</p>
        </div>

      </div>
    </div>
  );
}
