import React from "react";
import styled from "styled-components";

const MainContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DayHeader = styled.h1 `
    font-size: 4rem;
    color: lightblue;
    background-color: darkblue;
    text-decoration: underline;
    padding: 10px 0 15px 0;
    text-align: center;
`;

const DayImage = styled.img `
    width: 80%;
    height: 80vh;
    border: solid blue 5px;
    border-radius: 30px;
    margin: 0 auto;
`;

const CardMaker = props => {
    return (
        <MainContainer>
            <DayHeader>NASA Photo of the Day!</DayHeader>
            <DayImage alt="random picture of space" src={props.url} />
        </MainContainer>
    )
}

export default CardMaker;