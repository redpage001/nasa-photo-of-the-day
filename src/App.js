import React, {useState} from "react";
import "./App.css";
import NasaData from "./components/NasaData";
import SecondData from "./components/SecondData";
import styled from "styled-components";

const SecondContainer = styled.div `
  display: flex;
  justify-content: center;
`;

const RoverHeader = styled.h2 `
    font-size: 3rem;
    color: lightblue;
    background-color: darkblue;
    text-decoration: underline;
    padding: 10px 0 15px 0;
    text-align: center;
`;

const ButtonContainer = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const LightButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  margin: 5px 10px;
  font-size: 2rem;
  background: white;
  color: black;
  border-radius: 15px;
  border: solid black 2px;
  &:hover {
    background: black;
    color: white;
    border: solid white 2px;
  }
  `;

  const DarkButton = styled.button`
  width: 200px;
  height: 50px;
  border: 0;
  margin: 5px 10px;
  font-size: 2rem;
  background: black;
  color: white;
  border-radius: 15px;
  border: solid white 2px;
  &:hover {
    background: white;
    color: black;
    border: solid black 2px;
  }
  `;

function App() {

  const [color, setColor] = useState("black");

  const LargeContainer = styled.div `
  width: 100%;
  background-color: ${color};
  padding: 30px 0 100px 0;
  justify-content: center;
`;

  return (
    <LargeContainer>

      <ButtonContainer>
        <LightButton onClick={() => setColor("white")}>Light</LightButton>
        <DarkButton onClick={() => setColor("black")}>Dark</DarkButton>
      </ButtonContainer>

      <NasaData/>

      <RoverHeader>Photos from Mars Rover</RoverHeader>
      <SecondContainer>
        <SecondData/>
      </SecondContainer>

    </LargeContainer>
  );
}

export default App;
