import { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethods'
import TimeAgo from 'timeago-react'
import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({type})=>{
    return <button className={'widgetLgButton '+ type}>{type}</button>
  }

  const [orders, setOrders] = useState([])

  useEffect(()=>{
      const getOrders = async () =>{
        try {
          const res = await userRequest.get('orders')
          setOrders(res.data)
        } catch (err) {}

      }
      getOrders()
  },[])


  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order=>(

          <tr key={order._id} className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{<TimeAgo datetime={order.createdAt}/>}</td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status}/>
            </td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg