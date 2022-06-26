import Button from 'components/button/Button';
import ButtonBack from 'components/buttonBack/ButtonBack';
import { navigationBarProps } from 'utility/Types';
import NavigationBarStyled from './NavigationBarStyled';

const NavigationBar = ({actualStep, btNextEnabled = true, btPrevAction, btNextAction, typeBtNext = "button"}: navigationBarProps) => {
let disabled;
if(actualStep == 1)
  disabled = true;

  return (
    <NavigationBarStyled>
        <div>
              <ButtonBack text="Cancelar" onClick={btPrevAction} disabled={disabled} className={disabled && "btDisabled"} />
              <Button text="Siguiente" onClick={btNextAction} disabled={!btNextEnabled} className={(!btNextEnabled) && "btDisabled"} type={typeBtNext} />
        </div>
    </NavigationBarStyled>
  );
}

export default NavigationBar;
