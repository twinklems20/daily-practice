import React, {useState, useReducer} from 'react'

// const initialState = 0

// const reducer = (state, action) => {
//     switch (action) {
//         case 'addition':
//             return num1 + num2
//         case 'substraction':
//             return num1 + num2
//         case 'multiplication':
//             return num1 + num2
//         case 'division':
//             return num1 + num2
//         default :        
//     }
// }

function Demo() {

    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [total, setTotal] = useState(numOne + numTwo)

    // const [num1, dispatch] = useReducer(reducer, initialState)
    // const [num2, dispatch] = useReducer(reducer, initialState)

    const addition = () => {
        setTotal(numOne + numTwo)
    }

    const substraction = () => {
        setTotal(numOne - numTwo)
    }

    const multiplication = () => {
        setTotal(numOne * numTwo)
    }

    const division = () => {
        setTotal(numOne / numTwo)
    }

    return (
        <div className='calStyle'>
        <h1>Perform Calculations</h1>
        <div className='inpStyle'>
            <input type= "number" value={numOne} onChange={e => setNumOne(+e.target.value)} />
            <input type= "number" value={numTwo} onChange={e => setNumTwo(+e.target.value)} />
            </div>
            <button onClick={addition}>Add Them</button>
            <button onClick={substraction}>Substract Them</button>
            <button onClick={multiplication}>Multiply Them</button>
            <button onClick={division}>Divide Them</button>
            <h2>{total}</h2>
        </div>
    )
}

export default Demo
