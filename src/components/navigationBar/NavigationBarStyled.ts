import styled from 'styled-components'
import variables from "Utility"

const NavigationBarStyled = styled.div`

    display: flex;
    justify-content:center; 
    width: 100%; 
    padding:2rem 0rem;
    border-top: 1px solid #e8e8ff;
    margin-top: 1rem;

    &  > div {
        width: ${variables.contentWidth}; 
        max-width: 100%;  
        padding: 0rem 1rem;
        display: flex;           
        justify-content:space-between; 
    }
    
`;

export default NavigationBarStyled;