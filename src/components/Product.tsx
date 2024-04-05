import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-transparent py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-blue-900`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-blue-600' : 'text-white'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <p className={`text-gray-300 m-10 text-justify md:m-0 `}>{product.subtitle}</p>
        <div className={`flex flex-wrap justify-center align-middle mt-10 `}>
          <div className={`w-5/6 sm:w-1/2 p-6 `}>
            {/* <h3 className={`text-3xl text-white font-bold leading-none mb-3`}>
              {firstItem?.title}
            </h3> */}
            <div className="text-white-300 m-auto">
              <ul className="list-disc">
                {(firstItem?.description as string[]).map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 `}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              // alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap justify-center align-middle mt-10 flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              // alt={secondItem?.title}
            />
          </div>
          <div className={`w-5/6 sm:w-1/2 p-6 m-auto`}>
            <div className={`align-middle`}>
              {/* <h3 className={`text-3xl text-white font-bold leading-none mb-3`}>
                {secondItem?.title}
              </h3> */}
              <div className="text-white-300 m-auto">
                <ul className="list-disc">
                  {(firstItem?.description as string[]).map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
