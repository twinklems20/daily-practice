import React, { Component } from 'react'

class ClassCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        } 
    }

    increment = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }



    render() {
        return (
            <div>
                <button onClick={this.increment}>Click {this.state.count} TIMES</button>
            </div>
        )
    }
}

export default ClassCount
