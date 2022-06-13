import styled from 'styled-components'
import variables from "Utility"

export const HomeViewStyled = styled.section`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top: 0.5rem;
    & > div{
        width: ${variables.contentWidth}; 
        max-width: 100%; 
    }
    & > div:last-child{
        width: 100%; 
    }
      
`;

export const StepContainerStyled = styled.div`
    display: flex;
    width: ${variables.contentWidth}; 
    margin: 0 auto;
    justify-content: space-around;
    max-width: 100%; 
    padding:1.4rem 1rem 1rem 1rem;
    flex-wrap: wrap;
            
    & > article{
        width: 22rem;
        padding: 0.8rem;
    }
        
    @media (min-width: 992px) {
        padding:4rem 1rem 3rem 1rem;

        & > article{
            max-width: 50%;
        }
    
        
    }

`;

export const CheckAgeBoxStyled = styled.div`
    display: flex;
    width: 100%; 
    padding: 1rem;
`;

