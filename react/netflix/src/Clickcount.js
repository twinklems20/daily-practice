import React, { Component } from 'react'

 class Clickcount extends Component {
    

    render() {
        const {count, increament} = this.props
        return (
            <div style={{textAlign: "center", margin: "40px"}}>
                <button onClick={increament}>Click {count} times</button>
            </div>
        )
    }
}

export default Clickcount
