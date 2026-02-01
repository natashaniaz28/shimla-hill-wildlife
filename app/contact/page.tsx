import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[45vh] w-full">
        <Image
          src="/images/shimla-hill/hero.jpg"
          alt="Shimla Hill Wildlife Park Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-semibold mb-2">
              Visit & Contact
            </h1>
            <p className="max-w-2xl text-gray-200">
              Plan your visit or reach out to Shimla Hill Wildlife Park.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-green-900 mb-6">
              Contact Information
            </h2>

            <div className="text-gray-700 leading-relaxed">
              <p><span className="font-semibold">Department:</span> Wildlife Department Khyber Pakhtunkhwa</p>
              <p><span className="font-semibold">Location:</span> Shimla Hill (Shimla Pahadi), Abbottabad, Pakistan</p>
              <p><span className="font-semibold">Phone:</span> (0992) 921323</p>
              <p><span className="font-semibold">Email:</span> abbottabadwildlife@gmail.com</p>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-green-900 mb-3">Visiting Guidelines</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Park open from 8:00 AM to 5:00 PM daily</li>
                <li>Guided tours available on request</li>
                <li>Please respect wildlife and maintain cleanliness</li>
                <li>Photography allowed in designated areas only</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Shimla Hill Wildlife Park Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4709.454256732719!2d73.19277065829048!3d34.158069555949396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de31e739baeb9f%3A0x99c0efcb7223f37a!2sShimla%20hills%20point!5e0!3m2!1sen!2s!4v1769968054683!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[450px]"
            />
          </div>

        </div>
      </section>
    </>
  );
}
