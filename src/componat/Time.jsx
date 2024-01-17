import React from 'react';
import { GoClock } from 'react-icons/go';

const Time = () => {
    return (
        <div className="grid grid-cols-3 mt-6">
          <div className="col-span-1 text-center flex flex-col justify-center items-center align-middle border-r border-gray-500">
            <GoClock className="text-2xl"></GoClock>
            <h1 className="text-xl font-normal">Active Time</h1>
            <h1>20 mins</h1>
          </div>
          <div className="col-span-1 text-center flex flex-col justify-center items-center align-middle border-r border-gray-500">
            <GoClock className="text-2xl"></GoClock>
            <h1 className="text-xl font-normal">Active Time</h1>
            <h1>20 mins</h1>
          </div>
          <div className="col-span-1 text-center flex flex-col justify-center items-center align-middle">
            <GoClock className="text-2xl"></GoClock>
            <h1 className="text-xl font-normal">Active Time</h1>
            <h1>20 mins</h1>
          </div>
        </div>
    );
};

export default Time;