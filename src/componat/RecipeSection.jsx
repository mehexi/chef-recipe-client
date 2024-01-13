import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import MealCard from "./MealCard";
import { faL } from "@fortawesome/free-solid-svg-icons";
import PageSelector from "./PageSelector";
import VideoSection from "../pages/HomePage/VideoSection";

const RecipeSection = ({ catagoryName }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  const filterdMeals = meals.filter(
    (meal) =>
      meal.strCategory === catagoryName || meal.dishType === catagoryName
  );
  // console.log(filterdMeals)

  const [activeSort, setSort] = useState(false)
  const [title, setTitle] = useState(['latest'])
  
  const handleTitle = (e) => {
    setTitle(e)
  }

  const handelSortBy = () => {
      setSort(!activeSort)
  }
  
 

  return (
    <>
      <div className="flex justify-between">
        <label className="w-9/12 relative " htmlFor="">
          <input
            className="px-[50px] outline-none py-3 w-full bg-gray-100 rounded "
            type="text"
            placeholder="search for recipe"
          />
          <CiSearch className="text-2xl absolute left-3 top-1/2 transform -translate-y-1/2"></CiSearch>
        </label>
        <label className="relative">
        <button onClick={handelSortBy} className="px-6 h-full bg-primary-color rounded-full text-white  font-semibold flex gap-3 items-center ">
          sort by : {title} <IoIosArrowDown className={`duration-200 ${activeSort?'rotate-180':'rotate-0'}`}></IoIosArrowDown>{" "}
        </button>
        <div className={`absolute left-0 bg-gray-100 z-10 w-full flex flex-col gap-3 px-6 py-3 top-14 rounded duration-150 origin-top transform ease-in-out ${activeSort?'scale-y-100':'scale-y-0'}`}>
          <h1 onClick={()=>{handleTitle('latest')}} className="hover:text-primary-color">latest</h1>
          <h1 onClick={()=>{handleTitle('Most Popular')}} className="hover:text-primary-color">Most popular</h1>
          <h1 onClick={()=>{handleTitle('Favorite')}} className="hover:text-primary-color">Favorite</h1>
          </div>
          </label>
      </div>
      <div className="grid grid-cols-3 gap-9 mt-6">
        {/* map through the meal array and display each meal */}
        {catagoryName
          ? filterdMeals.map((item) => (
              <>
                <MealCard key={item.idMeal} data={item}></MealCard>
              </>
            ))
          : meals.map((item) => (
              <MealCard key={item.idMeal} data={item}></MealCard>
            ))}
      </div>
      <PageSelector></PageSelector>
     
    </>
  );
};

export default RecipeSection;
