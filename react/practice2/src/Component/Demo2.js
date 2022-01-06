import React, { useState, useRef } from 'react'

function Demo2() {

    const [num, setNum] = useState(0)
    const [text, setText] = useState()

    const inputOne = useRef()
    const inputTwo = useRef()

    const setNumBox = () => {
        console.log("Number")
        inputOne.current.style.width = "400px"
        
    }

    const setTextBox = () => {
        console.log("Text")
    }

    return (
        <div className='btnStyle'>
        <h1>{num} {text}</h1>
            <input ref={inputOne} value={num} type='number' onChange={e => {setNum(e.target.value)}} />
            <input ref={inputTwo} value={text} type='text' onChange={e => {setText(e.target.value)}} /><br/>
            <button onClick={() => {setNumBox()}}>RS</button>
            <button onClick={() => {setTextBox()}}>Dollar</button>
        </div>
    )
}

export default Demo2
