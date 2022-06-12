import './Normalize.css';
import "./App.scss";
import { BrowserRouter  } from 'react-router-dom';
import Routing from "./routes/Routing";
import Header from "./components/header/Header";
import { MainStyled } from 'AppStyled';

const App = () => {
  return (
        <BrowserRouter>
            <Header />
            <MainStyled>
              <Routing />
            </MainStyled>
        </BrowserRouter>
  );
}  

export default App;
