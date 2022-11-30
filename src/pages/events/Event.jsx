import React from 'react'
import HeaderWrapper from "../../common/Header";
import Footer from '../../components/Footer/Footer';
import ReactCard from '../../components/ReactCard/ReactCard';
const Event = () => {
  return (
    <>
      <HeaderWrapper />
        <div className='events-container'>
          <h1 style={{textAlign:"center"}}>Events</h1>
         <div className='events-box'>
          <ReactCard title="Skill++ Event" description="gjsgdh" />
          <ReactCard title="Zairziest Event" />
         </div>
        </div>
      <Footer />
    </>
  )
}

export default Event