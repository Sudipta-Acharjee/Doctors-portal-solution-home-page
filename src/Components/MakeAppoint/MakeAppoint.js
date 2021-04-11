import React from 'react';
import doctor from '../images/doctor.png'
import './MakeAppoint.css';


const MakeAppoint = () => {
    return (
       <section className="make-appointment">
           <div className="container">
               <div className="row">
                   <div className="col-md-5 d-done d-md-block">
                       <img src={doctor} alt="wait"></img>
                   </div>
                   <div style={{color:"white"}} className="col-md-7 py-5">
                       <h5 className="text-primary text-uppercase">AppointMent</h5>
                       <h1 className="my-4">Make an AppointMent<br/>Today</h1>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                       <button className="btn btn-primary">Learn More</button>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default MakeAppoint;