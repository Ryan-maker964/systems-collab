
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Connecting Government, Companies & Professionals
      </h1>
      <p className="text-center text-lg mb-6">
        Post real problems. Join real projects. Solve together.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
