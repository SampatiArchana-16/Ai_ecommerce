import { useState } from "react";
import { login } from "../../api/authApi";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await login(
        email,
        password
      );

      localStorage.setItem(
        "token",
        response.access_token
      );

      alert("Login Successful");

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-2xl w-[400px]">

        <h1 className="text-3xl text-white font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          className="w-full p-3 mb-4 rounded-lg bg-slate-800 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginPage;