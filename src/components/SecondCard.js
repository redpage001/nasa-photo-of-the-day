import React from "react";

const SecondCardMaker = props => {
    // console.log(props);
    return (
        <div className="cardContainer">
            <h1>Photo from Mars Rover!</h1>
            <img className="RoverPhoto" alt="random picture from Rover" src={props.photo} />
        </div>
    )
}

export default SecondCardMaker;