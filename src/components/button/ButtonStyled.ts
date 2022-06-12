import styled from 'styled-components'
import variables from "Utility"

const ButtonStyled = styled.button`

    border:1px solid ${variables.white};
    background: ${variables.green};
    padding: 0rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    display: flex;
    height: 3.4rem;
    font-weight: 600;
    letter-spacing: 0.1px;
    cursor: pointer;
    transition: all 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:  ${variables.white};

    &:hover  {
        border:1px solid ${variables.green};
        background: ${variables.white};
        color: ${variables.green};
    }

`;

export default ButtonStyled;