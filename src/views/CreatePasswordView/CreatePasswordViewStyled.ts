import styled from 'styled-components'
import variables from "Utility"

export const CreatePasswordViewStyled = styled.section`
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top: 0.5rem;
    & > form{
        width: 100%; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & > div, & > p{
        max-width: 100%; 
        width: ${variables.contentWidth}; 
    }
    & > form > div:last-child{
        margin-top:2.2rem;
    }
    & > p{  
        margin-bottom: 1.6rem; 
    }
    & > p, & > form > p{  
        padding: 1rem;
   }
    
    /* & > div, & > p, & > form p, & > form > div{
        width: ${variables.contentWidth}; 
        max-width: 100%; 
        , & > form > div:last-child
    } */ 

    @media (min-width: 992px) {
        & > form > *{
            max-width: 100%; 
            width: ${variables.contentWidth}; 
        }
        & > form > div:last-child{
            width: 100%;; 
        }
    }
      
`;

export const RowMultipleFieldStyled = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    
    & > *{
        width:100%;
        padding: 0.55rem 1rem;
    }

    @media (min-width: 992px) {
        
        & > *{ width:49.1%; 
              padding: 0rem 0rem 0.8rem 0rem;   }    
    }
      
`;

export const RowFieldStyled = styled.div`
    display: flex;
    padding-bottom: 0.5rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    
    & > *{
        width:100%;
        padding: 1rem;
    }

    @media (min-width: 992px) {
        & > *{   padding: 0rem 0rem 0.8rem 0rem;   }       
    }
      
      
`;

