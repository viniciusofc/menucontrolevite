import React, { useState, useEffect } from 'react';

const Counter = ({ maxValue, type }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter < maxValue) {
                setCounter(prevCounter => prevCounter + 1);
            } else {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [counter, maxValue]);

    return (
        <div className="text-3xl text-white font-bold transition-all duration-1000">
            {counter}{type}
        </div>
    );
};

export default Counter;