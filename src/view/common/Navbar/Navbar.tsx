import { Link, useNavigate } from "react-router-dom";
import logo from '../../../assets/toolnest.png';
import { useEffect, useState } from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedRole = localStorage.getItem('role');
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        setUsername(null);
        setRole(null);
        navigate('/login');
    };

    return (
        <nav className="bg-[#444544] text-white flex justify-between px-10 py-5 shadow-md">
            <div className="flex items-center gap-2 text-xl font-bold">
                <img src={logo} alt="ToolNest Logo" className="h-10 w-10 rounded-full" />
                <span className="hover:text-[#90fdb6] cursor-pointer transition-transform transform hover:-translate-y-1 font-serif text-2xl">
                    ToolNest
                </span>
            </div>

            <div className="flex items-center gap-5">
                <ul className="flex gap-8 list-none m-0 p-0 font-serif text-lg">
                    {/* Customer Links */}
                    {role === 'customer' && (
                        <>
                            <li><Link to="/" className="text-white hover:text-[#90fdb6] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-white hover:text-[#90fdb6] transition-colors">About</Link></li>
                            <li><Link to="/contact" className="text-white hover:text-[#90fdb6] transition-colors">Contact</Link></li>
                            <li><Link to="/shopping-cart" className="text-white hover:text-[#90fdb6] transition-colors">My-Cart</Link></li>
                        </>
                    )}

                    {/* Admin Links */}
                    {role === 'admin' && (
                        <>
                            <li><Link to="/admin-panel" className="text-white hover:text-[#90fdb6] transition-colors">Admin Panel</Link></li>
                            <li><Link to="/manage-products" className="text-white hover:text-[#90fdb6] transition-colors">Manage Products</Link></li>
                        </>
                    )}
                </ul>

                {username ? (
                    <div className="flex items-center gap-4 font-serif text-white">
                        <button className="text-[#90fdb6] border border-[#90fdb6] px-3 py-1 rounded hover:bg-[#90fdb6] hover:text-black transition">
                            {username}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button className="bg-gradient-to-r from-[#90fdb6] to-[#1bf596] text-white font-serif px-6 py-3 rounded-lg shadow-md text-base font-bold transition-transform transform hover:-translate-y-1 hover:from-[#5eff00] hover:to-[#70dc30]">
                        <Link to="/login" className="text-black no-underline">Sign In</Link>
                    </button>
                )}
            </div>
        </nav>
    );
}
