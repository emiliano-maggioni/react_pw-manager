import Button from 'components/button/Button';
import { titleBarProps } from 'utility/Types';
import TitleBarStyled from './TitleBarStyled';

const TitleBar = ({ title }: titleBarProps) => {

  return (
    <TitleBarStyled>
      <h2  data-testid="h2Title">{title}</h2>
     </TitleBarStyled>
  );
}

export default TitleBar;
