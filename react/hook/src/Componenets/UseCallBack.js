import React, {useState, useCallback} from 'react'
import Button from './Button'
import CountCall from './CountCall'
import Title from './Title'

function UseCallBack() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(30000)

    const incrementAge = useCallback (() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback (() => {
        setSalary(salary + 1000)
    }, [salary])


    return (
        <div>
            <Title />
            <CountCall text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <CountCall text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default UseCallBack
