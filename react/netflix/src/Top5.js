import React from "react";

function Top5(props) {
    return (
        <>
            <div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2GHJziBhYRxF8zw9cUJIH6mkt8aqyl3IFg&usqp=CAU" alt="image"/>
                    <div>
                    <h3 className="name">title</h3>
                    <a href={props.link}>
                        <button className="btn">Watch Now</button>
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Top5;