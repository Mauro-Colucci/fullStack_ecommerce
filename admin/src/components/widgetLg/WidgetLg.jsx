import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({type})=>{
    return <button className={'widgetLgButton '+ type}>{type}</button>
  }
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
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?cs=srgb&dl=pexels-jannet-corgi-995978.jpg&fm=jpg" alt="profile" className="widgetLgImg" />
                <span className="widgetLgName">Jane Done</span>
            </td>
            <td className="widgetLgDate">2 Feb 2026</td>
            <td className="widgetLgAmount">$1458.00</td>
            <td className="widgetLgStatus">
              <Button type='Approved'/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?cs=srgb&dl=pexels-jannet-corgi-995978.jpg&fm=jpg" alt="profile" className="widgetLgImg" />
                <span className="widgetLgName">Jane Done</span>
            </td>
            <td className="widgetLgDate">2 Feb 2026</td>
            <td className="widgetLgAmount">$1458.00</td>
            <td className="widgetLgStatus">
              <Button type='Declined'/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?cs=srgb&dl=pexels-jannet-corgi-995978.jpg&fm=jpg" alt="profile" className="widgetLgImg" />
                <span className="widgetLgName">Jane Done</span>
            </td>
            <td className="widgetLgDate">2 Feb 2026</td>
            <td className="widgetLgAmount">$1458.00</td>
            <td className="widgetLgStatus">
              <Button type='Pending'/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?cs=srgb&dl=pexels-jannet-corgi-995978.jpg&fm=jpg" alt="profile" className="widgetLgImg" />
                <span className="widgetLgName">Jane Done</span>
            </td>
            <td className="widgetLgDate">2 Feb 2026</td>
            <td className="widgetLgAmount">$1458.00</td>
            <td className="widgetLgStatus">
              <Button type='Approved'/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg