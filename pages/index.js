import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Fetching products from API:", process.env.NEXT_PUBLIC_API_URL + "/api/products");
    
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then(response => {
        console.log("API Response:", response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center">
      <header className="bg-blue-600 text-white py-6 w-full text-center text-3xl font-bold shadow-md">
        Reliable Silver Corporation Technologies
      </header>
      <main className="container mx-auto py-10 px-4 w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">Our Products</h2>

        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Loading products...</p>
          )}
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-10 w-full">
        &copy; 2025 RSCT - Reliable Silver Corporation Technologies
      </footer>
    </div>
  );
}
