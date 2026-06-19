import { useAuth } from "../../context/AuthContext";

function ProfilePage() {

  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        User Profile
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl">

        <p>
          Name:
          {user?.name || "Guest"}
        </p>

        <p>
          Email:
          {user?.email || "Not Logged In"}
        </p>

      </div>

    </div>
  );
}

export default ProfilePage;