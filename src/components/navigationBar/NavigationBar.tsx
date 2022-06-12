import Button from 'components/button/Button';
import { useNavigate } from "react-router-dom";
import NavigationBarStyled from './NavigationBarStyled';


const NavigationBar = (props:any) => {
  let navigate = useNavigate();
  return (
    <NavigationBarStyled>
         <Button  text="Cancelar" onClick={()=> navigate(props.btPath)} />  <Button  text="Siguiente" onClick={()=> navigate(props.btPath)} />
     </NavigationBarStyled>
  );
}

export default NavigationBar;
