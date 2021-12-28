import React from "react";
import "./index.css";





function Basic(props) {

    const name = "Kuhu";
    const s = "Roy";
    const img1 = "https://picsum.photos/300";
    const img2 = "https://picsum.photos/id/1/300/300";
    const img3 = "https://picsum.photos/300/300";

    const heading = {
    color: "purple",
    textAlign: "center",
    margin: "45px 0",
    fontFamily: "'Pushster', cursive",
    fontSize: "45px",
    };

    const numbers = [9, 19, 29, 39, 49]
    const num = numbers.map((number) => <li>{number - 9}</li>)


    

    return (
        <>
            {/* <h1 style={{ color: 'purple' , textAlign: 'center' }}>Hey  </h1> */}
                <h1 style={heading} contentEditable="true">
                This is {`${name} ${s}`}'s Gallery
                </h1>
                <div className="imgGallery">
                <img src={img1} alt="alt text" />
                <img src={img2} alt="alt text" />
                <img src={img3} alt="alt text" />
                </div>

                <ul>{num}</ul>


                <div>
                    <h1 style={{textAlign: "center", color: "blueviolet"}}>{props.name(true)}</h1>
                </div>

        </>
    );
}

export default Basic;