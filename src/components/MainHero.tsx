import React from "react";
import Header from "./Header";

const MainHero = () => {

  function handleClick(): void {
   window.location.href = 'https://github.com/CellStratAI/LearnView';
  }

  function scrollToProduct(): void {
    const productSection = document.getElementById("product");
    if (productSection) {
      window.scrollTo({
        top: productSection.offsetTop,
        behavior: "smooth"
      });
    }
  }

  return (
    <section className="max-w-screen-xl mx-auto">
      <Header />
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-white text-4xl font-bold sm:text-5xl space-y-4">
          Learn anything
          <br />
          <span className="text-blue-600"> with AI !</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg text-white">
          LearnView is an Open Source project to solve for global Educational
          challenges with help of Generative AI and LLMs.
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-600 text-gray-50"
            onClick={scrollToProduct} // Call scrollToProduct function on click
          >
            Get started
          </button>
          <button
            className="px-8 py-3 m-2 text-lg border rounded text-gray-100 border-gray-100"
            onClick={handleClick}
          >
            Contribute
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
