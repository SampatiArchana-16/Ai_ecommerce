function AdminPage() {

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          Total Users
          <h2 className="text-3xl">
            1250
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Products
          <h2 className="text-3xl">
            18500
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Searches
          <h2 className="text-3xl">
            45000
          </h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          Revenue
          <h2 className="text-3xl">
            ₹1.2L
          </h2>
        </div>

      </div>

    </div>
  );
}

export default AdminPage;