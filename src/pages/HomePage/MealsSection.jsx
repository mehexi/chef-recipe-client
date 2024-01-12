import React, { useEffect, useState } from "react";
import Catagory from "../../componat/Catagory";
import RecipeSection from "../../componat/RecipeSection";


const MealsSection = () => {

  const [catagoryName,setCatagoryname] = useState(null)

  const selectCatagoryName = (e) => {
    setCatagoryname(e)
  }
  
  // console.log(catagoryName)
  
  return (
    <section className="w-2/3 grid grid-cols-5 gap-9 mx-auto mt-[60px]">
      <div className="col-span-1">
        <Catagory selectCatagoryName={selectCatagoryName}></Catagory>
      </div>
      <div className="col-span-4">
      <RecipeSection catagoryName={catagoryName}></RecipeSection>
      </div>
    </section>
  );
};

export default MealsSection;
