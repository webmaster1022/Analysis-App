import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-primary shadow-lg px-8 py-4 rounded">
      <a href="#">
        <div
          style={{
            width: "100%",
            height: "100px",
            marginBottom: "0.5rem",
            position: "relative",
          }}
        >
          <Image
            src={
              "https://image.similarpng.com/very-thumbnail/2022/01/Beautiful-red-bouquet-in-glass-vase-on-transparent-background-PNG.png"
            }
            alt="none"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </a>
      <div className="flex flex-col">
        <a href="#" className="text-sm mb-2 text-secondary-bold">
          Utilities for controlling
        </a>
        <span className="text-xs text-current text-secondary-medium">
          from $10.00
        </span>
        <div className="flex mt-4">
          <button className="border border-secondary-bold rounded-full px-1.5 py-0.5 text-secondary-bold text-xs">
            See options
          </button>
        </div>
      </div>
    </div>
  );
}
