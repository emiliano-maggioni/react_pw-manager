import styled from 'styled-components'
import variables from "Utility"

const StepStyled = styled.article`

display: flex;
    flex-direction: column;
    align-items: center;

    & svg {
    width:10rem;  
    max-width: 100%;  
    height:auto;
    margin-bottom: 1rem;
    opacity: 0.8;
    }


`;

export default StepStyled;