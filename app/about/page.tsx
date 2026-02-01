import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/images/shimla-hill/hero.jpg"
          alt="Shimla Hill Abbottabad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-semibold mb-2">
              About Shimla Hill
            </h1>
            <p className="max-w-2xl text-gray-200">
              A center for wildlife conservation, education, and public awareness
              in Abbottabad.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-14">

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              Overview
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-8" />
            <p className="text-gray-700 leading-relaxed">
              Shimla Hill Wildlife Park is located in Abbottabad, Khyber Pakhtunkhwa,
              and serves as an important site for the protection and conservation
              of wildlife. The park provides a natural environment for a wide range
              of animal and bird species while offering educational and recreational
              opportunities for the public.
            </p>
          </div>

          {/* Ecology & Importance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Ecological Importance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shimla Hill lies within a biologically rich region of the lower
                Himalayan foothills. The area supports diverse flora and fauna,
                making it an important habitat for birds, mammals, and other
                wildlife species.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Protecting such ecosystems is essential for maintaining biodiversity
                and ecological balance within the province.
              </p>
            </div>

            <div className="relative h-72 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/shimla-hill/overview.jpg"
                alt="Shimla Hill Ecology"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Department Role */}
          <div className="bg-green-50 rounded-lg p-10">
            <h3 className="text-2xl font-semibold text-green-900 mb-4 text-center">
              Role of Wildlife Department Khyber Pakhtunkhwa
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              The Wildlife Department Khyber Pakhtunkhwa is committed to the
              protection, conservation, and effective management of wildlife
              and biodiversity through scientific management, public awareness,
              and sustainable stewardship. Shimla Hill Wildlife Park plays a
              vital role in achieving these objectives by supporting conservation,
              education, ecotourism, and rehabilitation initiatives.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
