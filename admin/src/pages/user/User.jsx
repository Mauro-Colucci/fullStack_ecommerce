import './user.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'>
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Keller</span>
                        <span className="userShowUserTitle">Software engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">annakell69</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon" />
                        <span className="userShowInfoTitle">10.12.1989</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon" />
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon" />
                        <span className="userShowInfoTitle">annakell69@email.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon" />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input
                            type="text"
                            placeholder="annakell69"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input
                            type="text"
                            placeholder="Anna Keller"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input
                            type="text"
                            placeholder="annakell69@email.com"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input
                            type="text"
                            placeholder="+1 123 456 67"
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input
                            type="text"
                            placeholder="New York | USA"
                            className="userUpdateInput"
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img
                            className="userUpdateImg"
                            src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?cs=srgb&dl=pexels-dillon-kydd-5794559.jpg&fm=jpg" alt="portrait"
                            />
                            <label htmlFor="file">
                            <Publish className="userUpdateIcon" />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User