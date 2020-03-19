import React from "react";
// import styled from "styled-components";
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// const RoverContainer = styled.div `
//     width: 35%;
//     height: 60vh;
//     margin: 0 5%;
// `;

// const RoverPhoto = styled.img `
//     width: 100%;
//     height: 60vh;
//     border-radius: 30px;
//     border: solid blue 5px;
// `;

const SecondCardMaker = props => {

    return (
        <div css={css `
            width: 35%;
            height: 60vh;
            margin: 0 5%;
        `}>
            <img css={css `
                width: 100%;
                height: 60vh;
                border-radius: 30px;
                border: solid blue 5px;
            `}alt="random picture from Rover" src={props.photo} />
        </div>
    )
}

export default SecondCardMaker;