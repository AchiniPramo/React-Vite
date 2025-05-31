// import './Footer.css';
//
// export function Footer() {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-grid">
//                     <div className="footer-column">
//                         <h3 className="footer-logo">ToolNest</h3>
//                         <p className="footer-about">
//                             Building innovative solutions for the modern world. We create digital experiences that matter.
//                         </p>
//                         <div className="footer-social">
//                             {/*<a href="#" aria-label="Facebook"><FaFacebookF /></a>*/}
//                             {/*<a href="#" aria-label="Twitter"><FaTwitter /></a>*/}
//                             {/*<a href="#" aria-label="Instagram"><FaInstagram /></a>*/}
//                             {/*<a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>*/}
//                             {/*<a href="#" aria-label="YouTube"><FaYoutube /></a>*/}
//                         </div>
//                     </div>
//
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Quick Links</h4>
//                         <ul className="footer-links">
//                             <li><a href="#">Home</a></li>
//                             <li><a href="#">About Us</a></li>
//                             <li><a href="#">Services</a></li>
//                             <li><a href="#">Portfolio</a></li>
//                             <li><a href="#">Blog</a></li>
//                         </ul>
//                     </div>
//
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Services</h4>
//                         <ul className="footer-links">
//                             <li><a href="#">Web Design</a></li>
//                             <li><a href="#">App Development</a></li>
//                             <li><a href="#">Digital Marketing</a></li>
//                             <li><a href="#">SEO Services</a></li>
//                             <li><a href="#">UI/UX Design</a></li>
//                         </ul>
//                     </div>
//
//                     <div className="footer-column">
//                         <h4 className="footer-heading">Contact Us</h4>
//                         <ul className="footer-contact">
//                             <li>
//
//                                 <span>+1 (555) 123-4567</span>
//                             </li>
//                             <li>
//                                 <span>info@ToolNest.example.com</span>
//                             </li>
//                             <li className="footer-address">
//                                 123 Business Avenue, Suite 400<br />
//                                 San Francisco, CA 94107
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//
//                 <div className="footer-bottom">
//                     <p className="footer-copyright">
//                         &copy; {new Date().getFullYear()} ToolNest. All rights reserved.
//                     </p>
//                     <div className="footer-legal">
//                         <a href="#">Privacy Policy</a>
//                         <a href="#">Terms of Service</a>
//                         <a href="#">Cookie Policy</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

export function Footer() {
    return (
        <footer className="bg-neutral-700 text-white font-sans">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
                    {/* Column 1 - Logo/About */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold mb-5 relative inline-block after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[3px] after:bg-cyan-400">
                            ToolNest
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-5">
                            Building innovative solutions for the modern world. We create digital experiences that matter.
                        </p>
                        <div className="flex gap-3 mt-3">
                            {/* Example placeholders for social icons */}
                            {/* Replace with actual icons */}
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-400 transition-transform transform hover:-translate-y-1">
                                F
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-cyan-400 transition-transform transform hover:-translate-y-1">
                                T
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-cyan-400">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {["Home", "About Us", "Services", "Portfolio", "Blog"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-transform transform hover:translate-x-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-cyan-400">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {["Web Design", "App Development", "Digital Marketing", "SEO Services", "UI/UX Design"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-transform transform hover:translate-x-1">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-cyan-400">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>+1 (555) 123-4567</li>
                            <li>info@ToolNest.example.com</li>
                            <li>
                                <address className="not-italic leading-relaxed">
                                    123 Business Avenue, Suite 400<br />
                                    San Francisco, CA 94107
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 py-6 flex flex-col items-center text-center space-y-3">
                    <p className="text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} ToolNest. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-xs text-gray-400">
                        <a href="#" className="hover:text-cyan-400">Privacy Policy</a>
                        <a href="#" className="hover:text-cyan-400">Terms of Service</a>
                        <a href="#" className="hover:text-cyan-400">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}