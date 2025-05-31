// import './Navbar.css';
// import {Link} from "react-router-dom";
// import logo from '../../../assets/logo.webp';
//
// export function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <img src={logo} alt="ToolNest Logo" style={{ height: '40px', marginRight: '10px' }} />
//                 <span className="navbar">ToolNest</span>
//             </div>
//             <div className="navbar-right-links">
//             <ul className="navbar-links">
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//
//             <button>
//                 <Link to="/login">Sign In</Link>
//             </button>
//             </div>
//         </nav>
//     );
// }

import { Link } from "react-router-dom";
import logo from '../../../assets/toolnest.png';

export function Navbar() {
    return (
        <nav className="bg-[#444544] text-white flex justify-between px-10 py-5 shadow-md">
            <div className="flex items-center gap-2 text-xl font-bold">
                <img src={logo} alt="ToolNest Logo" className="h-10 w-10 rounded-full" />
                <span className="hover:text-[#90fdb6] cursor-pointer transition-transform transform hover:-translate-y-1 font-serif text-2xl">ToolNest</span>
            </div>

            <div className="flex items-center gap-5">
                <ul className="flex gap-8 list-none m-0 p-0 font-serif text-lg">
                    <li>
                        <Link to="/" className="text-white hover:text-[#90fdb6] transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-[#90fdb6] transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-[#90fdb6] transition-colors">Contact</Link>
                    </li>
                </ul>

                <button className="bg-gradient-to-r from-[#90fdb6] to-[#1bf596] text-white font-serif px-6 py-3 rounded-lg shadow-md text-base font-bold transition-transform transform hover:-translate-y-1 hover:from-[#5eff00] hover:to-[#70dc30]">
                    <Link to="/login" className="text-black no-underline">Sign In</Link>
                </button>
            </div>
        </nav>
    );
}

