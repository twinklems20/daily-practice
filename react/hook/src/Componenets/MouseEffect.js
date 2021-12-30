import React, { useEffect, useState } from 'react'

function MouseEffect() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMouseMove = e => {
        console.log("Mouse Effect");
        setX(e.clientX);
        setY(e.clientY);
    } 


    useEffect(() => {
        console.log("Use Effect");
        window.addEventListener('mousemove', logMouseMove)
    }, [])

    return (
        <div>
            <h1>X {x} & Y {y}</h1>
        </div>
    )
}

export default MouseEffect
