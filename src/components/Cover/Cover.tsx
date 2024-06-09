import React from "react";

// Import Open Sans font
import { Metal_Mania } from "next/font/google";

// Configure font object
const bodoniModa = Metal_Mania({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Cover = ({ title, title2 }: any) => {
  return (
    <div>
      <section
        className=" relative pb-24 pt-24 lg:pt-36 mb-40 bg-cover bg-bottom "
        style={{
          backgroundImage:
            'url("https://bonx-react.pages.dev//static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")',
        }}
      >
        <div className=" text-center mt-12 transform">
          <span
            className={` text-5xl ${bodoniModa.className}`}
            style={{ textShadow: "3px 3px #b154f0" }}
          >
            {title}
          </span>
          <nav className="font-bold text-xl capitalize" aria-label="Breadcrumb">
            <ol className="flex justify-center gap-2">
              <li className="">
                <a className={`breadcrumb__link `} href="/">
                  Home
                </a>
              </li>
              <span className="breadcrumb__separator" aria-hidden="true">
                {" "}
                /{" "}
              </span>
              <li className="">
                <a
                  aria-current="page"
                  className="breadcrumb__link"
                  href="/about-us"
                >
                  {title2}
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Cover;
