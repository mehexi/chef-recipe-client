import React, { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Category = ({ selectCatagoryName }) => {
  const [category, setCategory] = useState([]);
  const [dishtype, setDishtype] = useState(true);
  const [meatType, setMeatType] = useState(true);
  // const [active , setActive] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/catagory")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleToggle = () => {
    setDishtype(!dishtype);
    // setMeatType(false)
  };

  const handleMeat = () => {
    setMeatType(!meatType);
    // setDishtype(false);
  };

  

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Recipes</h1>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleToggle}
          className="font-semibold text-left flex justify-between items-center"
        >
          Dish Type {dishtype ? <FiPlus /> : <FiMinus />}
        </button>
        <div
          className={`flex flex-col duration-300 ease-in-out origin-top ${
            dishtype ? "scale-y-0 max-h-0" : "scale-y-100 max-h-full"
          }`}
        >
          {category.map((item) => (
            <button
              onClick={() => {
                selectCatagoryName(item.dishType)
                // hanleOnclick
              }}
              className={`px-6 p-2 hover:text-primary-color text-left`}
              key={item.idCategory}
            >
              {item.dishType}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleMeat}
          className="font-semibold text-left flex justify-between items-center"
        >
          Meat Type {meatType ? <FiPlus /> : <FiMinus />}
        </button>
        <div
          className={`transition  flex flex-col overflow-hidden transform duration-300 ease-in-out ${
            meatType ? "scale-y-0 max-h-0" : "scale-y-100 max-h-96"
          } origin-top`}
        >
          {category.map((item) => (
            <button
              onClick={() => {
                selectCatagoryName(item.strCategory);
              }}
              className="px-6 p-2 hover:text-primary-color text-left"
              key={item.idCategory}
            >
              {item.strCategory}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
