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

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (<Avatar className="headerOption__icon" src={avatar} />)}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="linkedin.png" alt="LinkedIn_logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar={"https://media.licdn.com/dms/image/C5603AQFc7cHRZ4UIyQ/profile-displayphoto-shrink_800_800/0/1649163132894?e=2147483647&v=beta&t=I94fUGDHRO4QOItWRDpb2ZadIlWGf75vaL5xJ96dQEo"} title={"Me"} />
            </div>
        </div>
    )
}
export default Header