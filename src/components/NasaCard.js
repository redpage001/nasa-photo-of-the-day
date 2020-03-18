import React from "react";

const CardMaker = props => {
    return (
        <div className="cardContainer">
            <h1>NASA Photo of the Day!</h1>
            <img className="pictureOfTheDay" alt="random picture of space" src={props.url} />
        </div>
    )
}

export default CardMaker;