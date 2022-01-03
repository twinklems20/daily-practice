import React, {useEffect, useState} from 'react'

function IntervalEfct() {

    const [count, setCount] = useState(0)

    const incre = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect (() => {
        function doSmthng() {
            console.log("hello")
        }
        doSmthng()
        
       const Increase = setInterval(incre, 1000)
       return () => {
           clearInterval(Increase)
       }
    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalEfct
