import React, {useReducer} from 'react'

let initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'double':
            return state * 2
        case 'reset':
            return initialState
        default :
            return state    
    }
}

function Demo4() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='demo4Style'>
        <h1>Count is {count}</h1>
            <button onClick={() => {dispatch('increment')}}>Increment</button>
            <button onClick={() => {dispatch('double')}}>Double</button>
            <button onClick={() => {dispatch('reset')}}>Reset</button>
        </div>
    )
}

export default Demo4
