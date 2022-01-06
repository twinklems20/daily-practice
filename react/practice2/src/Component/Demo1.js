import React, { useState, useRef, useEffect } from 'react'

function Demo1() {

    const [timer, setTimer] = useState(0) 
    const intervalRef = useRef()

    // const startTimer = () => {
    //     setInterval(() => {
    //         setTimer(prevTimer => prevTimer + 1)
    //     }, 1000);
    // }

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        
        return () => {
            clearInterval()
        }
    }, [])

    
    
    return (
        <div>
            <h1>{timer}</h1>
            {/* <button onClick={startTimer}>Start</button> */}
            <button onClick={() => {clearInterval(intervalRef.current)}}>Stop</button>
        </div>
    )
}

export default Demo1
