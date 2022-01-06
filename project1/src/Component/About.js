import React from 'react'

function About() {
    return (
        <div className='App'>
            <h1>About Us</h1>
            <div className="card" style={{ width: "18rem" }}>
            <img src="https://images.unsplash.com/photo-1577042939454-8b29d442b402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
            </div>
        </div>
    )
}

export default About
