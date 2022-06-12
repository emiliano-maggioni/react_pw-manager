import styled from 'styled-components'
import variables from "Utility"

export const MainStyled = styled.main`
  height:calc(100vh - ${variables.headerHeightM});
  margin-top: ${variables.headerHeightM};
  background:${variables.white};
  color:${variables.blue};
  z-index:${variables.indexLow};  
  overflow:auto;
  overflow-x:hidden;
  overflow-y:scroll; 
  font-family: ${variables.defFamily};

  & > section{
        box-sizing: border-box;  
        padding: ${variables.paddingViews};
        min-height: calc(100vh - ${variables.headerHeightM});
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom:2.5rem;
   }   
   
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        margin-top: ${variables.headerHeight};
        height: calc(100% - ${variables.headerHeight});

         & > section {      
          min-height: calc(100vh - ${variables.headerHeight}); 
         }

    }

`;