import styled from 'styled-components'
import variables from "Utility"

const HeaderStyled = styled.header`

font-family: ${variables.defFamily};
    width:100%;
    display: flex;
    height: ${variables.headerHeightM};
    background: ${variables.red};
    color: ${variables.white};
    font-weight: bold;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    position: fixed;
    top:0px;
    z-index: ${variables.indexMedium};

    & > div:first-child{
        width:100%;
        display: flex;
        height: 6.6rem;
        align-items: center;
        padding-left: 1rem;
    }

    & > div:first-child  > figure, & > div:first-child > h1 {
        cursor:pointer;
    }
    
    & > div:first-child > figure > img{
        max-height:100%;
    }

    & > div:first-child > h1{
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-family: ${variables.titleFamily};
        color:${variables.white};
        font-weight:700;
    }

    & > div:last-child{
        width:100%;
        display: flex;
        height: 2.9rem;
        align-items: center;
        padding-right: 1rem;
        justify-content: center;
        background:${variables.redLighter};
        font-size: 1.25rem;
    }

    
    @media (min-width: 992px) {
        height: ${variables.headerHeight};

        & > div:first-child{            
            height: 7.6rem;
        }
        & > div:first-child > h1{            
            font-size: 2.6rem;
            margin-left: 0.6rem;
        }
        & > div:last-child{            
            height:  3.7rem;
        }
        
      }

`;

export default HeaderStyled;