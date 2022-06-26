import { useEffect, useContext } from "react"
import { GenericContext } from 'contexts/GenericContext'; 
import { useNavigate } from "react-router-dom";  


export const useCheckActualStep = (step:number) => {
  let navigate = useNavigate();
  
  const context = useContext(GenericContext);

    useEffect(() => {
        if(context.actualStep != step){
          context.changeStepState(1);
          navigate("/");    
        }  
    }, [])

}