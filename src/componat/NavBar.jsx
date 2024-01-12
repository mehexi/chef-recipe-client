import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
    return (
        <nav className='flex justify-between w-2/3 mx-auto items-center align-middle mt-[20px]'>
            <div className='flex gap-9'>
                <h1 className='text-primary-color text-3xl font-semibold font-serif'>Kocina</h1>
                <div className='flex gap-6 items-center'>
                    <Link>home</Link>
                    <Link>Recipe</Link>
                    <Link>Search</Link>
                    <Link>Contact</Link>
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <CiSearch></CiSearch>
                <button>sign in</button>
                <button className='px-9 py-2 bg-primary-color text-white rounded-full'>Sign up</button>
            </div>
        </nav>
    );
};

export default NavBar;