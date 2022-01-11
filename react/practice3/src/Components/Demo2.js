import React from "react";

const UpdatedComponent = (OriginalComponent, incrementNum) => {
    class NewComponent extends React.Component {
     
    constructor(props) {
        super(props)
    
        this.state = {
             count: 100
        }
    }

    incrementCount = () => {
        this.setState (prevState => {
            return { count:prevState.count - incrementNum }
        })
    }

        render () {
            return  <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
        }
    }

    return NewComponent 
}

export default UpdatedComponent