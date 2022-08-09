import { useEffect, useState, useMemo } from 'react';
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { userRequest } from '../../requestMethods';
import './home.css'

const Home = () => {
  const [userStats, setUserStats] = useState([])
  const MONTHS = useMemo(()=> "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec".split(', '),[])

  useEffect(()=>{
    const getStats = async()=>{
      try {
        const res = await userRequest.get('users/stats')
        //sorting since my db was all over the place
        res.data.sort((a,b)=>a._id - b._id).map(item=>{
          setUserStats(prev=>[...prev, {name: MONTHS[item._id-1], "Active User": item.total}])
        })
      } catch (err) {}
    }
    getStats()
  }, [MONTHS])

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home