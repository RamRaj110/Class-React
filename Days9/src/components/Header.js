import { LOGO_URL } from "./utils/libs";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  
  return (
    <header>
      <img src={LOGO_URL} alt="Logo_Picture" />
      <nav className="nav">
        <ul>
          <li  className="status">Status:{onlineStatus?"🟢":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to = '/about'>AboutUs</Link></li>
          <li><Link to="/contact">ContactUs</Link></li>
          <li><Link to="/grocerry">Grocerry</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
