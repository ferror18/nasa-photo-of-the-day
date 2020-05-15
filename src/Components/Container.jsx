import React, { useState } from "react";
import styled from "styled-components";
import Styles from "../Styles";

function Container(props) {
    const {StyledPage, StyledTittle, StyledContainer, StyledControls, StyledCards,StyledText} = Styles;
    let myStyles = {
        backgroundImage: `url({props.allApods[props.pointer].url})`
    }
    
    return(
        <StyledContainer style={myStyles}>
            <StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam eveniet ab expedita praesentium magnam ad accusamus vitae quod? Incidunt unde similique necessitatibus error non. Asperiores totam eum repellat.</StyledText>
        </StyledContainer>
    )
}
export default Container