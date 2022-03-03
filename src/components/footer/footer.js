import whitelogo from "../images/whitelogo.svg";
import footer from "../footer/footer.css";
import facebook from "../images/icon-facebook.svg";
import twitter  from "../images/icon-twitter.svg";
import printerest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";


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
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Resources</h3>
                        </div>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Company</h3>
                        </div>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="media">
                <ul>
                    <li><img src={facebook} alt="facebook"/></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={printerest} alt="printerest" /></li>
                    <li><img src={instagram} alt="Instagram" /></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
