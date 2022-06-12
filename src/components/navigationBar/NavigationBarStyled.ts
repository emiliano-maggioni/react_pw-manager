import styled from 'styled-components'
import variables from "Utility"

const NavigationBarStyled = styled.div`

    display: flex;
    width: ${variables.contentWidth}; 
    max-width: 100%; 
    padding:  1rem;
    justify-content:space-between;
    background: #f7f7fb;
    
`;

export default NavigationBarStyled;