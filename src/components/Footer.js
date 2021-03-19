import React from "react";
import "../styles/Footer.css"
import { FaGithub ,FaMobile,FaLinkedin,FaEnvelope} from "react-icons/fa";
import  pic  from "../styles/assests/images/10.png"

function Footer(){
    return(
        <>
        <footer id="contact" className="contact">
        <h4 className="contactme">Contact me</h4>
        <section className="contactlinks">
          <ul>
            <li><a href={pic}><FaMobile size={35}/> </a></li>
            <li><a href={pic}> <FaEnvelope size={35}/> </a></li>
            <li id="contactme"><a href="https://github.com/nehreetkaur" target="_"><FaGithub size={35}/></a>
            </li>
            <li><a href="https://www.linkedin.com/in/nehreet-kaur-063558180/" target="_"><FaLinkedin size={35}/>
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