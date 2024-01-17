import React from "react";

import { useLoaderData } from "react-router-dom";
import { GoClock } from "react-icons/go";
import Time from "../../componat/Time";
import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";
import { CiSaveDown1, CiShoppingCart } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";

const HeadingSection = () => {
  const data = useLoaderData();

  const {
    strMeal,
    dishType,
    strMealThumb,
    strIngredients,
    strInstructions,
    author,
    rating
  } = data;

  console.log(data);

  return (
    <section className="w-2/3 mx-auto grid grid-cols-3 mt-[60px] align-middle items-center gap-9">
      {/* img */}
      <div className="col-span-1">
        <img className="rounded-lg" src={strMealThumb} alt="" />
      </div>

      {/* header  */}
      <div className="col-span-2 flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">{strMeal}</h1>
          <h1 className="text-xl w-9/12 text-gray-600">{strInstructions}</h1>
        </div>
        <Time></Time>
        <hr />
        <div className="flex justify-between">
          <div className="">
            <h1>
              created by <span className="text-primary-color">{author}</span>
            </h1>
            <div className="flex items-center gap-2">
              <GoStarFill className="text-yellow-500"></GoStarFill>
              <h1>{rating}</h1>
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <button>
              <CiSaveDown1></CiSaveDown1>
            </button>
            <button>
              <CiShoppingCart></CiShoppingCart>
            </button>
            <button>
              <BsPrinter></BsPrinter>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
