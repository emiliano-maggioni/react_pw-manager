import styled from 'styled-components'
import variables from "Utility"

const LoaderStyled = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0rem;

    & span {
        color:${variables.titleFamily};
        margin:0 auto;
    }
    
    @media (min-width: 992px) {
        padding: 5rem 0rem;
      }

`;

export default LoaderStyled;