import React from "react";
import { Metal_Mania } from "next/font/google";

// Configure font object
const bodoniModa = Metal_Mania({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const HeroSection = () => {
  return (
    <div>
      <section
        className=" relative pb-24 pt-24 lg:pt-36 mb-40 bg-cover bg-bottom "
        style={{
          backgroundImage:
            'url("https://bonx-react.pages.dev//static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")',
        }}
      >
        <nav
          className="font-bold text-2xl capitalize mt-12"
          aria-label="Breadcrumb"
        >
          <ol className="flex justify-center gap-2">
            <li className="text-2xl ">Let's Start</li>
          </ol>
        </nav>
        <div className=" text-center  transform">
          <span
            className={` text-5xl ${bodoniModa.className}`}
            style={{ textShadow: "3px 3px #b154f0" }}
          >
            we'll create the future
          </span>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
