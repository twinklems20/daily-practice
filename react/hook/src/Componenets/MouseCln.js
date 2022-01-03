import React, {useState} from 'react'
import MouseEffect from './MouseEffect'

function MouseCln() {

    const [show, setShow] = useState(true)

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <MouseEffect />}
        </div>
    )
}

export default MouseCln
