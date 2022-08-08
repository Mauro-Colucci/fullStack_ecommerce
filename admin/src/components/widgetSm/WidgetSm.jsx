import './widgetSm.css'
import {Visibility} from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Anna Keller</span>
                    <span className="widgetSmUserTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm