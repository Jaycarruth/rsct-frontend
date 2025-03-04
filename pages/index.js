export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white py-6 w-full text-center text-3xl font-bold shadow-md">
        Reliable Silver Corporation Technologies
      </header>
      <main className="container mx-auto py-10 px-4 w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">Welcome to RSCT</h2>
        <p className="text-gray-600">
          Providing high-quality materials and solutions for the semiconductor industry.
        </p>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4 mt-10 w-full">
        &copy; 2025 RSCT - Reliable Silver Corporation Technologies
      </footer>
    </div>
  );
}

