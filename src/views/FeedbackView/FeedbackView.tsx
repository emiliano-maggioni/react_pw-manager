import TitleBar from 'components/titleBar/TitleBar';
import { useEffect, useState } from 'react';
import { FeedbackViewStyled } from './FeedbackViewStyled';
import { useContext } from 'react';
import { GenericContext } from 'contexts/GenericContext'; 
import { useNavigate } from "react-router-dom";  
import FeedbackFail from './feedbackFail/FeedbackFail';
import FeedbackSuccess from './feedbackSuccess/FeedbackSuccess';
import { postAPI } from 'utility/callsAPI';
import Loader from 'components/loader/Loader';
import { userPasswordData } from 'utility/Types';

const FeedbackView = () => { 
  const [resultAPI, setResultAPI] = useState<any>(null);
  let navigate = useNavigate();
  const context = useContext(GenericContext);
  console.log("-> USER DATA:",context.userPwData);

  const saveUserPassword = async (userData:userPasswordData) => {
    const data = await postAPI("userPassword.json",userData);
      if(data && data != "ERROR" && userData.pista){        
        context.resetUserPwData();
        setResultAPI("OK");
      }
      else{  
        setResultAPI("KO"); 
      } 
  } 

  useEffect(()=>{
    //REDIRECT TO HOMEPAGE IF CONTEXT actualStep IS NOT EQUAL TO THIS STEP
    if(context.actualStep != 3)
      viewHomePage();
    else{
        if(resultAPI == null)
          saveUserPassword(context.userPwData);      
    }
  },[]);

  
  const viewHomePage = () => {
    context.changeStepState(1);
    navigate("/");
  };
  
  if(resultAPI == null){
    return (<FeedbackViewStyled>     
        <TitleBar title="Feedback" /> 
        <Loader />                              
    </FeedbackViewStyled>);
  }
  
  return (<FeedbackViewStyled>     
            <TitleBar title="Feedback" />   
            {(resultAPI == "OK") ? <FeedbackSuccess /> : <FeedbackFail viewHomePage={viewHomePage} /> }                         
        </FeedbackViewStyled>);
}

export default FeedbackView;