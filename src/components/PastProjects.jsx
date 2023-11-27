import React, { useEffect, useState } from "react";

import Card from "./Card";
import { ProjectData } from "./Data/ProjectData";

const PastProjects = () => {
    const [image,setImage]=useState([])
    useEffect(()=>{
      setImage(ProjectData )
    },[])
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Previous Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                image.map((val,index)=>{
                  return <Card
                  key={index}
                   imgsrc={val.imgsrc}
                   title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastProjects;