import React, {useContext} from 'react'
import {Person, Year} from '../App'

function Demo8() {
    const person = useContext(Person)
    const year = useContext(Year)

    return (
        <div>
            <h1>{person} born year is {year}</h1>
        </div>
    )
}

export default Demo8
