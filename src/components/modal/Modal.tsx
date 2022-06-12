import Dialog from '@mui/material/Dialog';
import Grow from "@mui/material/Grow";
import CloseIcon from "@mui/icons-material/Close";
import ModalContentStyled from './ModalStyled';

const Modal = (props:any) => {

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Grow}
      maxWidth={false}
    >
      <ModalContentStyled>
        <h2>Cart  <CloseIcon onClick={() => props.onClose()} /></h2>
        {(props.cart?.length) && (<ul>
          {props.cart.map((el:any,index:any)=> <li key={index} ><strong>Product:</strong> {el.id} - <strong>colorCode:</strong> {el.colorCode} - <strong>storageCode:</strong> {el.storageCode}</li>)}
          </ul>)}
      </ModalContentStyled>
    </Dialog>
  );
}

export default Modal;
