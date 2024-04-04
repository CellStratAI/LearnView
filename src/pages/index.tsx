import React from "react";

import About from "../components/About";
// import Analytics from "../components/Analytics";
import Features from "../components/Features";
import Header from "../components/Header";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Pricing from "../components/Pricing";
import Product from "../components/Product";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black grid gap-y-16 overflow-hidden">
      <div className={`relative bg-transaprent`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Product />
      <Features />
      <About />
    </div>
  );
};

export default App;
