import { Link } from "react-router-dom";
import SocialIcons from "../socialIcons/socialIcons.jsx";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between px-6 py-12 lg:flex-row lg:px-20">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <h3 className="text-[#69c7c7] text-4xl font-bold drop-shadow-[1.5px_1.5px_0_#7836cf]">
                        JIC
                    </h3>
                </Link>

                {/* Navigation Links */}
                <nav className="mb-4 lg:mb-0">
                    <ul className="flex flex-col items-center space-y-2 text-gray-400 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-6">
                        <li>
                            <Link to="/" className="hover:text-[#552496] font-semibold text-gray-400">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/proyectos" className="hover:text-[#552496] font-semibold text-gray-400">
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#552496] font-semibold text-gray-400">
                                Sobre Mí
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#552496] font-semibold text-gray-400">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <SocialIcons />
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full border-t border-gray-600 py-10 text-center text-sm text-gray-500">
                joaquinignacioclark@gmail.com
            </div>
        </footer>
    );
}
