import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + Department Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/kp-wildlife-logo.png"
            alt="KP Wildlife Department Logo"
            width={50}
            height={50}
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-medium">
              Wildlife Department
            </p>
            <p className="text-xs text-green-200">
              Khyber Pakhtunkhwa
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-300">
            About
          </Link>
          <Link href="/wildlife" className="hover:text-green-300">
            Wildlife
          </Link>
          <Link href="/conservation" className="hover:text-green-300">
            Conservation
          </Link>
          <Link href="/contact" className="hover:text-green-300">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
