import styled from 'styled-components'
import variables from "Utility"

const ParagraphWithIconStyled = styled.div`

    display: flex;
    padding: 1.4rem 1rem;
    flex-direction: column;
    align-items: center;

    & > figure{       
        display: flex;
        align-items: center;
        padding: 0rem 1rem;
        width: 8.5rem;
        opacity: 0.8;
    }
    
    & > figure > svg{ 
        height: auto;
        width:100%; 
    }
    & > div{        
        display: flex;
        flex-direction: column;
        flex:1;
        padding:1rem 0rem 2rem 0rem;
    }
        
    @media (min-width: 992px) {
        padding: 6rem 1rem;
        flex-direction: row;
        & > figure{  width: 7.2rem; }
        & > div{ padding:0rem;   }
      }
    
`;

export default ParagraphWithIconStyled;