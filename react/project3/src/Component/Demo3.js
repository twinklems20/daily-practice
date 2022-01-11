import React, { Component } from 'react'

class Demo3 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState (prevState => {
            return { count:prevState.count + 1 }
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Count {count} Times</button>
            </div>
        )
    }
}

export default Demo3
