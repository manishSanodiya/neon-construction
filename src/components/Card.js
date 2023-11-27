import React from "react";
import images from "../asssets/svg/img2.webp";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>

              <div className="col-md-4 col-10 mx-auto w-20 h-auto">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top" alt={props.title} />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>

                    <NavLink to="/" className="btn-details">
                    Details
                    </NavLink>
                  </div>
                </div>
              </div>
     
    </>
  );
};

export default Card;