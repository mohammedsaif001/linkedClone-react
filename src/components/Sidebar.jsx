/* eslint-disable no-unused-vars */
import { Avatar } from "@mui/material"
import "./Sidebar.css"

const Sidebar = () => {

    const recentItem = (topic) => {
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media.licdn.com/dms/image/C5616AQGSsy-vq2pKUQ/profile-displaybackgroundimage-shrink_350_1400/0/1638816488274?e=1695254400&v=beta&t=4bS8ALBZgL-8F0590_oscfHbanSfEdIxcwIARHOH8qM" alt="cover_image" />
                <Avatar className="sidebar__avatar" />
                <h2>Mohammed Saif</h2>
                <h4>mohammed001saif@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">2,903</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('NextJs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('mernstack')}
            </div>
        </div>
    )
}
export default Sidebar