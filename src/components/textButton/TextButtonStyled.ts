import styled from 'styled-components'
import variables from "Utility"

const TextButtonStyled = styled.span`

    color:  ${variables.red};
    padding: 0rem 1.2rem;
    font-size:1.1rem;
    font-weight:bold;
    display: flex;
    cursor: pointer;

    &:focus  {
        color:  ${variables.red};
    }

    &:hover  {
        color:  ${variables.redLighter};
    }

`;

export default TextButtonStyled;