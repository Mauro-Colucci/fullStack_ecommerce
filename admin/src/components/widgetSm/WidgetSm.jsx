import './widgetSm.css'
import {Visibility} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'

const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getUsers = async () =>{
          try {
            const res = await userRequest.get('users?new=true')
            setUsers(res.data)
          } catch (err) {}

        }
        getUsers()
    },[])


  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Members</span>
        <ul className="widgetSmList">
            {users.map(user=>(
                <li key={user._id} className="widgetSmListItem">
                <img src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="portrait" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton"><Visibility className='widgetSmIcon'/>Display</button>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default WidgetSm