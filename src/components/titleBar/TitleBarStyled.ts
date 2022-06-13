import styled from 'styled-components'
import variables from "Utility"

const TitleBarStyled = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    padding:  1.2rem 1rem 1.6rem 1rem;
    color:${variables.titleColor};
    min-height:6rem;

    & h2 {
        font-size: 1.5rem;
        margin: 0px;
        display: flex;
        flex-direction: column;
        font-family:${variables.titleFamily};
        line-height: 2.1rem;
        font-weight:800;
    }

    & h2::after {
        content: "";
        width: 12%;
        height: 0.2rem;
        background:${variables.redLighter};
        position: relative;
        top: 0.9rem;
        left: 0px;
    }

    & button{
        margin-left: 0.6rem;
    }

    
    @media (min-width: 992px) {
        padding: 1.7rem 1rem 2.3rem 1rem;
        & h2 {
            font-size: 1.86rem; 
        }
        
      }

`;

export default TitleBarStyled;