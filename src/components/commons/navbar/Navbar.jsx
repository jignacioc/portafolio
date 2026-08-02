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
    const [hovered, setHovered] = useState(false);
    const location = useLocation();

    const closeMenu = () => setIsOpen(false);

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);

    const isDemoBms = location.pathname.startsWith("/proyectos/bms-core");
    const isCollapsed = isDemoBms && !hovered && !isOpen;

    const isActive = (path) => {
        const currentPath = location.pathname.replace(/\/$/, "") || "/";
        const linkPath = path.replace(/\/$/, "") || "/";
        return currentPath === linkPath;
    };

    return (
        <header className="relative font-technical">
            {/* Hover trigger (solo en demo, md+) */}
            {isDemoBms && (
                <div
                    className="hidden md:block fixed top-0 left-0 w-full h-3 z-[60]"
                    onMouseEnter={() => setHovered(true)}
                />
            )}

            {/* Navbar */}
            <nav
                aria-label="Navegación principal"
                onMouseEnter={() => isDemoBms && setHovered(true)}
                onMouseLeave={() => isDemoBms && setHovered(false)}
                className={`fixed top-0 left-0 w-full z-50 border-b border-line transition-transform duration-300 ease-out ${isDemoBms ? "bg-void" : "bg-void/90 backdrop-blur-md"
                    } ${isCollapsed ? "md:-translate-y-[calc(100%-6px)]" : "translate-y-0"
                    }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2" aria-label="JIGNACIOC — Inicio">
                        <span className="text-phosphor text-xl" aria-hidden="true">&gt;_</span>
                        <h3 className="text-ink text-lg font-semibold tracking-[0.18em]">
                            JIGNACIOC
                        </h3>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center space-x-7">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`nav-link text-xs uppercase tracking-[0.12em] transition-colors duration-200 hover:text-phosphor ${isActive(link.href) ? "nav-link--active text-phosphor" : "text-muted"
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
                                <FaLinkedinIn className="h-5 w-5 cursor-pointer text-muted transition-colors hover:text-phosphor" />
                            </a>

                            <a
                                href="https://github.com/jignacioc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub className="h-5 w-5 cursor-pointer text-muted transition-colors hover:text-phosphor" />
                            </a>
                        </li>
                    </ul>

                    {/* Mobile right-side icons */}
                    <div className="z-50 flex items-center gap-4 md:hidden">
                        <NotificationBell />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer bg-transparent border-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-7 w-7 text-ink" />
                            ) : (
                                <FiMenu className="h-7 w-7 text-ink" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay (mobile only) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 cursor-pointer z-40 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Sidebar móvil */}
            <div
                className={`fixed top-0 right-0 h-full w-64 border-l border-line bg-panel shadow-2xl transform transition-transform duration-300 z-50 md:translate-x-full md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={closeMenu}
                        className="cursor-pointer bg-transparent border-none"
                        aria-label="Close menu"
                    >
                        <FiX className="h-7 w-7 text-ink" />
                    </button>
                </div>

                <ul className="flex flex-col space-y-6 mt-6 ml-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`nav-link text-sm uppercase tracking-[0.12em] transition-colors duration-200 hover:text-phosphor ${isActive(link.href) ? "nav-link--active text-phosphor" : "text-muted"
                                    }`}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
