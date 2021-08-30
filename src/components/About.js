import React from 'react';
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Welcome to the Tooltext website. Tooltext is one of the best text analyzer where you can do multiple things on your text.</p>
</div>

<h2 style={{textAlign: "center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="./images/Sales-team.jpg" alt="Jane" style={{width:"100%", height:"170px"}}/>
      <div className="container">
        <h2>Sales</h2>
        <p className="title">Works under sales Department</p>
        <p>We have best team for this department.</p>
        <p>texttoolkit@example.com</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="./images/software-development-team.jpg" alt="Mike" style={{width:"100%", height:"170px"}}/>
      <div className="container">
        <h2>Development</h2>
        <p className="title">Works under Development Department</p>
        <p>We have best team for this department.</p>
        <p>texttoolkit@example.com</p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src="/images/How-Does-a-HR-Department-Affect-an-Organization-730x410.jpg" alt="John" style={{width:"100%", height:"170px"}}/>
      <div className="container">
        <h2>Human Resource</h2>
        <p className="title">Works under HR Department</p>
        <p>We have best team for this department.</p>
        <p>texttoolkit@example.com</p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default About;
