import FeedbackSuccessStyled from './FeedbackSuccessStyled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ParagraphWithIcon from 'components/paragraphWithIcon/ParagraphWithIcon';
import TextButton from "components/textButton/TextButton";

const FeedbackSuccess = (props: any) => {

  return (
    <FeedbackSuccessStyled>
        <ParagraphWithIcon title="¡Tu Password Manager ya está creado!" text="Ahora tu puede empezar a usar los servicios de homebanking." >
          <CheckCircleOutlineIcon />
        </ParagraphWithIcon>
        <div><TextButton text="Acceder >" onClick={()=> console.log("END OF PROCESS")} /></div>
    </FeedbackSuccessStyled>
  );
}

export default FeedbackSuccess;
