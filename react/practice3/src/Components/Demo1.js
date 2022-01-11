import React, { Component } from 'react'
import UpdatedComponent from './Demo2'

class Demo1 extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
               <h1 onMouseOver={incrementCount}>{this.props.name} Hover { count } times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(Demo1, 2)
