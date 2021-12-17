import React from 'react';
import p1 from "./../../assets/icons/p1.svg";
import p2 from "./../../assets/icons/p2.svg";
import p3 from "./../../assets/icons/p3.svg";
import p4 from "./../../assets/icons/p4.svg";
import p5 from "./../../assets/icons/p5.svg";
import contactGirl from "./../../assets/images/contact.jpg";
import './styles.scss';

const Contact = () => {
    return (
        <div className='contact'>
             <div class="container">
               <div class="inner-container">
                <div class="partners">
                    <div className="p">  <img  src={p1} alt="logo" /></div>
                    <div className="p"><img  src={p2} alt="logo" /></div>
                    <div className="p"><img  src={p3} alt="logo" /></div>
                    <div className="p"><img  src={p4} alt="logo" /></div>
                    <div className="p"><img  src={p5} alt="logo" /></div>
                </div>

                 <div class="contact-form">
                   <div class="contact-img">
                   <img src={contactGirl} alt="girls image" />
                 </div>

                  <div class="form">
                    <h2>Contact us</h2>
                    <form id="f1">
                       <table style={{width:"100%"}}>
                          <tr>
                             <th>
                                 <input
                                  type="text"
                                  name="firstname"
                                  placeholder="First Name"
                                  className="fname"/>
                             </th>
                             <th>
                                  <input
                                  type="text"
                                  name="lastname"
                                  placeholder="Last Name"
                                  className="lname"/>
                             </th>
                         </tr>
                         <tr>
                              <th>
                                  <input
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  placeholder="Phone"
                                  className="phone"/>
                              </th>
                              <th>
                                  <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  className="email"/>
                             </th>
                         </tr>
                         <tr>
                             <th colSpan="4">
                                  <textarea
                                  placeholder="Type your message here ..."
                                  cols="7"
                                  rows="10"
                                  className="message"></textarea>
                             </th>
                         </tr>
                     </table>

                      <input type="submit" class="btn" value="Submit" />
                 </form>
             </div>
         </div>
       </div>
   </div>
</div>
    )
}

export default Contact
