import React, {useCallback, useState, useMemo} from 'react'
import DemoBtn from './DemoBtn'

function Demo() {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)

    const increment = useCallback (() => {
        console.log("Increment Number By 1")
        setNum(prevNum => prevNum + 1)
    }, [num])

    const incrementCount = useCallback(() => {
        console.log("Increment Count By 1")
        setCount(prevCount => prevCount + 1)
            let i 
            while (i<2000000000) {
                return i
            }
    },[count])
    

    // const decrement = () => {
    //     console.log("Decrement 1")
    //     setNum(prevNum => prevNum - 1)
    //     // let i 
    //     // while (i<200000) {
    //     //     return i
    //     // }
    // }



    return (
        <div className='demo1'>
            <h1>{num}</h1>
            <DemoBtn handleClick={increment}>Increment Number</DemoBtn>

            <h1>{count}</h1>
            <DemoBtn handleClick={incrementCount}>Increment Count</DemoBtn>
        </div>
    )
}

export default Demo
