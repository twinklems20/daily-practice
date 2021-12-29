import React, {useState} from 'react';
import '../index'

function Counters() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 10; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div className='cnt'>
            <h1>Count {count} Times</h1>
            <button onClick={() => {setCount(count + 1)}}>INCREMENT</button>
            <button onClick={() => {setCount(count - 1)}}>DECREMENT</button>
            <button onClick={() => {setCount(initialCount)}}>RESET</button>
            <button onClick={incrementFive}>INCREMENT  BY 10</button>
        </div>
    )
}

export default Counters
