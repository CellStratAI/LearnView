import React from "react";
import Header from "./Header";

const MainHero = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <Header />
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl space-y-4">
          Learn anything
          <br />
          <span className="dark:text-blue-600"> with AI !</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          LearnView is an Open Source project to solve for global Educational
          challenges with help of Generative AI and LLMs.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-600 dark:text-gray-50">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded text-gray-100 border-gray-100">
            Contribute
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
