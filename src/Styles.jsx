import styled from "styled-components"

const Styles = {
    StyledPage: styled.div`
        width: 100vw;
        height: 100vh;
        background-color: #5C677D;
        `,
    StyledTittle: styled.p`
        font-family: font-family: 'Merriweather', serif;
        margin: 0;
        padding: 1%;
        font-size: 3.5rem;
        font-weight: 900;
        text-shadow: 2px 2px 4px black;
    `,
    StyledContainer:styled.div`
        width: 90%;
        height: 75%;
        background-color: #001233;
        border: 1px solid black;
        border-radius: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 0 auto;
        background-image: url("https://picsum.photos/820/760");
    `,
    StyledControls: styled.div`
        width: 60%;
        height: 9%;
        background-color: #001233;
        border: 1px solid black;
        border-radius: 16px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin: 2vh auto;
    `,
    StyledCards: styled.div`
        width: 20%;
        height: 70%;
        background-color: #001233;
        margin: 0 auto;
        display: none;
    `,
    StyledText: styled.p`
        position: relative;
        top: 80%;
        font-family: font-family: 'Merriweather', serif;
        padding: 1%;
        font-size: 2rem;
        font-weight: 500;
        text-shadow: 2px 2px 1px black;
        color: white;
    `,
}
export default Styles