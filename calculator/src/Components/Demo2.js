import React from 'react'


function Demo2() {

    const addition = (setNumOne, setNumTwo) => {
        console.log("add function is done")
        console.log({setNumOne} + {setNumTwo})
        // return setNumOne + setNumTwo
    }

    return (
        <div className='btnStyle'>
            <button  onClick={addition}>+</button>
        </div>
    )
}

export default Demo2
