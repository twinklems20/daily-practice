import React, {useState} from 'react'

const HooksArray = () => {

    const data = [
        {
            name: "Twinkle", color: "Blue"
        },
        {
            name: "Kuhu", color: "Pink"  
        },
        {
            name: "Kunal", color: "Pink"  
        },
        {
            name: "Pihoo", color: "Pink"  
        }
    ]

    const [myArr, setmyArr] = useState(data)

    // const 

    return (
        <>
            {myArr.map((elemnt, index) => {
                return <h1 className='h1stl' key={index}>{elemnt.name} & color {elemnt.color}</h1>
            })}

            <button className='btnn' onClick={() => setmyArr([])}>Clear Data</button>
        </>
    )
}

export default HooksArray
