import Image from "next/image";

export default function ConservationPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/images/shimla-hill/hero.jpg"
          alt="Wildlife Conservation at Shimla Hill"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-semibold mb-2">
              Conservation & Mission
            </h1>
            <p className="max-w-2xl text-gray-200">
              Protecting wildlife and preserving biodiversity for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">

          {/* Conservation */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              Wildlife Conservation
            </h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-8" />
            <p className="text-gray-700 leading-relaxed">
              Wildlife conservation is essential for maintaining ecological balance
              and protecting biodiversity. Shimla Hill Wildlife Park plays a vital
              role in conserving native and exotic species by providing a protected
              environment and promoting responsible wildlife management practices.
            </p>
          </div>

          {/* Mission Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Wildlife Department Khyber Pakhtunkhwa is committed to the
                protection, conservation, and effective management of wildlife
                and biodiversity through scientific management, public awareness,
                and sustainable stewardship throughout the province.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Shimla Hill Wildlife Park contributes to this mission by supporting
                conservation initiatives, facilitating research, and engaging
                communities through education and ecotourism.
              </p>
            </div>

            <div className="relative h-72 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/shimla-hill/overview.jpg"
                alt="Conservation efforts at Shimla Hill"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-green-50 rounded-lg p-10">
            <h3 className="text-2xl font-semibold text-green-900 mb-8 text-center">
              Key Objectives
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  title: "Protection",
                  text: "Safeguarding wildlife species and their natural habitats."
                },
                {
                  title: "Education",
                  text: "Raising public awareness about biodiversity and conservation."
                },
                {
                  title: "Ecotourism",
                  text: "Promoting sustainable tourism that supports conservation."
                },
                {
                  title: "Rehabilitation",
                  text: "Rescuing and rehabilitating injured and displaced wildlife."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h4 className="font-semibold text-green-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
