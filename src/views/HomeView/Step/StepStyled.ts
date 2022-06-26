import styled from 'styled-components'

const StepStyled = styled.article`

    display: flex;
    flex-direction: column;
    align-items: center;

    & svg {
        width:7rem;  
        max-width: 100%;  
        height:auto;
        margin-bottom: 1rem;
        opacity: 0.8;
    }
            
    @media (min-width: 992px) {

        & svg {
            width:10rem;  
        }

    }

`;

export default StepStyled;