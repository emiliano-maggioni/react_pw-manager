import styled from 'styled-components'
import variables from "Utility"

const FeedbackSuccessStyled = styled.article`

    display: flex;
    flex-direction:column;
    align-items: flex-end;

    & > div{
        width:  100%; 
    }
    & > div:last-child{
        padding:2rem 1rem;
        border-top: 1px solid #e8e8ff;
        width: 100%; 
        display: flex;
        justify-content: flex-end;
    }


`;

export default FeedbackSuccessStyled;