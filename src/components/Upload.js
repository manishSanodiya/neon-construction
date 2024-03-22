import React, { useRef, useState } from "react";
import axios from "axios"; // Import Axios library
import "./upload.css";
import CryptoJS from "crypto-js";
import Score from "./Score";
import { toBeRequired } from "@testing-library/jest-dom/matchers";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [experiance, setExperiance] = useState();
  const [expReason, setExpReason] = useState("");
  const [location, setLocation] = useState();
  const [locReason, setLocReason] = useState("");
  const [skill, setSkill] = useState();
  const [skillReason, setSkillReason] = useState("");
  const [stability, setStability] = useState();
  const [stabReason, setStabReason] = useState("");
  const [overall, setOverall] = useState();
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [addDescription, setAddDescription] = useState(true);
  const [improvements, setImprovements] = useState([]);
  const [showDescription,setShowDescription] = useState(false)

  const fileInputRef = useRef(null); // Ref for file input element

  const encryptionKey = "samjho-na";

  // Function to retrieve encrypted email from local storage and decrypt it
  const getDecryptedEmailFromLocalStorage = () => {
    const encryptedEmail = localStorage.getItem("encryptedEmail");
    if (encryptedEmail) {
      const bytes = CryptoJS.AES.decrypt(encryptedEmail, encryptionKey);
      const decryptedEmail = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedEmail;
    }
    return null;
  };

  const submitHandler = async (e) => {
    // Make the submit handler asynchronous
    e.preventDefault();
    const email = getDecryptedEmailFromLocalStorage();

    // Check if file and description are provided

    if (!file) {
      alert("Please provide a resume file ");
      return;
    }
    if (email == null) {
      alert("Please Login to continue...");
      return;
    }
    let url = "";

    try {
      const formData = new FormData();
      if (!desc) {
        url =
          "https://play.scoremyresume.com/api/score/analyzewithoutdescription";

        formData.append("file", file);
        formData.append("email", email);
      } else {
        url = "https://play.scoremyresume.com/api/score/analyze";

        formData.append("file", file);
        formData.append("description", desc);
        formData.append("email", email);
      }

      setLoading(true); // Set loading to true when submitting form

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

      //  console.log(response.data); // Log response data
      const data = response.data;
      setExperiance(data.experienceMatch);
      setExpReason(data.experienceMatchReason);
      setLocation(data.location);
      setLocReason(data.locationReason);
      setSkill(data.skills);
      setSkillReason(data.skillsReason);
      setStability(data.stability);
      setStabReason(data.stabilityReason);
      setOverall(data.overall);
      console.log(data.improvements)
      setImprovements(data.improvements);
     
    
      setShowScore(true);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorText = error.response.data.error;
        console.error(errorText);

        // You may choose to display the error message to the user in a more prominent way than an alert
        alert(errorText);
      } else {
        console.error("An error occurred while fetching data:", error);

        // Handle other types of errors
        alert("An error occurred while fetching data. Please try again later.");
      }
    } finally {
      setLoading(false); // Set loading back to false when request is completed
      setFile(null);
    }
  };

  const loader = {
    width: "4rem",
    height: "4rem",
  };

  return (
    <>
      <div className="upload-first">

        <form  className="form">
        <div className="button-div">
        <button 
        autoFocus
        className="button-1" 
        onClick={(e)=>{e.preventDefault();setShowDescription(false)}}
        
        value="skills">
         <strong>Score My Resume</strong>
      
        </button>
        <button
          className="button-2"
        onClick={(e)=>{e.preventDefault();setShowDescription(true)}}
          value="stability"
        >
         <strong> With Description</strong>
        
        </button>
        </div>
          <div className="main_text">
            <h1 style={{ marginTop: ".5rem" }}> Check Score Now </h1>
            {/* <p style={{ color: "whitesmoke" }}>////////////////////</p> */}
            <div>
              <div>
                <label className="my-1">Upload resume file</label>
              </div>
              <input
                type="file"
                className="chose-file"
                ref={fileInputRef} // Attach ref to file input
                onChange={(e) => setFile(e.target.files[0])} // Set file state on change
              />
            </div>
            {/* {addDescription && (
              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <p>To check Score with Job Description click here</p>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => setAddDescription(!addDescription)}
                >
                  Add Job Description
                </button>
              </div>
            )} */}
            {showDescription && (
              <div>
                <div style={{ marginTop: "1rem" }}>
                  <label>Write a job description</label>
                </div>
                <textarea
                  className="text-area"
                  value={desc} // Bind textarea value to desc state
                  minLength={150}
                  onChange={(e) => setDesc(e.target.value)} // Set desc state on change
                  placeholder="Enter your job description under 150-1000 characters..."
                />
                <p style={{ fontSize: "12px", color: "blue" }}>
                  Accepted File Types: PDF , DOCX, DOC
                </p>
              </div>
            )}

            {/* ______suggestions__ */}
            {/* {addDescription && improvements.length > 0 && (
              <div className="suggestion">
                <h3>Suggestions</h3>
                <ol>
                  {improvements.map((data, item) => {
                    return <li key={item}>{data}</li>;
                  })}
                </ol>
              </div>
            )} */}
            <div style={{ paddingTop: "1rem" }}>
              {!loading && (
                <button className="btn-get-started-main" onClick={submitHandler}>
                  Calculate Score
                </button>
              )}
              {loading && (
                <button
                  className="btn-get-started-main"
                  style={{ paddingTop: "1rem" }}
                  type="button"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              )}
            </div>
          </div>
        </form>
        {/* <div className="upload-right">
          <h1>Score : </h1>
          {loading && (
            <div class="text-center">
              <div class="spinner-border" style={loader} role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {showScore && !loading && (
            <div className="score" style={{ paddingTop: "1.5rem" }}>
              <h3> Experience: - {experiance}</h3>
              <p>{expReason}</p>
              <h3> Location: - {location}</h3>
              <p>{locReason}</p>
              <h3> Skills: - {skill}</h3>
              <p>{skillReason}</p>
              <h3> Stability: - {stability}</h3>
              <p>{stabReason}</p>
              <h2>Overall Score is :- {overall}</h2>
              
 
            
            </div>
          )}
        </div> */}
        <div className="upload-right">
          <Score
            experiance={experiance}
            location={location}
            skill={skill}
            stability={stability}
            overall={overall}
            improvements={improvements}
            expReason={expReason}
            locReason={locReason}
            skillReason={skillReason}
            stabReason={stabReason}
            showScore={showScore}
            addDescription={addDescription}
          />
        </div>
      </div>
    </>
  );
};

export default Upload;
