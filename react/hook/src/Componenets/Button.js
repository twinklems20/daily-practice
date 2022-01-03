import React from 'react'

function Button({handleClick, children}) {
    console.log('Increment - ', children)
    return (
        <div>
            <button className='btnn' onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button)
