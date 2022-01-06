import React, { useRef, useEffect } from 'react'

function Demo() {

    const inputRef = useRef(0)

    const onButtonClick = () => {
        inputRef.current++
        // alert("You Clicked the Button")
        console.log(`clicked ${inputRef.current} times`)
    }

    // useEffect (() => {
    //     inputRef.current.focus()
    // }, [])

    return (
        <div>
            <input ref={inputRef} type = "text" /> <br/>
            <button onClick={onButtonClick}>Focus</button>
        </div>
    )
}

export default Demo

