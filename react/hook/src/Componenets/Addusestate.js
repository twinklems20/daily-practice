import React, {useState} from 'react'

function Addusestate() {

    const [add, setAdd] = useState([])

    const items = [
        {
            name: "Twinkle",
            like: 4565
        }
    ]


    return (
        <div>
            <h1>My name is {items.name} and I likes {items.like}</h1>
        </div>
    )
}

export default Addusestate
