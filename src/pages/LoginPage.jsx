import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-xl">
        {showLogin ? (
          <Login onShowRegister={() => setShowLogin(false)} />
        ) : (
          <Register onShowLogin={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
