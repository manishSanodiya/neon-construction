import React, { useState, useEffect } from "react";
import "./home.css";
import CryptoJS from 'crypto-js';

import { signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../config/config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imag from '../logo/updated-homepage-sketch.png';

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  // Encryption and decryption keys (keep them safe!)
  const encryptionKey = 'samjho-na';


  // Function to encrypt email and save to local storage
  const saveEncryptedEmailToLocalstorage = (email) => {
    const encryptedEmail = CryptoJS.AES.encrypt(email, encryptionKey).toString();
    localStorage.setItem('encryptedEmail', encryptedEmail);
  };
  const openHandle = () => {
    setOpen(!open);
  };

  
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      const email = data.user.email;
      const encryptedEmail = CryptoJS.AES.encrypt(email, encryptionKey).toString();
    localStorage.setItem('encryptedEmail', encryptedEmail);
      navigate("/upload");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      <div className="home_main">
        <div classname="main">


          <section id="header" className="sections">
            <div className="containers">
              <div className="main_container">
                <div className="main_text_home">
                  <h1>Unlock Your Potential </h1>
               
                  <h4 className="my-3" s>
                    Enhance your resume with our Resume Scorer. Evaluate your
                    ATS score and optimize your resume for success. Try it now!
                  </h4>
                  <div className="mt-3 ">
                        <NavLink
                           onClick={handleClick}
                          className="btn-get-started-main"
                        >
                          Upload Resume
                        </NavLink>
                      </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="home-right">
          <img src={imag} className="image-home"  />
        </div>

      </div>
    </>
  );
};

export default Home;
