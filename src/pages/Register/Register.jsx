import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../auth/AuthProvider";

const Register = () => {
  const { register, handleUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const reTypePass = form.reTypePass.value;
    const name = form.name.value;

    setError(null);
    if (!/^(?=.*[A-Z]).{8,}$/.test(pass)) {
      setError(
        ">Password must be at least 8 characters with one capital letter."
      );
      return;
    }

    if (pass !== reTypePass) {
      setError("Password didnt matched");
      return;
    }

    register(email, pass)
      .then((data) => {
        const user = data.user;
        console.log(user);
        if (user) {
          handleUpdateProfile(name)
            .then(() => {
              console.log("true");
            })
            .catch((error) => {
              console.log(error);
            });
        }
          console.log(user);
          navigate('/')
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="grid w-2/3 grid-cols-2 mx-auto h-lvh justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col w-9/12 gap-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </label>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="email"
            name="email"
            placeholder="Email here"
            required
          />
        </label>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <label htmlFor="">
          <input
            className="w-full border px-6 py-3 rounded-full outline-none"
            type="password"
            placeholder="Retype password"
            name="reTypePass"
          />
        </label>
        <h1 className="text-primary-color">{error}</h1>
        <button className="px-9 text-white mx-auto py-3 rounded-full bg-primary-color w-fit">
          Login
        </button>
      </form>
      <div className="w-full h-5/6 rounded-xl bg-gray-700 p-9 flex flex-col gap-6 justify-center text-white">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold  ">Hello There, Join us</h1>
          <h1>Enter your personal details and join the cooking community</h1>
        </div>
        <Link to="/login">
          <button className="px-9 text-white  py-3 rounded-full bg-primary-color w-fit  ">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
