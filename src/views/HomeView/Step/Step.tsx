import { stepProps } from 'utility/Types';
import StepStyled from './StepStyled';

const Step = ({ text, children }: stepProps) => {

  return (
    <StepStyled >
      {children}
      <span>{text}</span>
    </StepStyled>
  );
}

export default Step;
