import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@mui/icons-material"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Maucci.ADM</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?cs=srgb&dl=pexels-jonaorle-4029925.jpg&fm=jpg" alt="profile portrait" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar