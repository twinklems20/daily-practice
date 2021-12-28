import React from "react";




let add =  function ADD(a, b) {
    return a + b;
}
let sub =  function ADD(a, b) {
    return a - b;
}
let mul =  function ADD(a, b) {
    return a * b;
}
let div =  function ADD(a, b) {
    return a / b;
}


function Netflix() {

    const name1 = "Krina";
    const d = new Date();


    let d1 = new Date();
    d1 = d1.getHours();

    let greet = ' ';
    let grt = ' ';

    if (d1 >= 1 && d1 < 12) {
    greet = "Good morning";
    grt = {
        color : 'blue',
        
    }
    }

    else if (d1 >= 12 && d1 < 19) {
    greet = "Good Afternoon";
    grt = {
        color : 'purple'
    }
    }

    else {
    greet = "Good Night";
    grt = {
        color : 'orange'
    }
    }

    return (
        <>

            {/* Challenge 1 */}

            <h1 style={{margin: "40px"}}>Netflix Picker</h1>
                <p>Top 5 Netflix Movies</p>
                <ol>
                <li>Don't Look Up</li>
                <li>The Witcher</li>
                <li>Emily in Paris</li>
                <li>The Christmas Chronicles</li>
                <li>The Unforgivable</li>
                </ol>


                {/* Challenge 2 */}

                <h1 style={{margin: "40px"}}>{name1}</h1>
                <p>
                Today date is <b>{`${d.toLocaleDateString()}`}</b>
                </p>
                <p>
                Current Time is <b>{`${d.toLocaleTimeString()}`}</b>
                </p>


                {/* Challenge 3 */}

                <h1 style={{margin: "40px", textAlign: "center"}}>Hey !! <span style={grt}>{greet}</span></h1>


                {/* Challenge 5 */}

                <div style={{fontSize: "30px", margin: "30px"}}>
                        <p>Sum is {add(10, 4)}</p>
                        <p>Sub is {sub(10, 4)}</p>
                        <p>Mul is {mul(10, 4)}</p>
                        <p>Div is {div(10, 4)}</p>
                </div>


        </>
    );
}

export default Netflix;