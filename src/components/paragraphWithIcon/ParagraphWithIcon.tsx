import { paragraphWithIconProps } from 'utility/Types';
import ParagraphWithIconStyled from './ParagraphWithIconStyled';
const ParagraphWithIcon = ({ text, title, children }: paragraphWithIconProps) => { 

  return (
    <ParagraphWithIconStyled>
        <figure>{children}</figure>
        <div>
          <h3>{title}</h3>
          <span>{text}</span>
        </div>
    </ParagraphWithIconStyled>)
}

export default ParagraphWithIcon;
