import React from 'react'
import "./Event.css";
import HeaderWrapper from "../../common/Header";
import Footer from '../../components/Footer/Footer';
import ReactCard from '../../components/ReactCard/ReactCard';
const Event = () => {
  return (
    <>
      <HeaderWrapper />
        <div className='events-container'>
        <div className='events-heading'>
            <h1 style={{textAlign:"center",marginTop:"2rem"}}>Events</h1>
            <hr style={{marginTop:"2rem"}}/>
        </div>
         <div className='events-category'>
           <div><h2>Zairza</h2></div>
           <div className='add-events'>
            <button>Add Event</button>
           </div>

          </div> 
         <div className='events-box'>
          <ReactCard type="card1" />
          <ReactCard type="card2" />
          <ReactCard type="card3" />
         </div>
         <div className='events-category'>
           <h2>Spectrum</h2>
         </div>
          <div className='events-box'>
          <ReactCard type="card4" />
          <ReactCard type="card5" />
          <ReactCard type="card6" />
          </div>
          <div className='events-category'>
           <h2>Aerospace</h2>
         </div>
          <div className='events-box'>
          <ReactCard type="card7" />
          <ReactCard type="card8" />
          <ReactCard type="card9" />
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Event