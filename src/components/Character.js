// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";


const StyledFont = styled.div`
font-family: 'Press Start 2P', cursive;

`
const StyledButton = styled.button`
    padding: 5px;
    background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); 
    &:hover {
        transform: scale(1.25, 1.25);
}   
    &:hover::after {
        opacity: 1;
}   
`
const StyledH2 = styled.h2`
transition: width 2s, height 2s, background-color 2s, transform 2s;
&:hover {
    transform: rotate(360deg);
}
`

const StyledSpan = styled.span`
font-family: 'Press Start 2P', cursive;
font-size: 0.5rem;
`

const Character = props => {

    const [card, setCard] = useState(true)
    const toggleCard = () => {
        setCard(!card)
    }

    return (
        <StyledFont className="chara">
            <StyledH2>{props.data.name}</StyledH2>
                <StyledButton className="custom-btn btn-7" onClick={toggleCard}>
                    {!card ? <p>{props.data.birth_year}</p> : <p><StyledSpan>Born In</StyledSpan></p>}
                </StyledButton>
        </StyledFont>
    )

    
       
}




export default Character