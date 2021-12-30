import React, {useState} from 'react'

function HooksArray() {
    
    // let i;
    let items = ["Ice-cream", "Chocolate", "Candy", "cake"];
    const [value, setValue] = useState(items[0]);
    const [state, setState] = useState(items[value])
    
    const setItems = () => {
        setValue(value+1)
        setState(items[value])
    }

  
    // function setItems() {
    //     for(let i = 0; i < items.length; i++) {
    //         let ab = items[i]
    //         console.log(ab)
    //         // console.log(value)
    //         setValue(items[i])
    //     }
    // }
    

    return (
        <div>
            <h1>I like {state}</h1>
            <button onClick={setItems}>CLICK</button>
           
        </div>
        
    )
}

export default HooksArray
