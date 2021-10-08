// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterCard = styled.div`
    display: block;
    margin: 0 auto;
    padding: 5px;
    width: 50%;
    background-color:#7D7C84;
    opacity: 85%;
`;

const StyledName = styled.h1`
    font-size: 2.5em;
    border: 3px solid #14f518;
`;

const StyledH2 = styled.h2`
    font-size: 1em;
    text-decoration: 3px underline #DE8F6E;
    color: #ffffff;
`;

const Character =((props) => {
    const {characters} = props;

    return (
        <div>
            {characters.map((resp, index) => {
                return (
                    <CharacterCard key = {index}>
                        <StyledName>{resp.name}</StyledName>
                        <StyledH2>D.O.B: {resp.birth_year}</StyledH2>
                        <StyledH2>Gender: {resp.gender}</StyledH2>
                        <StyledH2>Mass: {resp.mass}</StyledH2>

                    </CharacterCard>
                )
            })}
        </div>
    )
})

export default Character;