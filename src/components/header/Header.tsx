import StepperBase from 'components/stepperBase/StepperBase';
import { useNavigate } from 'react-router-dom';
import HeaderStyled from "./HeaderStyled";
import { GenericContext } from 'contexts/GenericContext';
import { useContext } from 'react';

const Header = () => {
  const navigate = useNavigate();  
  const context = useContext(GenericContext);
  const steps = ['step 1', 'step 2', 'step 3'];
  
  return (
    <HeaderStyled >
      <div >
        <h1 onClick={() => navigate("/")} >OpenClose password manager</h1>
      </div>
      <div>
        <StepperBase steps={steps} actualStep={context.actualStep} /> 
      </div>
    </HeaderStyled>
  );
}

export default Header;
