import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const RegisterPage = () => {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-xl">
        {showRegister ? (
          <Register onShowLogin={() => setShowRegister(false)} />
        ) : (
          <Login onShowRegister={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
