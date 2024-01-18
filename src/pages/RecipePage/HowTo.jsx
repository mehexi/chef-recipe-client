import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeStep from "../../componat/RecipeStep";

const HowTo = () => {
  const data = useLoaderData();

  const { instructions } = data;

  console.log(instructions);

  return (
    <div className="col-span-4">
      <h1 className="text-2xl font-semibold mb-6">How to make it.</h1>
      {instructions?.map((instruction) => (
       <RecipeStep key={instruction.stepNumber} data={instruction}></RecipeStep>
      ))}
    </div>
  );
};

export default HowTo;
