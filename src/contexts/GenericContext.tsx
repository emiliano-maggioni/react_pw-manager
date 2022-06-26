import { useState, createContext } from 'react';
import { userPasswordData } from 'utility/Types';

export type GenericContextModel = {
    actualStep: number;
    changeStepState: (step:number) => void;       
    userPwData: any; 
    storeUserPwData: (data:userPasswordData) => void; 
    resetUserPwData: () => void; 
  };  

export const GenericContext = createContext<GenericContextModel>({
    actualStep:1, 
    changeStepState: (step:number) => {}, 
    userPwData:null,    
    storeUserPwData: (data:userPasswordData) => {},
    resetUserPwData: () => {}
}); 


export const GenericContextProvider = (props:any) => {      
    const [actualStep,setActualStep] = useState<number>(1);   
    const [userPwData,setUserPwData] = useState<userPasswordData | string>("");      
    
    const changeStepState = (step:number)=>{ 
        if(step){    
            setActualStep(step);
        }
    }  
        
    const storeUserPwData = (data:userPasswordData)=>{ 
        if(data){    
            setUserPwData(data);
        }
    }   
    const resetUserPwData = () =>{ 
        setUserPwData("");
    }       
 
    return( <GenericContext.Provider value={{ changeStepState: changeStepState, actualStep: actualStep, storeUserPwData: storeUserPwData, userPwData: userPwData, resetUserPwData: resetUserPwData }}>{props.children}</GenericContext.Provider>);    
}