import { LOGO_URL } from "./utils/libs";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import userData from "./utils/useContext";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => { 
  const {user}= useContext(userData);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch();



  
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-10 h-10 rounded-full" src={LOGO_URL} alt="Logo_Picture" />
        {/* <h2 className="text-xl font-bold">{user.name}- {user.email}</h2> */}
        <nav className="flex flex-row font-bold gap-4">
          <ul className="flex gap-4">
            <li className="status text-sm">{onlineStatus ? "🟢 " : "🔴 "}</li>
            <li><Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition duration-300">AboutUs</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition duration-300">ContactUs</Link></li>
            <li><Link to="/grocerry" className="hover:text-gray-400 transition duration-300">Grocerry</Link></li>
            <li><Link to="/cart" className="hover:text-gray-400 transition duration-300" >Cart-{cartItems.length}</Link></li>
            <li><Link to="/" className="hover:text-gray-400 transition duration-300">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Header;