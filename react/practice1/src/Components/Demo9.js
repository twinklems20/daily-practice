import React, {useContext, useEffect, useState} from 'react'
import {Person} from '../App'

function Demo9() {
    const user = useContext(Person)
    const [userName, setUserName] = useState('Twinkle')

    useEffect (() => {
        setInterval(() => {
            setUserName ('Ishita')
        }, 2000);
    })

    return (
        <div>
            <h2>Hello {user} & {userName}</h2>
        </div>
    )
}

export default Demo9
