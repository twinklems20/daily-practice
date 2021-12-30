import React, {useState} from 'react'


    const Hookex = () => {
        const char =["Ice-cream", "Chocolate", "Candy", "cake"];
        const [value, setvalue] = useState(0)
        const [state, setstate] = useState(char[value])

        const setItem = () => {
            setvalue(value+1)
            setstate(char[value])
        }
        return (
            <div>
                <h1>I Like {state}</h1>
                <button onClick={setItem}>Change</button>
                </div>
        )
}

export default Hookex
