import { Link } from "react-router-dom";
import menu_icon from "../assets/image/menu.png";
import logo_icon from "../assets/image/logo.png";
import search_icon from "../assets/image/search.png";
import upload_icon from "../assets/image/upload.png";
import more_icon from "../assets/image/more.png";
import jack from "../assets/image/jack.png";
import notification_icon from "../assets/image/notification.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper d-flex">
        <div className="logo-icon-container d-flex">
          <div className="icon-menu">
            <img src={menu_icon} alt="menu-icon" />
          </div>
          <Link to={"/"} className="logo-icon">
            <img src={logo_icon} alt="logo-icon" />
          </Link>
        </div>
        <form className="search-container">
          <input type="text" />
          <img src={search_icon} alt="search-icon" />
        </form>
        <div className="user-area d-flex">
          <div className="upload">
            <img src={upload_icon} alt="upload-icon" />
          </div>
          <div className="more">
            <img src={more_icon} alt="" />
          </div>
          <div className="notification">
            <img src={notification_icon} alt="notification-icon" />
          </div>
          <div className="user-profile">
            <img src={jack} alt="user-profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
