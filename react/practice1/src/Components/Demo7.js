import React, {useContext} from 'react'
import {Person} from '../App'
import Demo8 from './Demo8'

function Demo7() {
    const person = useContext(Person)
    return (
        <div>
                <Demo8 />
        </div>
    )
}

export default Demo7
