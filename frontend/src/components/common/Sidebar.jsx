function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h2 className="font-bold text-xl mb-4">
        Dashboard
      </h2>

      <ul className="space-y-3">
        <li>AI Chat</li>
        <li>Products</li>
        <li>Wishlist</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;