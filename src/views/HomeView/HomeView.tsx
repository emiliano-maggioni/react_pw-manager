import React  from 'react'
import TitleBar from 'components/titleBar/TitleBar';
import classes from "./HomeView.module.scss";
import { getAPI } from 'utility/callsAPI';
import Loader from 'components/loader/Loader';

const HomeView = () => {

  
  return (
    <section className={classes.container} >      
          <TitleBar title="Bienvenido a la Cuenta Corriente OpenClose" />      
             
     </section>
  );
}

export default HomeView;