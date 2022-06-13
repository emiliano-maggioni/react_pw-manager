import styled from 'styled-components'
import variables from "Utility"

export const FeedbackViewStyled = styled.section`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top: 0.5rem;
    & > *{
        width: ${variables.contentWidth}; 
        max-width: 100%; 
    }          
`;