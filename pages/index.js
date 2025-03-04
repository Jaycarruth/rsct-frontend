import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
const [products, setProducts] = useState([]);
const [error, setError] = useState("");

useEffect(() => {
axios.get(${process.env.NEXT_PUBLIC_API_URL}/api/products)
.then(response => setProducts(response.data))
.catch(error => setError("Failed to load products."));
}, []);

return (


Reliable Silver Corporation Technologies


Our Products
    {error && <p className="text-center text-red-500">{error}</p>}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
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
  <footer className="bg-gray-800 text-white text-center py-4 mt-10">
    &copy; 2025 RSCT - Reliable Silver Corporation Technologies
  </footer>
</div>
);
}