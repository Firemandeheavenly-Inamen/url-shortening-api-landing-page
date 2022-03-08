import whitelogo from "../../images/whitelogo.svg";
import  "./footer.css";
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {SiPinterest} from "react-icons/si";
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <div className="wrapper">
            <div className="logo">
                <img src={whitelogo} alt=""/>
            </div>
            <div className="list">
                <div className="list-title">
                    <ul>
                        <div>
                           <h3>Features</h3> 
                        </div>
                        <li><a href="/">Link Shortening</a></li>
                        <li><a href="/">Branded Links</a></li>
                        <li><a href="/">Analytics</a></li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Resources</h3>
                        </div>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Company</h3>
                        </div>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="social-media">
                <div className="media">
                    <FaFacebookSquare className="hoover_state" />
                    <FaTwitter className="hoover_state"/>
                    <SiPinterest className="hoover_state"/>
                    <BsInstagram className="hoover_state"/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
