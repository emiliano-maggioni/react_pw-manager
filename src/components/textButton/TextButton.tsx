import TextButtonStyled from './TextButtonStyled';

const TextButton = (props:any) => {
 
  return (
    <TextButtonStyled  onClick={props.onClick} {...props}> {props.text}</TextButtonStyled>
  );
}

export default TextButton;
