import React from "react";
import { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { food } from "./Fooditems";
import Carousel from "./Carousel";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Cart from "./Cart";
import Instructions from "./Instructions";
import RoomNumber from "./Room";
import Summary from "./Summary";
import Button from "./PlaceRequestBtn";

const HeaderTop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (term) => {
    setSearchTerm(term);
  };

  const filteredItems = food.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breakfastItems = filteredItems.filter(item => item.category === 'breakfast');
  const lunchtItems = filteredItems.filter(item => item.category === 'lunch');
  const dinnerItems = filteredItems.filter(item => item.category === 'dinner');

  return (
    <>
      <div className="flex flex-col items-center justify-start h-screen">
        <div className="relative  md:w-5 md:h-5 lg:w-1/6 lg:h-1/6 mt-4">
          <Image
            src="/Images/hilton.jpg"
            alt="My Image"
            layout="fill"
            objectFit="contain"
            className="w-full h-full"
          />
        </div>
        <p className="font-normal text-black text-2xl">Food & Beverages</p>
        <hr className="w-[1310px] h-[8px] font-bold border-none bg-blue-500" />
        <div className="mt-8 w-full">
          <SearchBar setSearchTerm={setSearchTerm}/>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="flex justify-between ml-10 ">
        <div>
          <Breakfast items={breakfastItems}/>
          <hr className="w-[879px] h-[12px] ml-0 mt-10 bg-gray-300 border-none" />
          <Lunch items={lunchtItems}/>
          <hr className="w-[879px] h-[12px] ml-0 mt-10 bg-gray-300 border-none" />
          <Dinner items={dinnerItems}/>
        </div>
        <div>
          <Cart />
          <Instructions />
          <RoomNumber />
          <Summary />
          <Button />
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
