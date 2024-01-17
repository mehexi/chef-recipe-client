import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

const MealCard = ({ data }) => {
  // console.log(data)
  const {
    strCategory,
    strMealThumb,
    strIngredients,
    strInstructions,
    strMeal,
    rating,
    author,
    idMeal
  } = data;

  const [fev, setFev] = useState(true);

  const handleFev = (e) => {
    
    e.preventDefault()
    setFev(!fev);
  };

  // console.log(strCategory);

  return (
    <>
      <Link to={`/${idMeal}`}>
      <div
        onDoubleClick={handleFev}
        className="col-span-1 flex flex-col gap-3 group"
      >
        <div className="">
          <img
            className="rounded-lg duration-150 h-[200px] object-cover w-full group-hover:scale-105"
            src={strMealThumb}
            alt={`no img`}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-lg font-semibold">{strMeal}</h1>
            <div className="flex gap-2  align-middle items-center">
              <GoStarFill className="text-yellow-400"></GoStarFill>{" "}
              <h1 className="text-sm">({rating})</h1>
              <h1 className="">{author}</h1>
            </div>
          </div>
          <div className="z-10" onClick={handleFev}>
            {fev ? (
              <GoHeart className="text-2xl text-gray-300 hover:text-primary-color hover:scale-105"></GoHeart>
            ) : (
              <GoHeartFill className="text-2xl text-primary-color transition-transform scale-110 hover:scale-100"></GoHeartFill>
            )}
          </div>
        </div>
        </div>
        </Link>
    </>
  );
};

export default MealCard;
