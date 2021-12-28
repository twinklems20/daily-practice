import React, { Component } from 'react'

class HoverCount extends Component {
    

    render() {
        const {count, increament} = this.props
        return (
            <div>
                <h1 style={{textAlign: "center"}} onMouseOver={increament}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCount
