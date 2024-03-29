import React, { useEffect, useState, useRef } from 'react'

const format = (timer) => {
    const mins = Math.floor(timer/60);
    timer = timer % 60;
    return `${mins}:${timer<10?"0": ""}${timer}`;
}

export const Stopwatch = () => {
    const [isActivated, setIsActivated] = useState(false);
    const [timer, setTimer] = useState(0);
    // const timerId = useRef(null);

    const toggleHandler = () => {
        setIsActivated(!isActivated);
        console.log(isActivated)
    };

    const handleReset = () => {
        setIsActivated(false);
        setTimer(0);
    };

    useEffect(() => {
        let timerId;

        if(isActivated) {
            timerId = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => {
            clearInterval(timerId);
        }
    }, [isActivated,]);


  return (
    <div>
        <h1>Stopwatch</h1>
        <p>{format(timer)}</p>
        <button onClick={toggleHandler}>{isActivated ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
