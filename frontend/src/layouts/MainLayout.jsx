import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;