import React, { useState } from "react";
import "./App.css";
import Styles from "./Styles";
import styled from "styled-components";
import  Container from "./Components/Container";
import Axios from "axios";
// MLOM8c7hKC7brey7Hjiggf2idomfqdTLcenqZowG  - https://api.nasa.gov/planetary/apod?api_key=MLOM8c7hKC7brey7Hjiggf2idomfqdTLcenqZowG

const banana = Axios.get(`https://api.nasa.gov/planetary/apod?api_key=MLOM8c7hKC7brey7Hjiggf2idomfqdTLcenqZowG`)
.then(response =>{
  console.log(response);
  const myinitialstate = []
  myinitialstate.push(response.data)
  return myinitialstate;
})
.catch(response => {
  console.log(response);
})


function App() {
  const {StyledPage, StyledTittle, StyledContainer, StyledControls, StyledCards} = Styles;
  const [allApods, setAllApods] = useState(Axios.get(`https://api.nasa.gov/planetary/apod?api_key=MLOM8c7hKC7brey7Hjiggf2idomfqdTLcenqZowG`)
  .then(response =>{
    console.log(response);
    const myinitialstate = []
    myinitialstate.push(response.data)
    return myinitialstate;
  })
  .catch(response => {
    console.log(response);
  }));
  const [pointer, setPointer] = useState(0);
  const [apodsCount, setApodsCount] = useState(0);
  


  return (
    <StyledPage >
      <Container allApods={allApods} pointer={pointer} />
      {console.log(allApods)}
    </StyledPage>
  );
}

export default App;
