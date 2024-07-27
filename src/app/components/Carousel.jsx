"use client";
import React, { useState } from "react";
import { data } from "./JsonData";

const chunkArray = (arr, chunkSize) => {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const chunkedData = chunkArray(data, 9);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-[1280px] h-[200px] rounded-sm p-4 mt-10 bg-gray-100 flex flex-col items-center">
      <p className="mt-0 font-medium text-xl">Curations</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex overflow-hidden w-[900px] mx-4">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {chunkedData.map((chunk, index) => (
              <div key={index} className="flex">
                {chunk.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 flex flex-col items-center m-2"
                  >
                    <img
                      src={item.image}
                      alt={item.curation}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="text-center">{item.curation}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        {chunkedData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
