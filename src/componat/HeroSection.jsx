import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="w-2/3 p-[80px] mx-auto grid grid-cols-2 bg-Hero-Img rounded-xl bg-cover text-white mt-[40px]">
      <div className="col-span-1 flex flex-col gap-6">
        <h1 className="text-5xl font-semibold">Choose from thousands of recipes</h1>
        <h1>
          Appropriately integrate technically sound value with scalable
          infomediaries negotiate sustainable strategic theme areas
        </h1>
        <button className="w-fit flex justify-center items-center align-middle gap-3 group font-semibold">sign up today <IoIosArrowRoundForward className="group-hover:translate-x-3 duration-150 ease-in text-2xl"></IoIosArrowRoundForward></button>
      </div>
    </div>
  );
};

export default HeroSection;
