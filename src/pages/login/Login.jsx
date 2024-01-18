import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";

const Login = () => {
  const [randomImageUrl, setRandomImageUrl] = useState("");
  const { logIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  console.log(location)

  const apiKey = "i6za9LU6qUpLDmC4vyTDvQ==IMfxGsTd7MfItYbZ"; // Replace with your actual API key
  const category = "food";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    logIn(email, password)
    .then((data) => {
      console.log(data.user);
      navigate(from,{replace:true})
    })
    .catch((error) => {
      console.log(  error.message);
    });
  };

  React.useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        Accept: "image/jpg"
      }
    })
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setRandomImageUrl(imageUrl);
      })
      .catch((error) => console.error("Error:", error));
  }, [category, apiKey]);

  return (
    <div className="grid w-2/3 grid-cols-2 mx-auto h-lvh justify-center items-center">
      <form onSubmit={handleLogin} className="flex flex-col w-9/12 gap-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="email"
            placeholder="Email here"
            name="email"
          />
        </label>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="password"
            placeholder="Min 8 Characters"
            name="password"
          />
        </label>
        <span className="mx-auto">Forgot your Password?</span>
        <button
          className="px-9 text-white mx-auto py-3 rounded-full bg-primary-color w-fit"
        >
          Login
        </button>
      </form>
      <div className="relative h-5/6">
        <img
          src={randomImageUrl}
          alt=""
          className="rounded-lg duration-150 h- object-cover w-full h-full "
        />
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-6 bg-gray-700/65 backdrop-blur-sm w-full h-full justify-center rounded-lg flex flex-col gap-6 text-white">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold  ">Hello There, Join us</h1>
            <h1>Enter your personal details and join the cooking community</h1>
          </div>
          <Link to={`/register`}>
            <button className="px-9 text-white  py-3 rounded-full bg-primary-color w-fit  ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
