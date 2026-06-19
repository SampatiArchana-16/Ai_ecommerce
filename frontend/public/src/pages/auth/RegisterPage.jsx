import { useState } from "react";
import { register } from "../../api/authApi";

function RegisterPage() {

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const handleRegister = async () => {

    await register(
      name,
      email,
      password
    );

    alert("Registered Successfully");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <div className="bg-slate-900 p-8 rounded-2xl w-[400px]">

        <h1 className="text-3xl text-white mb-6">
          Register
        </h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
          className="w-full p-3 mb-4 bg-slate-800 text-white rounded-lg"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          className="w-full p-3 mb-4 bg-slate-800 text-white rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          className="w-full p-3 mb-4 bg-slate-800 text-white rounded-lg"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 py-3 rounded-lg"
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default RegisterPage;