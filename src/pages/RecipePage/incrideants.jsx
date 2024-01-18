import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";

const Incrideants = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
   

    const { strIngredients } = data

    if (!strIngredients) {
     return  <Navigate to={'*'} replace></Navigate>
    }
    
    console.log(strIngredients)

    return (
        <div className='col-span-2'>
            <h1 className='text-2xl font-semibold mb-6'>Ingredients</h1>
            {
                strIngredients?.map(strIngredient => <h1 className='p-3 pl-0 text-xl border-b'>{strIngredient}</h1>)
            }
            <div className='flex flex-col mt-6'>
                <h1 className='text-2xl font-semibold mb-6'>Share Recipe</h1>
                <div className='flex gap-6'>
                    <h1 className='w-[40px] h-[40px] font-bold align-middle flex justify-center items-center border rounded-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white duration-100' href=''><FaFacebookF /></h1>
                    <h1 className='w-[40px] h-[40px] font-bold align-middle flex justify-center items-center border rounded-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white duration-100' href=''><FaFacebookF /></h1>
                    <h1 className='w-[40px] h-[40px] font-bold align-middle flex justify-center items-center border rounded-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white duration-100' href=''><FaFacebookF /></h1>
                </div>
            </div>
        </div>
    );
};

export default Incrideants;