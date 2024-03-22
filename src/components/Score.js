import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren,buildStyles } from "react-circular-progressbar";
import "./score.css";

const Score = (props) => {
  const [skill, setSkill] = useState(true);
  const [location, setLocation] = useState(false);
  const [stability, setStability] = useState(false);
  const [experiance, setExperiance] = useState(false);
  return (
    <div className="main-container">
      <div className="overall_main">
        <div className="overall_progressbar">
          <CircularProgressbarWithChildren styles={buildStyles({
          pathColor: "#a0c950",
          trailColor: "#3f1766",
          strokeLinecap: "butt"
        })} value={props.overall} >
            <p>
              {" "}
              <strong>{!props.overall && 0}{props.overall}%</strong>{" "}
            </p>
            <div style={{ fontSize: 13, marginTop: -2 }}>Score</div>
          </CircularProgressbarWithChildren>
        </div>
        <div className="overall_heading">
          {/* <h3>Your resume score is - {!props.overall && 0} {props.overall} out of 100</h3> */}
          {/* <h3 style={{color:"#d8ab4e"}}>Improvements Required</h3> */}
          {props.addDescription && props.improvements.length > 0 && (
              <div className="suggestion">
                <h3>Improvements Required</h3>
                <ol>
                  {props.improvements && props.improvements.map((data, item) => {
                    return <li key={item}>{data}</li>;
                  })}
                </ol>
              </div>
            )}
        </div>
      </div>
      <h2>Breackdown</h2>
      {/* second block */}
      <div className="property_container">
        <button 
        autoFocus
        className="property_1" 
        onClick={() => {
            setStability(false);
            setSkill(true);
            setLocation(false);
            setExperiance(false);
            
          }}
        value="skills">
          Skills
          <p>
            {" "}
            <strong>{!props.stability && 0}{props.skill}%</strong>
          </p>
        </button>
        <button
          className="property_2"
          onClick={() => {
            setStability(true);
            setSkill(false);
            setLocation(false);
            setExperiance(false);
          }}
          value="stability"
        >
          Stability
          <p>
            {" "}
            <strong>{!props.stability && 0} {props.stability}%</strong>
          </p>
        </button>
        <button 
        className="property_3" 
        onClick={() => {
            setStability(false);
            setSkill(false);
            setLocation(true);
            setExperiance(false);
          }}
        value="location">
          Location
          <p>
            {" "}
            <strong>{!props.stability && 0}{props.location}%</strong>
          </p>
        </button>
        <button 
        className="property_4"
        onClick={() => {
            setStability(false);
            setSkill(false);
            setLocation(false);
            setExperiance(true);
          }}
        value="experiance">
          Experiance
          <p>
            {" "}
            <strong>{!props.stability && 0}{props.experiance}%</strong>
          </p>
        </button>
        {skill && <div className="property_5" >{props.skillReason}</div>}
       {location && <div className="property_5">{props.locReason}</div>}
       {stability && <div className="property_5">{props.stabReason}</div>}
        {experiance && <div className="property_5">{props.expReason}</div>}
      </div>
    </div>
  );
};

export default Score;
