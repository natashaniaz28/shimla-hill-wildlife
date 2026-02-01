import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] w-full">
        <Image
          src="/images/shimla-hill/hero.jpg"
          alt="Shimla Hill Wildlife Park, Abbottabad"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Shimla Hill Wildlife Park
            </h1>
            <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">
              An initiative of the Wildlife Department, Khyber Pakhtunkhwa,
              dedicated to wildlife conservation, public education,
              ecotourism, and rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-900 mb-6">
            Welcome to Shimla Hill
          </h2>

          <div className="w-20 h-1 bg-green-700 mx-auto mb-8" />

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Located in Abbottabad, Shimla Hill Wildlife Park serves as an
            important center for the protection and conservation of wildlife.
            The park provides a natural and safe environment for various animal
            and bird species while promoting awareness of biodiversity and
            environmental responsibility among the public.
          </p>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-green-900 text-center mb-14">
            Our Mission
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                title: "Education",
                text: "Raising public awareness about wildlife, ecosystems, and biodiversity conservation.",
              },
              {
                title: "Recreation",
                text: "Providing a peaceful and educational recreational environment for visitors.",
              },
              {
                title: "Ecotourism",
                text: "Promoting responsible tourism that supports conservation efforts.",
              },
              {
                title: "Rehabilitation",
                text: "Rescuing, caring for, and rehabilitating injured and displaced wildlife.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEPARTMENT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              Wildlife Department Khyber Pakhtunkhwa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Wildlife Department Khyber Pakhtunkhwa is committed to the
              protection, conservation, and effective management of wildlife
              and biodiversity through scientific management, public awareness,
              and sustainable stewardship throughout the province.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Shimla Hill Wildlife Park plays a key role in achieving these
              objectives by serving as a center for conservation, education,
              and public engagement.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-72 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/shimla-hill/overview.jpg"
              alt="Wildlife Department Khyber Pakhtunkhwa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
