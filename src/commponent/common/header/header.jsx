import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderLogo } from "../../../assets/images";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const RESOURCES_MENU = [
        { id: 1, text: "Request a Demo", path: "/request/demo" },
        { id: 2, text: "Blogs", path: "/blogs" },
        { id: 3, text: "Case Studies", path: "/case/studies" },
        { id: 4, text: "Pricing", path: "/princing" },
        { id: 5, text: "Contact Us", path: "/contact/us" },
    ];

    const HEADER_LINKS = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "Product", path: "/product" },
        { id: 3, text: "Why dot.it", path: "/why/dot/it" },
        { id: 4, text: "Resources", path: "#" },
    ];

    return (
        <header className="bg-white/20 py-3 md:py-[22px] sticky top-0 left-0 z-50 shadow-xs backdrop-blur-lg">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link to={`/`}>
                        <img src={HeaderLogo} alt="logo" height={35} width={97} loading="lazy" />
                    </Link>
                    <ul className="hidden md:flex items-center gap-12 relative">
                        {HEADER_LINKS.map((item) => (
                            <li key={item.id} className="relative group">

                                {item.text !== "Resources" ? (
                                    <Link 
                                        to={item.path}
                                         onClick={() => setActiveId(item.id)}
                                        className={`relative text-[#002B5A] text-lg font-medium hover:text-[#0160C9] duration-200
                                                   before:absolute before:-top-2 before:-left-2 before:-translate-x-1/2
                                                   before:w-2 before:h-2 before:rounded-full before:bg-[#0160C9] before:opacity-0
                                                   group-hover:before:opacity-100 before:transition-opacity before:duration-200 ${activeId === item.id ? "text-[#0160C9] before:opacity-100" : ""}`}
                                    >
                                        {item.text}
                                    </Link>
                                ) : (
                                    <div
                                        className={`relative flex items-center text-lg font-medium cursor-pointer select-none duration-200 
                                                    ${openDropdown ? "text-[#0160C9]" : "text-[#002B5A]"}`}
                                        onClick={() => setOpenDropdown(prev => !prev)}
                                    >
                                        Resources

                                        <svg
                                            className={`ml-1 w-5 h-5 transition-transform duration-200 
                                                    ${openDropdown ? "rotate-180" : "rotate-0"}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                        </svg>

                                        <div
                                            className={`absolute top-8 left-0 bg-white shadow-xl rounded-xl py-4 px-4 w-48
                                                        transition-all duration-200 origin-top 
                                                        ${openDropdown ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                                                }`}
                                        >
                                            {RESOURCES_MENU.map((menu) => (
                                                <Link 
                                                    key={menu.id}
                                                    to={menu.path}
                                                    className="block text-gray-700 text-sm py-2 px-2 rounded-md 
                                                               hover:bg-gray-100 hover:text-[#0160C9] duration-200"
                                                >
                                                    {menu.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Link to="https://tally.so/r/315L24" target="blank" className="hidden md:block bg-[#0160C9] cursor-pointer py-2.5 px-5 rounded-full text-white text-sm font-semibold hover:bg-[#014fa8] transition-all duration-200">
                        Get Started
                    </Link>

                    <button
                        className="md:hidden flex flex-col gap-1 cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={`block h-[3px] w-6 bg-[#002B5A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`} />
                        <span className={`block h-[3px] w-6 bg-[#002B5A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                            }`} />
                        <span className={`block h-[3px] w-6 bg-[#002B5A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`} />
                    </button>
                </nav>
                <div
                    className={`md:hidden bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 
                                ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                            `}
                >
                    <ul className="flex flex-col p-4 gap-3">

                        {HEADER_LINKS.map(item => (
                            <li key={item.id} className="border-b pb-2">

                                {item.text !== "Resources" ? (
                                    <Link
                                        to={item.path}
                                        className="block text-[#002B5A] text-base font-medium hover:text-[#0160C9] duration-200"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.text}
                                    </Link>
                                ) : (
                                    <>
                                        <div
                                            className="flex items-center justify-between text-[#002B5A] text-base font-medium cursor-pointer"
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            Resources

                                            <svg
                                                className={`w-5 h-5 transition-transform duration-200 
                                                    ${openDropdown ? "rotate-180" : "rotate-0"}`}
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        <div className={`pl-3 mt-2 transition-all duration-200 ${openDropdown ? "block" : "hidden"}`}>
                                            {RESOURCES_MENU.map(menu => (
                                                <Link
                                                    key={menu.id}
                                                    to={menu.path}
                                                    className="block py-2 text-sm text-gray-700 hover:text-[#0160C9]"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {menu.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}

                            </li>
                        ))}

                        <Link to="https://tally.so/r/315L24" target="blank" className="bg-[#0160C9] py-2 mt-2 rounded-full flex justify-center text-white text-sm font-semibold hover:bg-[#014fa8] transition-all duration-200">
                            Get Started
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
}

