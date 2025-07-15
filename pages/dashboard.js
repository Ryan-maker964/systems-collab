
export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold">Project: Clean Water Access</h3>
          <p className="text-sm text-gray-600">Deadline: 31 Aug</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            View Details
          </button>
        </div>
      </section>
    </div>
  );
}
