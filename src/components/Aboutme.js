import React from "react";
import "../styles/Aboutme.css"
import profilePic from "../styles/assests/images/3.jpg"




function Aboutme(){

    return(
        
        <section className="landing">
        <section className="piccard">
          <img src={profilePic} alt="my  pic"/>
          <section className="info">
            <h2><bold>Nehreet kaur</bold></h2>
            <hr/>
            <p id="Aboutme">I am an experienced professional with 7+ years of experience in the Healthcare industry. I hold
              a Bachelor's degree in Internet Sciences and currently looking for opportunities as a Web Developer.. I have
              excellent verbal and written communication skills. I take great initiative in my work and have the ability to
              work as part of a team. I am a motivated individual with a drive to achieve and finish the task.I am looking
              for full-time positions in the Austin, Texas area. In addition, I am available to work remotely or on a
              part-time basis as well.</p>
    
    
          </section>
          
    
        </section>
        </section>
        

    
     

    );


}

export default Aboutme