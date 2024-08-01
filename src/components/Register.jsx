import React, { useState } from "react";

const Register = ({ onShowLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!fullName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log("Registered with:", fullName, email, password);
    // Logica di registrazione
  };

  return (
    <>
      <h2 className="text-3xl text-center font-semibold mb-4">Register</h2>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Password (min. 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <p className="mt-4 text-sm text-center">
        Already registered?{" "}
        <span className="underline cursor-pointer" onClick={onShowLogin}>
          Log in here
        </span>{" "}
      </p>
    </>
  );
};

export default Register;
