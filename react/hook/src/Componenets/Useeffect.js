import React, {useState, useEffect} from 'react'

function Useeffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect (() => {
        console.log("UseEffect is working")
        document.title = `Your Count is ${count}`
    },[count])

    // useEffect (() => {
    //     console.log("1 is done")
    // })
    // useEffect (() => {
    //     console.log("2 is done")
    // }, [count])

    // console.log("3 is done")

    return (
        <div>
            {/* <h1>Your Count is {count}</h1> */}
            <input type= 'text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increase the Count</button>
        </div>
    )
}

export default Useeffect
