import styled from 'styled-components'
import variables from "Utility"

const ModalContentStyled = styled.div`

    display: flex;
    padding: 1.2rem 1.2rem 2rem 1.2rem;
    flex-direction: column;
    width: 48rem;
    max-width: 90vw;
    
    & h2 {
        display: flex;
        padding: 1rem;
        margin-top: 0px;
    }

    & h2 svg{
        margin-left: auto;
        cursor:pointer;
    }
    
    & li {  padding: 0.4rem 0rem;  }


`;

export default ModalContentStyled;