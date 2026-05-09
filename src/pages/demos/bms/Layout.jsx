import { Outlet, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar.jsx";

export default function BmsLayout() {
    const location = useLocation();

    return (
        <div className="bg-gray-50 text-gray-900">
            <div className="bg-white border-b border-gray-200 px-6 py-2 text-xs flex items-center justify-between">
                <span className="text-gray-500">
                    Demo · BMS Core Platform (&lt;Generico&gt;)
                </span>
                <Link
                    to="/proyectos"
                    className="text-emerald-700 hover:underline font-medium"
                >
                    ← Volver a Proyectos
                </Link>
            </div>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 overflow-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
