import React, {useState} from 'react'
import Demo from './Demo'

function Demo1() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => {setDisplay(! display)}}>CLICK ME</button>
            {display && <Demo />}
        </div>
    )
}

export default Demo1
