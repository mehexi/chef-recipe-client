import React from "react";
import { useLoaderData } from "react-router-dom";
import { GoClock } from "react-icons/go";
import Time from "../../componat/Time";
import { GoHeart, GoHeartFill, GoStarFill } from "react-icons/go";
import { CiSaveDown1, CiShoppingCart } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import HeadingSection from "./HeadingSection";
import HowTo from "./HowTo";
import StepSection from "./StepSection";

const RecipePage = () => {


  return (
      <>
          <HeadingSection></HeadingSection>
          <StepSection></StepSection>
      </>
  );
};

export default RecipePage;
