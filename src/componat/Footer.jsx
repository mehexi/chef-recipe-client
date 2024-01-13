import React from 'react';
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
    return (
        <div className='mt-[60px] w-2/3 mx-auto flex flex-col gap-6 mb-[60px]'>
            <div className='flex justify-between'>
                <h1 className='text-3xl text-primary-color font-serif font-semibold'>kocina</h1>
                <div className='flex gap-3 text-2xl'>
                    <CiFacebook></CiFacebook>
                    <CiFacebook></CiFacebook>
                    <CiFacebook></CiFacebook>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h1>prejentation</h1>
                    <h1>professonal</h1>
                    <h1>stores</h1>
                </div>
                <div>
                    <h1>prejentation</h1>
                    <h1>professonal</h1>
                    <h1>stores</h1>
                </div>
                <div>
                    <h1>prejentation</h1>
                    <h1>professonal</h1>
                    <h1>stores</h1>
                </div>
                <div>
                    <h1>prejentation</h1>
                    <h1>professonal</h1>
                    <h1>stores</h1>
                </div>
            </div>
            <h1>made by mehedi hasan for practice</h1>
        </div>
    );
};

export default Footer;