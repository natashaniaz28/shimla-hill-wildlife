export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">
            Shimla Hill Wildlife Park
          </h3>
          <p>
            Managed by the Wildlife Department, Khyber Pakhtunkhwa, dedicated to
            the protection, conservation, and sustainable management of
            wildlife.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">
            Contact Information
          </h3>
          <p>Phone: (0992) 921323</p>
          <p>Email: abbottabadwildlife@gmail.com</p>
          <p>Location: Abbottabad, Khyber Pakhtunkhwa</p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900">
            Our Mission
          </h3>
          <p>Education</p>
          <p>Recreation</p>
          <p>Ecotourism</p>
          <p>Wildlife Rehabilitation</p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} Wildlife Department, Khyber Pakhtunkhwa. All Rights Reserved.
      </div>
    </footer>
  );
}
