import React from 'react';

const Activity = ({activity}) => {
    const {name, picture} =activity;
    // console.log('pic dekhao ',img);
    return (
        <div className='border-2 shadow-lg  w-[300px] h-[350px] mx-auto mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'>
            {/* <h2>Activity :</h2> */}
            <img className='w-[300px] m-auto p-2' src={picture} alt="" />
            <h2 className='text-xl text-center my-10'>{name}</h2>
        </div>
    );
};

export default Activity;