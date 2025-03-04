import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="bg-blue-800 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Reliable Silver Corporation Technologies</h1>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/products" className="hover:text-gray-300">Products</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold">Innovative Materials for the Semiconductor Industry</h2>
          <p className="mt-4 text-lg">High-quality sputtering targets, rotatable targets, and plasma spray solutions.</p>
          <Link href="/products" className="mt-6 inline-block bg-blue-600 px-6 py-3 text-lg rounded-lg shadow hover:bg-blue-700">Explore Products</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Large Area Targets</h4>
            <p>Precision-engineered materials for high-performance applications.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Rotatable Targets</h4>
            <p>Enhanced efficiency and durability for semiconductor applications.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Plasma Spray Targets</h4>
            <p>Advanced solutions for thermal and plasma spray applications.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold">Get in Touch</h3>
        <p className="mt-4">Have questions? We’re here to help.</p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-600 px-6 py-3 text-lg rounded-lg shadow hover:bg-blue-700">Contact Us</Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 RSCT - Reliable Silver Corporation Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

