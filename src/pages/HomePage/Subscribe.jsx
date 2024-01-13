import React from 'react';
import { useInView } from 'react-intersection-observer';
import './style.css' 

const AnimatedInputSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  return (
    <div className='w-2/3 mx-auto bg-primary-color p-20 flex flex-col gap-6 rounded-3xl mt-[60px]'>
      <h1 className='text-center text-3xl text-white font-semibold w-9/12 mx-auto'>
        Be the first to know about the latest deals, receive new trending recipes & more!
      </h1>
      <div className={`flex w-9/12 mx-auto gap-6 ${inView ? 'animate-slide-up' : ''}`} ref={ref}>
        <input
          className='w-full px-6 py-3 rounded-full bg-primary-color border-2 text-white outline-none'
          type="email"
          placeholder='Email Address'
        />
        <button className='px-6 py-3 rounded-full bg-yellow-300'>Subscribe</button>
      </div>
    </div>
  );
};

export default AnimatedInputSection;
