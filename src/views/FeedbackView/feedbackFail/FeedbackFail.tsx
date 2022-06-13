import ParagraphWithIcon from 'components/paragraphWithIcon/ParagraphWithIcon';
import FeedbackFailStyled from './FeedbackFailStyled';
import WarningIcon from '@mui/icons-material/Warning';
import TextButton from 'components/textButton/TextButton';
import { feedbackFailProps } from 'utility/Types';

const FeedbackFail = ({ viewHomePage }:feedbackFailProps) => {

  return (
    <FeedbackFailStyled>
          <ParagraphWithIcon title="Ha habido un error"  text="No hemos podido modificar tu Contraseña Maestra. Intentalo más tarde" >
            <WarningIcon />
          </ParagraphWithIcon>
          <div><TextButton text="Volver a Password manager >" onClick={viewHomePage} /></div>
     </FeedbackFailStyled>
  );
}

export default FeedbackFail;
