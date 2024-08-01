import React, { useState } from "react";

const Login = ({ onShowRegister }) => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    if (!fullName || !password) {
      setError("Please fill in both fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log("Logged in with:", fullName, password);
  };

  return (
    <>
      <h2 className="text-3xl text-center font-semibold mb-4">Login</h2>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
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
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <p className="mt-4 text-sm text-center">
        New user?{" "}
        <span className="underline cursor-pointer" onClick={onShowRegister}>
          Create an account here
        </span>{" "}
      </p>
    </>
  );
};

export default Login;
