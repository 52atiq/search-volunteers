import React, { useEffect, useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activity from '../Activity/Activity';

const Main = () => {
    const [volunteers, setVolunteers] =useVolunteer();
    const [searchResult, setSearchResult] = useState([])

    const handleSearchChange = (event) =>{
        const searchText = event.target.value;
        const match = volunteers.filter(v => v.name.includes(searchText));
        // searchResult(match);
        setSearchResult(match)

    }

    return (
        <div className=''>
            
             <div className='grid justify-center mt-5 gap-3'>
             <h2 className=' text-2xl'>Volunteers activities: {volunteers.length}</h2>  
             <input className='border pl-2 h-8' onChange={handleSearchChange} type="text" placeholder='search.. ' /> 
             </div>

           <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-9 mx-24 mt-10'>
              
           {
                searchResult.map(activity => <Activity
                key={activity._id}
                activity={activity}
                ></Activity> )
            }
           </div>
        </div>
    );
};

export default Main;