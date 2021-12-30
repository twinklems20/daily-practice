import React, {useState, useEffect} from 'react'

function Useeffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect (() => {
        console.log("UseEffect is working")
        document.title = `Your Count is ${count}`
    },[count])

    return (
        <div>
            {/* <h1>Your Count is {count}</h1> */}
            <input type= 'text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increase the Count</button>
        </div>
    )
}

export default Useeffect
