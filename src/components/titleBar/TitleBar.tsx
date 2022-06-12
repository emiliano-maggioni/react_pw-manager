import Button from 'components/button/Button';
import { useNavigate } from "react-router-dom";
import TitleBarStyled from './TitleBarStyled';


const TitleBar = (props:any) => {
  let navigate = useNavigate();
  return (
    <TitleBarStyled>
      <h2>{props.title}</h2>
      {(props.btText && props.btPath) &&  <Button  text={props.btText} onClick={()=> navigate(props.btPath)} />   }
     </TitleBarStyled>
  );
}

export default TitleBar;
