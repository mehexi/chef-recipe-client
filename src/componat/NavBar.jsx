import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AuthContext } from "../auth/AuthProvider";
import { Audio, Oval, ThreeDots } from "react-loader-spinner";

const NavBar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  // console.log(user);

  const getRandomColor = () => {
    const generateColor = () =>
      Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = "#" + generateColor();

    while (randomColor === "#ffffff") {
      randomColor = "#" + generateColor();
    }

    return randomColor;
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    logOut().then(() => {
      navigate("/");
    });
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
          <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-xl font-semibold text-white bg-gray-50">
            <Oval
              visible={true}
              height="30"
              width="30"
              color="#eb4a36"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <>
            {user ? (
              <div className="flex gap-6 items-center ">
                <div
                  className="w-[35px] h-[35px] rounded-full flex justify-center items-center text-xl font-semibold text-white"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  <h1 className="text-center">
                    {user.displayName
                      ? user.displayName?.charAt(0).toUpperCase()
                      : ""}
                  </h1>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-2xl text-gray-500"
                  title="sign out"
                >
                  <RiLogoutCircleLine />
                </button>
              </div>
            ) : (
              <div className="flex gap-6 items-center ">
                <Link to={"/login"}>
                  <button>Sign in</button>
                </Link>
                <Link to={"/register"}>
                  <button className="px-9 py-2 bg-primary-color text-white rounded-full">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
