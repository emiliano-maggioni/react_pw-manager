import './Normalize.css';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Routing from "./routes/Routing";
import Header from "./components/header/Header";
import { MainStyled } from 'AppStyled';
import { GenericContextProvider } from 'contexts/GenericContext';

const App = () => {
  return (
    <GenericContextProvider>
      <BrowserRouter>
        <Header />
        <MainStyled>
          <Routing />
        </MainStyled>
      </BrowserRouter>
    </GenericContextProvider>
  );
}

export default App;
