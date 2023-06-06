import React from "react";
import Image from "next/image";

interface props {
  children: JSX.Element;
}

const Auth: React.FC<props> = ({ children }) => {
  return (
    <div className="flex justify-center lg:justify-left gap-4 h-screen bg-white">
      <div className="relative min-h-[100vh] lg:basis-8/12 xl:basis-9/12">
        <Image
          src="/auth-background.jpg"
          layout="fill"
          className="!h-auto !relative !min-h-full !max-h-fit"
        />
      </div>
      <div className="overflow-auto w-10/12 sm:w-8/12 md:w-6/12 lg:basis-4/12 xl:basis-3/12 px-8 py-16 auth">
        {children}
      </div>
    </div>
  );
};

export default Auth;
