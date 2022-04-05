import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () =>{
        setCount(count +1 )
    }
    return (
        <div>
            <button onClick={increaseCount}>Click </button>
            
            <h2>Count: {count}</h2>
        </div>
    );
};

export default Home;