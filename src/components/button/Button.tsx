import ButtonStyled from './ButtonStyled';

const Button = (props:any) => {
 
  return (
    <ButtonStyled  onClick={props.onClick} {...props}> {props.text}</ButtonStyled>
  );
}

export default Button;
