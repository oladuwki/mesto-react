import '../index.css';
import logo from "../images/header.svg";

function Header() {
  return (
     <header className="header">
      <img src={logo} alt="логотип 'Место'" className="header__logo" />
    </header>
    
  );
}

export default Header;
