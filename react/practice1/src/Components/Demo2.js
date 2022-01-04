import React, {useState} from 'react'

function Demo2() {
    
    function add(a, b) {
        return a + b
    }

    const sum1 = add(1, 3)
    const sum2 = add(1, 3)

    if (sum1 == sum2) {
        console.log("true")
    }
    else {
        console.log("false")
    }

    return (
        <div>
            <h1>sum1 is {sum1} and sum2 is {sum2}</h1>
        </div>
    )
}

export default Demo2
