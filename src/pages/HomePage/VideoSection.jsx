import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import VideoCard from '../../componat/VideoCard';

const VideoSection = () => {
    const [title, setTitle] = useState(['latest'])
    const [activeSort, setSort] = useState(false)

    const [img, setImg] = useState([])
    useEffect(() => {
        fetch('https://cehef-recipe-server.vercel.app/meals')
            .then(response => response.json())
        .then(data => setImg(data))
    },[])

    const handleTitle = (e) => {
        setTitle(e)
    }

    const handelSortBy = () => {
        setSort(!activeSort)
    }

    const cutImg = img.slice(0, 4)
    
    // console.log(cutImg)

    return (
        <>
            <div className='flex w-2/3 justify-between mx-auto mt-[60px]'>
                <h1 className='text-2xl font-semibold'>Videos</h1>
                <label className="relative">
                    <button onClick={handelSortBy} className="px-8 py-2 h-full bg-primary-color rounded-full text-white  font-semibold flex gap-3 items-center ">
                         {title} <IoIosArrowDown className={`duration-200 ${activeSort ? 'rotate-180' : 'rotate-0'}`}></IoIosArrowDown>{" "}
                    </button>
                    <div className={`absolute left-0 bg-gray-100 z-10 w-full flex flex-col gap-3 px-6 py-3 top-14 rounded duration-150 origin-top transform ease-in-out ${activeSort ? 'scale-y-100' : 'scale-y-0'}`}>
                        <h1 onClick={() => { handleTitle('latest') }} className="hover:text-primary-color">latest</h1>
                        <h1 onClick={() => { handleTitle('Most Popular') }} className="hover:text-primary-color">Most popular</h1>
                        <h1 onClick={() => { handleTitle('Favorite') }} className="hover:text-primary-color">Favorite</h1>
                    </div>
                </label>
            </div>
            <div className='flex w-2/3 justify-between mx-auto mt-[30px] gap-6'>
                {
                    cutImg.map(img=><VideoCard key={img.idMeal} img={img}></VideoCard>)
                }
            </div>

        </>
    );
};

export default VideoSection;