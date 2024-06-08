import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="breadcrumb-wrap relative pb-24 pt-24 lg:pt-36 mb-80 bg-cover bg-bottom"
        // style='background-image: url("https://bonx-react.pages.dev//static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp");'
        style={{ backgroundImage: 'url("https://bonx-react.pages.dev//static/breadcrumbs-bg-aead09dfeb2feab4bfcb4b524bd0b9a5.webp")' }}
      >
        <div className=" text-center mt-12 transform">
          <span className="breadcrumb__title">About Us</span>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb__list">
              <li className="breadcrumb__list__item">
                <a className="breadcrumb__link" href="/">
                  Home
                </a>
              </li>
              <span className="breadcrumb__separator" aria-hidden="true">
                {" "}
                /{" "}
              </span>
              <li className="breadcrumb__list__item">
                <a
                  aria-current="page"
                  className="breadcrumb__link"
                  href="/about-us"
                >
                  about-us
                </a>
              </li>
            </ol>
          </nav>
          <span className="hidden breadcrumb__title breadcrumb__list breadcrumb__separator breadcrumb__list__item breadcrumb__link__active"></span>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
