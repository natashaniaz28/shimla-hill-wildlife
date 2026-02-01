import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Shimla Hill Wildlife Park | KP Wildlife Department",
  description: "Official website of Shimla Hill Wildlife Park, Abbottabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <title>Shimla Hill Wildlife Park</title>
  <meta name="description" content="Official website of Shimla Hill Wildlife Park, Abbottabad - Wildlife Department Khyber Pakhtunkhwa" />
  
  {/* Favicon */}
  <link rel="icon" href="/logo.png" type="image/png" />

      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
