import whitelogo from ".././images/whitelogo.svg";
import footer from "../footer/footer.css"

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
                        <h3>Features</h3>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <h3> Resources</h3>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="list-title">
                    <ul>
                        <h3> Company</h3>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="media">
                <ul>
                    <li>Fb</li>
                    <li>Twitter</li>
                    <li>Insta</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
