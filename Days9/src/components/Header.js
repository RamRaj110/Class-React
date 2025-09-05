import { LOGO_URL } from "./utils/libs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={LOGO_URL} alt="Logo_Picture" />
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to = '/about'>AboutUs</Link></li>
          <li><Link to="/contact">ContactUs</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
