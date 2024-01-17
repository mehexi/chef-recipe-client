import React from 'react';
import Incrideants from './incrideants';
import HowTo from './HowTo';

const StepSection = () => {
    return (
        <section className='w-3/5 mx-auto mt-[60px] grid grid-cols-6 gap-[60px] '>
            <HowTo></HowTo>
            <Incrideants></Incrideants>
        </section>
    );
};

export default StepSection;