import TitleBar from 'components/titleBar/TitleBar';
import { getAPI } from 'utility/callsAPI';
import Loader from 'components/loader/Loader';
import SettingsIcon from '@mui/icons-material/Settings';
import LockResetIcon from '@mui/icons-material/LockReset';
import Step from './Step/Step';
import Paragraph from 'components/paragraph/Paragraph'; 
import { HomeViewStyled, StepContainerStyled } from './HomeViewStyled';
import NavigationBar from 'components/navigationBar/NavigationBar';
import { useState } from 'react';
import Modal from 'components/modal/Modal';

const HomeView = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>  
    <HomeViewStyled>      

          <TitleBar title="Bienvenido a la Cuenta Corriente OpenClose" />   
          <StepContainerStyled>
            <Step text="Guarda aqui todas tus contrasenas, datos a cualquier informacion, olvida las notas de papel y las aplicaciones no protegidas"><SettingsIcon /></Step>      
            <Step text="Crea tu llave maestra: solo tù podràs acceder a tus secretos con ella"><LockResetIcon fontSize='large' /></Step>  
          </StepContainerStyled>  
          <Paragraph title="Cómo funciona"  text="En primer lugar debes crear una contraseña diferente para sus pertenencias electronicas. No podras ercuperar tu contraseña asi que recuérdela bien." />    
          <Paragraph title="Qué datos puedes guardar"  text="Por ejemplo, el nùmero de tu tarjeta, el PIN y el PUK de tu teléfono mòvil, el nùmero de serie de alguno de tus dispositivos o cualquier informaciòn que necesites tener en un lugar seguro." />    
        <NavigationBar />
     </HomeViewStyled>
     <Modal open={open} onClose={handleClose}  /></>
  );
}

export default HomeView;