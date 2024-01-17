import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "../auth/AuthProvider";

const NavBar = () => {
  const { user, loading,logOut } = useContext(AuthContext);
  console.log(user);

    const getRandomColor = () => {
      
    const generateColor = () => Math.floor(Math.random() * 16777215).toString(16);
      let randomColor = "#" + generateColor();
      
    while (randomColor === "#ffffff") {
      randomColor = "#" + generateColor();
    }
  
    return randomColor;
  };

  return (
    <nav className="flex justify-between w-2/3 mx-auto items-center align-middle mt-[20px]">
      <div className="flex gap-9">
        <h1 className="text-primary-color text-3xl font-semibold font-serif">
          Kocina
        </h1>
        <div className="flex gap-6 items-center">
          <Link to={"/"}>home</Link>
          <Link>Recipe</Link>
          <Link>Search</Link>
          <Link>Contact</Link>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <CiSearch className="text-2xl"></CiSearch>
        {loading ? (
         ''
        ) : (
          <>
            {user ? (
              <div className="flex gap-6 items-center ">
                <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center text-xl font-semibold text-white" style={{backgroundColor:getRandomColor()}}>
                  <h1 className="text-center">
                    {user.displayName.charAt(0).toUpperCase()}
                  </h1>
                </div>
                <button onClick={logOut} className="text-2xl text-gray-500">
                  <RiLogoutCircleLine />
                </button>
              </div>
            ) : (
              <div className="flex gap-6 items-center ">
                <button>Sign in</button>
                <button className="px-9 py-2 bg-primary-color text-white rounded-full">
                  Sign up
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
