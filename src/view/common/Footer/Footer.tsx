import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h3 className="footer-logo">Nexus</h3>
                        <p className="footer-about">
                            Building innovative solutions for the modern world. We create digital experiences that matter.
                        </p>
                        <div className="footer-social">
                            {/*<a href="#" aria-label="Facebook"><FaFacebookF /></a>*/}
                            {/*<a href="#" aria-label="Twitter"><FaTwitter /></a>*/}
                            {/*<a href="#" aria-label="Instagram"><FaInstagram /></a>*/}
                            {/*<a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>*/}
                            {/*<a href="#" aria-label="YouTube"><FaYoutube /></a>*/}
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">App Development</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">SEO Services</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact">
                            <li>

                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li>
                                <span>info@nexus.example.com</span>
                            </li>
                            <li className="footer-address">
                                123 Business Avenue, Suite 400<br />
                                San Francisco, CA 94107
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} Nexus. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}