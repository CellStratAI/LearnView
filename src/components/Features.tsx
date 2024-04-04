import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";
const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className="py-12 bg-transparent" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-blue-900`}>
          {title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-blue-600" : "text-white"}>
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            {subtitle}
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-tertiary border-primary">
                    <img
                      className={`inline-block h-6 w-6`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-md font-small text-gray-100">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
