import React from "react";

interface props {
  children: JSX.Element;
}

const Auth: React.FC<props> = ({ children }) => {
  return (
    <div className="p-6 grid grid-cols-7 gap-4 h-screen bg-primary-50">
      <div className="bg-secondary-3 col-span-3 rounded-lg"></div>
      <div className="overflow-auto col-span-4 px-16 py-16 auth">
        {children}
      </div>
    </div>
  );
};

export default Auth;
