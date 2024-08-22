import { useState } from "react";
import "./Contact.css"
import theme_pattern  from '../../assets/theme_pattern.svg'
import mail_icon  from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); 
    const formData = new FormData(event.target);

    formData.append("access_key", "5a1dd287-b11b-49b2-8394-953c36d161b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(data.message);
    }
  };


  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>I am actively seeking new opportunities where I can contribute my skills and grow professionally. Lets connect!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>futyi1996@hotmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt="" />
            <p>416-704-5438</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Canada, Toronto, Ontario</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  )
}

export default Contact