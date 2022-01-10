import React, {useState, useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'addition':
            return num1 + state
        case 'substraction':
            return num1 - state
        case 'multiplication':
            return num1 * state
        case 'division':
            return num1 / state
        default :        
    }
}

function Demo2() {

    // const [numOne, setNumOne] = useState(0)
    // const [numTwo, setNumTwo] = useState(0)
    // const [total, setTotal] = useState(numOne + numTwo)

    const [num1, dispatch1] = useReducer(reducer, initialState)
    const [num2, dispatch2] = useReducer(reducer, initialState)
    const [total, dispatch] = useReducer(reducer, initialState)

    // const addition = () => {
    //     setTotal(numOne + numTwo)
    // }

    // const substraction = () => {
    //     setTotal(numOne - numTwo)
    // }

    // const multiplication = () => {
    //     setTotal(numOne * numTwo)
    // }

    // const division = () => {
    //     setTotal(numOne / numTwo)
    // }

    return (
        <div className='calStyle container'>
        <h1>Perform Calculations</h1>
        <div className='inpStyle'>
            <input type= "number" value={num1} onChange={e => (+e.target.value)} />
            <input type= "number" value={state} onChange={e => (+e.target.value)} />
            </div>
            <button onClick={() => {dispatch('addition')}}>Add Them</button>
            <button onClick={() => {dispatch('substraction')}}>Substract Them</button>
            <button onClick={() => {dispatch('multiplication')}}>Multiply Them</button>
            <button onClick={() => {dispatch('division')}}>Divide Them</button>
            <h2>{total}</h2>
        </div>
    )
}

export default Demo2
