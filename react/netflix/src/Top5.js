import React from "react";

function Top5(props) {
    return (
        <>
            <div>
                <div className="card">
                    <img className="image" src={props.image} alt="image"/>
                    <div>
                    <h2 className="name">{props.title}</h2>
                    <h3>{props.year}</h3>
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