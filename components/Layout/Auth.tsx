import React from "react";
import Image from "next/image";

interface props {
  children: JSX.Element;
}

const Auth: React.FC<props> = ({ children }) => {
  return (
    <div className="flex gap-4 h-screen bg-white">
      <div className="relative basis-9/12">
        <Image src="/auth-background.jpg" layout="fill" className="h-full" />
      </div>
      <div className="overflow-auto basis-3/12 px-8 py-16 auth">{children}</div>
    </div>
  );
};

export default Auth;
