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
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Resources</h3>
                        </div>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <div>
                            <h3> Company</h3>
                        </div>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="media">
                <ul>
                    <li><a href="#"><img src={facebook} alt="facebook"/></a> </li>
                    <li><a href="#"><img src={twitter} alt="twitter" /></a></li>
                    <li><a href="#"><img src={printerest} alt="printerest" /></a></li>
                    <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                    {/* <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#2BD0D0" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg></li> */}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
