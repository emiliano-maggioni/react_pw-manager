import { paragraphProps } from 'utility/Types';
import ParagraphStyled from './ParagraphStyled';

const Paragraph = ({ text, title }: paragraphProps) => {

  return (
    <ParagraphStyled>
        <h3>{title}</h3>
        <span>{text}</span>
    </ParagraphStyled>)
}

export default Paragraph;
