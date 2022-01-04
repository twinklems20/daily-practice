import React, {useState, useEffect} from 'react'

function Demo() {

    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log("useEffect work")
    
        return () => {
            console.log("useEffect stop")
            {
                alert("It is hidden")
            }
        }
    }, [])

    

    return (
        <div>
            <h1 onMouseOver={()=>{setCount(count + 1)}}>You click {count} Times</h1>
        </div>
    )
}

export default Demo
