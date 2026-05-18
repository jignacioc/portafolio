import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/global.css";
import Navbar from "./components/commons/navbar/Navbar.jsx";
import Footer from "./components/commons/footer/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import NotFound from "./pages/NotFound.jsx";

// Demo BMS
import BmsLayout from "./pages/demos/bms/Layout.jsx";
import BmsLogin from "./pages/demos/bms/Login.jsx";
import BmsInicio from "./pages/demos/bms/Inicio.jsx";
import BmsAlertas from "./pages/demos/bms/Alertas.jsx";
import BmsDetalleEquipo from "./pages/demos/bms/DetalleEquipo.jsx";
import BmsGestionEnergetica from "./pages/demos/bms/GestionEnergetica.jsx";
import BmsSistema from "./pages/demos/bms/Sistema.jsx";
import BmsLogs from "./pages/demos/bms/Logs.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <div className="bg-gray-950 text-white min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/proyectos" element={<Proyectos />} />

                        {/* Demo BMS Core */}
                        <Route path="/proyectos/bms-core" element={<BmsLogin />} />
                        <Route path="/proyectos/bms-core" element={<BmsLayout />}>
                            <Route path="inicio" element={<BmsInicio />} />
                            <Route path="alertas" element={<BmsAlertas />} />
                            <Route path="equipo" element={<BmsDetalleEquipo />} />
                            <Route path="gestion-energetica" element={<BmsGestionEnergetica />} />
                            <Route path="sistema" element={<BmsSistema />} />
                            <Route path="logs" element={<BmsLogs />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
}
