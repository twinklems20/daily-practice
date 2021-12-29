import React, {useState} from 'react'

function HookCount() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>COUNT {count}</button>
        </div>
    )
}

export default HookCount
