import React, {useState} from 'react'

function HookObj() {

    const [name, setName] = useState({
        fName: ' ',
        hobby: ' '
    })

    return (
        <div>
            <input value="text" value={name.fName} onChange={e => setName({...name, fName: e.target.value})}/>
            <input value="text" value={name.hobby} onChange={e => setName({...name, hobby: e.target.value})}/>
            <h2>My Name is {name.fName}</h2>
            <h2>My Hobby is {name.hobby}</h2>
            {/* <h1>{JSON.stringify(name)}</h1> */}
        </div>
    )
}

export default HookObj
