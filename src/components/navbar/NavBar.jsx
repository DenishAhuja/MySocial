import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";
import { DarkModeContext , toggle } from "../../context/darkModeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const NavBar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);


    return ( 
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>MySocial</span>
                </Link>
                <HomeOutlinedIcon/>
                {darkMode ? (
          <LightModeIcon DarkModeOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
                        <GridViewOutlinedIcon/>

                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."></input>
                </div>
                
            </div>
        <div className="right">
                <PermIdentityOutlinedIcon/>
                <MailOutlineOutlinedIcon/>
                <NotificationsOutlinedIcon/>
            
            <div className="user">
            <img
            src={currentUser.profilePic}
            alt=""
          />                <span>{currentUser.name}</span>
            </div>
        </div>
        </div>
     );
}
 
export default NavBar;