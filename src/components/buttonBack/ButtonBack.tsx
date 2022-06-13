import ButtonBackStyled from './ButtonBackStyled';

const ButtonBack = (props:any) => {
 
  return (
    <ButtonBackStyled  onClick={props.onClick} {...props}> {props.text}</ButtonBackStyled>
  );
}

export default ButtonBack;
