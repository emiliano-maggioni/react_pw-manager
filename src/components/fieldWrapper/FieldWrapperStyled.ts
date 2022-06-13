import styled from 'styled-components'
import variables from "Utility"

const FieldWrapperStyled = styled.div`

    display: flex;
    flex-direction: column;

    & > div:first-child {
        display: flex;
        padding-bottom: 0.5rem;
    }
    & > div:first-child>strong  {
        color: $grey;
        font-weight: bold;
        font-size: 0.875rem;
    }

    & > div:first-child>span  {
        color: $redForm;
        font-weight: bold;
        padding-left: 0.4rem;
    }

    & fieldset{
        border-radius: 0rem;
    }

    & > p:last-child{
        padding-top: 0.25rem;
    }

    
    @media (min-width: 992px) {
        padding: 1.7rem 1rem 2.3rem 1rem;
        & h2 {
            font-size: 1.86rem; 
        }
        
      }

`;

export default FieldWrapperStyled;