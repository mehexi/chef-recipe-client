import React, { useState } from "react";
import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline
} from "react-icons/io";

const RecipeStep = ({ data }) => {
  const [check, setcheck] = useState(false);

  const handleCheck = () => {
    setcheck(!check);
  };

  const { stepNumber, instructions } = data;

  return (
    <div key={stepNumber} className="mb-6">
      <div onClick={handleCheck} className="cursor-pointer flex items-center gap-6 mt-3">
        {check ? (
          <IoIosCheckmarkCircle className="text-3xl text-primary-color"></IoIosCheckmarkCircle>
        ) : (
          <IoIosCheckmarkCircleOutline className="text-3xl text-primary-color"></IoIosCheckmarkCircleOutline>
        )}
        <h1 className="text-xl font-semibold">{stepNumber}.step</h1>
        <div className="border-b w-10/12 h-0"></div>
      </div>
      <h1 className={`p-3 pl-0 text-xl ${check?'text-gray-300':'text-gray-600'}`}>{instructions}</h1>
    </div>
  );
};

export default RecipeStep;
