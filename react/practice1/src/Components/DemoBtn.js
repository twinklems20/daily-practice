import React from 'react'

function DemoBtn({handleClick, children}) {
    console.log(children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(DemoBtn)
