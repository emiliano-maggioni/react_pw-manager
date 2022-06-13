import ButtonStyled from './ButtonStyled';

const Button = (props:any) => {
 
  return (
    <ButtonStyled  onClick={props.onClick} {...props} data-testid="button"> {props.text}</ButtonStyled>
  );
}

export default Button;
