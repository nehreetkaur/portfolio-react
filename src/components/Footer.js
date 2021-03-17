import React from "react";
import "../styles/Footer.css"
import { FaGithub ,FaMobile,FaLinkedin,FaEnvelope} from "react-icons/fa";

function Footer(){
    return(
        <>
        <footer className="contact">
        <h4 className="contactme">Contact me</h4>
        <section className="contactlinks">
          <ul>
            <li><a href="images/10.png"><FaMobile size={100}/> </a></li>
            <li><a href="images/10.png"> <FaEnvelope/> </a></li>
            <li id="contactme"><a href="https://github.com/nehreetkaur" target="_"><FaGithub/></a>
            </li>
            <li><a href="https://www.linkedin.com/in/nehreet-kaur-063558180/" target="_"><FaLinkedin/>
                </a>
            </li>
          </ul>
    
        </section>
    
      </footer>
    
      <section className="outer-footer">
    
            
      </section>
      </>

    )
}

export default Footer;