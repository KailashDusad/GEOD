import React, { useRef, useEffect, useState } from 'react'
import MyNavbar from './Navbar';
import '../styles/Contact.css';
import logoBlack from '../assets/logo_black.png';
import Footer from './Footer';
import Heading from './Heading';
import emailjs from '@emailjs/browser';
import usePass from './Pass';
import Loader from './Loader';
const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const Frm = useRef();
  const passKeys = usePass();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(passKeys[0].SERVICE, passKeys[0].TEMPLATE, Frm.current,{
        publicKey: passKeys[0].PUBLIC,
      })
      .then(
        () => {
          alert('Message Sent Successfully !!');
        },
        (error) => {
          alert('FAILED !!');
          console.log(error);
          console.log(passKeys);
        },
      );
  };
  return (
    <>
      <MyNavbar />
      <Heading headingText="Contact Us" />
      {loading ? (
        <Loader /> 
      ) : (
      <div className="contain mt-4" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>

      <div>
      <h6 style={{fontSize:'1.3rem'}}> <span style={{fontSize:'1.2rem'}}>AB-12/406B</span> <br /> Indian Institute of Technology, Gandhinagar</h6>
      <h6><span style={{fontSize:'1rem'}}>Palaj, Gandhinagar - 382055, Gujarat</span></h6>
      <div class="container1">
      <form ref={Frm} onSubmit={sendEmail}>
          <div class="image">
            <img src={logoBlack} alt="" />
          </div>
          <center>
            <h2>Contact Us</h2>
          </center>
          <label for="email">Email Id</label>
          <input type="email" name="email" id="email" placeholder="Your email Id" />
          <label for="message" id="text-label">How can we help?</label>
          <textarea name="message" id="message" cols="60" rows="5" placeholder="Type your message here"></textarea>
          <button id="signup">Submit</button>
      </form>
    </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.2996491905476!2d72.68484713686402!3d23.213857691513315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b4fece24aa3%3A0xe87e16b866656e95!2sAcademic%20Block-12%2C%20IIT%20Gandhinagar!5e0!3m2!1sen!2sin!4v1718661485970!5m2!1sen!2sin" width="600" height="450" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      )}
      <Footer />
    </>
  )
}

export default Contact
