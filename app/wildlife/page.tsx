import animalsData from "@/data/animals.json";
import AnimalCard from "@/components/wildlife/AnimalCard";
import { Animal } from "@/lib/type";

export default function WildlifePage() {
  const animals = animalsData as Animal[];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-semibold text-green-900 mb-4">
            Wildlife Directory
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Explore the diverse bird species housed at Shimla Hill Wildlife Park.
            Click on any species to learn more about its habitat, breeding,
            and conservation status.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

      </div>
    </section>
  );
}
