import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./styles/global.css";
import Navbar from "./components/commons/navbar/Navbar.jsx";
import Footer from "./components/commons/footer/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Proyectos from "./pages/Proyectos.jsx";
import NotFound from "./pages/NotFound.jsx";

// Demo SCADA
import BmsLayout from "./pages/demos/bms/Layout.jsx";
import BmsLogin from "./pages/demos/bms/Login.jsx";
import BmsInicio from "./pages/demos/bms/Inicio.jsx";
import BmsAlertas from "./pages/demos/bms/Alertas.jsx";
import BmsDetalleEquipo from "./pages/demos/bms/DetalleEquipo.jsx";
import BmsSistema from "./pages/demos/bms/Sistema.jsx";
import BmsLogs from "./pages/demos/bms/Logs.jsx";

// Demo BMS Residencial (reutiliza Login y Layout de la demo SCADA)
import { BASE as RES_BASE, TITULO as RES_TITULO, ResidencialSidebar } from "./pages/demos/residencial/shared.jsx";
import ResInicio from "./pages/demos/residencial/Inicio.jsx";
import ResPlanoPiso from "./pages/demos/residencial/PlanoPiso.jsx";
import ResResidencial from "./pages/demos/residencial/Residencial.jsx";
import ResFacturacion from "./pages/demos/residencial/Facturacion.jsx";
import ResCargadoresEV from "./pages/demos/residencial/CargadoresEV.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function AppContent() {
    const location = useLocation();
    const reduceMotion = useReducedMotion();
    const isDemoBms = location.pathname.startsWith("/proyectos/bms-");

    return (
        <div className={`${isDemoBms ? "demo-shell" : "portfolio-shell"} min-h-screen bg-void text-ink flex flex-col`}>
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: reduceMotion ? 1 : 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: reduceMotion ? 1 : 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.18 }}
                    >
                        <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/proyectos" element={<Proyectos />} />

                        {/* Demo SCADA Core */}
                        <Route path="/proyectos/bms-core" element={<BmsLogin />} />
                        <Route path="/proyectos/bms-core" element={<BmsLayout />}>
                            <Route path="inicio" element={<BmsInicio />} />
                            <Route path="alertas" element={<BmsAlertas />} />
                            <Route path="equipo" element={<BmsDetalleEquipo />} />
                            <Route path="sistema" element={<BmsSistema />} />
                            <Route path="logs" element={<BmsLogs />} />
                        </Route>

                        {/* Demo BMS Residencial */}
                        <Route path={RES_BASE} element={<BmsLogin titulo={RES_TITULO} inicio={`${RES_BASE}/inicio`} />} />
                        <Route path={RES_BASE} element={<BmsLayout titulo={RES_TITULO} sidebar={<ResidencialSidebar />} />}>
                            <Route path="inicio" element={<ResInicio />} />
                            <Route path="plano/:piso" element={<ResPlanoPiso />} />
                            <Route path="residencial" element={<ResResidencial />} />
                            <Route path="facturacion" element={<ResFacturacion />} />
                            <Route path="cargadores-ev" element={<ResCargadoresEV />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <HashRouter>
            <AppContent />
        </HashRouter>
    );
}
