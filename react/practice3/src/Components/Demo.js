import React, { Component } from 'react'
import UpdatedComponent from './Demo2'

class Demo extends Component {
    

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Count {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(Demo, 5)
