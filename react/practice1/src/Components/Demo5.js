import React, {useReducer} from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCount: state.firstCount + action.value}
        case 'double':
            return {...state, firstCount: state.firstCount * action.value}
        case 'increment2':
            return {...state, secondCount: state.secondCount + action.value}
        case 'reset':
            return initialState
        default :
            return state    
    }
}

function Demo5() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='demo4Style'>
        <h1>Count is {count.firstCount}</h1>
        <h1>Second Count is {count.secondCount}</h1>
            <button onClick={() => {dispatch({type : 'increment', value: 1})}}>Increment</button>
            <button onClick={() => {dispatch({type : 'double', value: 2})}}>Double</button>
            <button onClick={() => {dispatch({type : 'increment', value: 5})}}>Increment 5</button>
            <button onClick={() => {dispatch({type : 'increment2', value: 10})}}>Increment2</button>
            <button onClick={() => {dispatch({type : 'reset'})}}>Reset</button>
        </div>
    )
}

export default Demo5
