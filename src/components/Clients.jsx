import React from 'react'
import logo1 from "../asssets/clients/aladdin-systems.svg"
import logo2 from "../asssets/clients/Steady_company_logo.svg.png"
import logo3 from "../asssets/clients/amberwave-systems-43841.svg"
import logo4 from "../asssets/clients/vodafone-2017-logo-1.svg"
import logo5 from "../asssets/clients/valeo-logo-1.svg"
import logo6 from "../asssets/clients/spotify-1-logo-svgrepo-com (1).svg"
import logo7 from "../asssets/clients/p-o-cruises-2.svg"
import logo8 from "../asssets/clients/o-p-panini.svg"


const Clients = () => {
  return (
    <div className="logos">
        <h1>Our Regular Clients</h1>
    <div className="logos-slide">
      <img src={logo1} />
      <img src={logo2} />
      <img src={logo3} />
      <img src={logo4} />
      <img src={logo5} />
      <img src={logo6} />
      <img src={logo7} />
      <img src={logo8} />
    </div>

    <div className="logos-slide">
    <img src={logo1} />
      <img src={logo2} />
      <img src={logo3} />
      <img src={logo4} />
      <img src={logo5} />
      <img src={logo6} />
      <img src={logo7} />
      <img src={logo8} />
    </div>
  </div>
  )
}

export default Clients