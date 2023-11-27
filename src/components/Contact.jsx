
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("it is a fully functional contact its values are sent to a specific email that can be set and email js library is used for this functionality");

  const sendEmail = (e) => {
    e.preventDefault();
// keys and dependencies for email js libraby
    const serviceId= 'service_hglfdjr';
    const tamplateId='template_p9f058b';
    const publicKey= 'FTuxZA3uaqSaT_2y6';
    
    //create an object that contains the tamplate params for sending the mail to specific email address
    const tamplateParams = {
      from_name: name,
      from_email: email,
      to_name: "sam sam",
      message: message,
    }

    //send email using email js library
    emailjs.send(serviceId, tamplateId, tamplateParams,publicKey)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       setName('');
       setEmail('');
       setMessage('');
    }).catch((error)=>{
      console.error("error sending email",error)
    })

    
  };
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="user_email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_name"
                  value={email}
                  id="exampleFormControlInput1"
                  
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                  
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn-details"  >Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
