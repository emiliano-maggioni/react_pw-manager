import styled from 'styled-components'
import variables from "Utility"

const ButtonBackStyled = styled.button`

    border:1px solid ${variables.white};
    background: ${variables.blueLighter};
    color:  ${variables.white};
    padding: 0rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    height: 3.4rem;
    letter-spacing: 0.1px;
    cursor: pointer;
    transition: all 0.2s linear;
    justify-content: center;
    align-items: center;    
    user-select: none;

    &:focus  {
        border:1px solid ${variables.white};
        background: ${variables.blueLighter};
        color:  ${variables.white};
    }

    &:hover  {
        border:1px solid ${variables.blueLighter};
        background: ${variables.white};
        color: ${variables.blueLighter};
    }

`;

export default ButtonBackStyled;