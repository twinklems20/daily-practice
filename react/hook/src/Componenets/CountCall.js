import React from 'react'

function CountCall({text, count}) {
    console.log(`Renedering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CountCall)
