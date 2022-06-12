import { useNavigate } from 'react-router-dom';
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled >
      <div >
        <h1 onClick={() => navigate("/")} >OpenClose password manager</h1>
      </div>
      <div >
        svsvsvsvsv
      </div>
    </HeaderStyled>
  );
}

export default Header;
