import React, {useState} from 'react'

function Demo() {

    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [total, setTotal] = useState(numOne + numTwo)

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
        <h1>Add Two Numbers</h1>
        <div className='inpStyle'>
            <input type= "number" value={numOne} onChange={e => setNumOne(+e.target.value)} />
            <input type= "number" value={numTwo} onChange={e => setNumTwo(+e.target.value)} />
            </div>
            <button onClick={addition}>ADD THEM</button>
            <button onClick={substraction}>Substract THEM</button>
            <button onClick={multiplication}>Multiply THEM</button>
            <button onClick={division}>Divide THEM</button>
            <h2>{total}</h2>
        </div>
    )
}

export default Demo
