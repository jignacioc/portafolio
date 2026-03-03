import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import NotificationBell from "./notificationBell.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const links = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Mi", href: "/about" },
    { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    const isActive = (path) => {
        const currentPath = location.pathname.replace(/\/$/, "") || "/";
        const linkPath = path.replace(/\/$/, "") || "/";
        return currentPath === linkPath;
    };

    return (
        <nav className="relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/20 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h3 className="text-[#69c7c7] text-3xl font-bold drop-shadow-[1.5px_1.5px_0_#7836cf]">
                            JIC
                        </h3>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`font-bold transition-colors duration-300 hover:text-[#7d2dac] ${isActive(link.href) ? "text-[#7d2dac] font-extrabold" : "text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        <li className="flex items-center gap-3">
                            <NotificationBell />

                            <a
                                href="https://www.linkedin.com/in/joaquin-clark/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="h-7 w-7 cursor-pointer hover:text-[#7836cf] text-white" />
                            </a>

                            <a
                                href="https://github.com/jignacioc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub className="h-7 w-7 cursor-pointer hover:text-[#7836cf] text-white" />
                            </a>
                        </li>
                    </ul>

                    {/* Mobile right-side icons */}
                    <div className="flex md:hidden items-center gap-4 z-50">
                        <NotificationBell />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer bg-transparent border-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-7 w-7 text-white" />
                            ) : (
                                <FiMenu className="h-7 w-7 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay (mobile only) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 cursor-pointer z-40 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Sidebar móvil */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 md:translate-x-full md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={closeMenu}
                        className="cursor-pointer bg-transparent border-none"
                        aria-label="Close menu"
                    >
                        <FiX className="h-7 w-7 text-white" />
                    </button>
                </div>

                <ul className="flex flex-col space-y-6 mt-6 ml-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`text-lg font-bold transition-colors duration-300 hover:text-[#69c7c7] ${isActive(link.href) ? "text-[#7d2dac] font-extrabold" : "text-white"
                                    }`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
