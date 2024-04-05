import React from "react";

import Footer from "../components/Footer";
// import Analytics from "../components/Analytics";
import Features from "../components/Features";
import Header from "../components/Header";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Product from "../components/Product";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <MainHero />
      <Product />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
