import React from "react";

const MainHero = () => {
  return (
    <main className="bg-transparent mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-blue-100 font-bold block xl:inline">
            LearnView
          </span>
          <br />
          <span className={`text-4xl text-blue-600 `}>
            Learn everything with AI
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          LearnView is an Open Source project to solve for global Educational
          challenges with help of Generative AI and LLMs.
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          This project will have tools that facilitate learning and development
          for different kind of learners across learning domains.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href="#"
              className={`bg-blue-600 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text- bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
              Get started
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="https://github.com/CellStratAI/LearnView"
              className={`w-full flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}>
              Contribute
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
