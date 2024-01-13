import React, { useEffect, useState } from 'react';
import { GoPlay } from "react-icons/go";

const VideoCard = ({ img }) => {



    return (
        <div className='relative hover:shadow'>
            <img className='rounded-lg ' src={img.strMealThumb} alt="" />
            <div className='absolute inset-0 flex items-center justify-center'>
                <GoPlay className='text-primary-color text-6xl'></GoPlay>
            </div>
            <div className='absolute left-3 bottom-3 text-white'>
                <h1 className='text-2xl font-semibold '>{img.strMeal}</h1>
                <h1>{img.author}</h1>
            </div>
        </div>
    );
};

export default VideoCard;