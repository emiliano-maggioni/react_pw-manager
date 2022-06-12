import styled from 'styled-components'
import variables from "Utility"

export const HomeViewStyled = styled.section`
    padding: 1.2rem 0.46rem;  
    display:flex;
    align-items:center;
    flex-direction:column;
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
    padding:4rem 1rem 3rem 1rem;

    & > article{
        width: 22rem;
        max-width: 50%;
        padding: 0.8rem;
    }
    
`;

