/* eslint-disable react/prop-types */
import "./Header.css"
import "./HeaderOption.css"

import SearchIcon from '@mui/icons-material/Search';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../feature/userSlice";
import { auth } from "../firebase";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (<Avatar className="headerOption__icon" src={user?.profileURL} />)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

const Header = () => {
    const dispatch = useDispatch()

    const logoutFromApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="linkedin.png" alt="LinkedIn_logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" placeholder="Search" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar={true} title={"Me"} onClick={logoutFromApp} />
            </div>
        </div>
    )
}
export default Header