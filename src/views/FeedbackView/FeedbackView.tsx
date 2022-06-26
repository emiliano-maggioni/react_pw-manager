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
import { useCheckActualStep } from 'utility/hooks';

const FeedbackView = () => {
  const [resultAPI, setResultAPI] = useState<string | null>(null);
  let navigate = useNavigate();
  const context = useContext(GenericContext);

  const saveUserPassword = async (userData: userPasswordData) => {
    const data = await postAPI("userPassword.json", userData);
    if(data && data != "ERROR") {
      context.resetUserPwData();
      setResultAPI("OK");
    }
    else {
      setResultAPI("KO");
    }
  }

  useCheckActualStep(3);

  useEffect(() => {
    //Save user password on first render
    if (resultAPI == null){
      if(context.userPwData.password != "pruebaKO123")
        saveUserPassword(context.userPwData);
      else
        setResultAPI("KO"); 
    }
  }, []);

  const viewHomePage = () => {
    context.changeStepState(1);
    navigate("/");
  };

  if (resultAPI == null) {
    return (<FeedbackViewStyled>
      <TitleBar title="Feedback" />
      <Loader />
    </FeedbackViewStyled>);
  }

  return (<FeedbackViewStyled>
    <TitleBar title="Feedback" />
    {(resultAPI == "OK") ? <FeedbackSuccess /> : <FeedbackFail viewHomePage={viewHomePage} />}
  </FeedbackViewStyled>);
}

export default FeedbackView;