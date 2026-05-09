import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EyeIcon, EyeOffIcon } from "./icons.jsx";

function GenericLogo() {
    return (
        <div
            className="flex items-center justify-center select-none border-2 border-dashed border-gray-400 rounded-lg bg-white/40 text-gray-500 font-mono text-xl px-10 py-16"
            style={{ minWidth: 360 }}
        >
            &lt;Logo Generico&gt;
        </div>
    );
}

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPwd] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/proyectos/bms-core/inicio");
    };

    return (
        <div className="min-h-screen w-full bg-[#f1f4f6] flex flex-col">
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

            <div className="flex-1 flex items-center justify-center px-8">
                <motion.div
                    className="w-full max-w-6xl flex items-center justify-around gap-12"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="hidden md:block">
                        <GenericLogo />
                    </div>

                    <div className="bg-white rounded-2xl shadow-md w-[420px] p-10">
                        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-7">
                            Iniciar Sesión
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Usuario"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    className="w-full border border-gray-700 rounded-full px-5 py-3 text-base text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-700 rounded-full px-5 py-3 pr-12 text-base text-gray-800 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPwd((s) => !s)}
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900 bg-transparent border-none cursor-pointer"
                                >
                                    {showPassword ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3f5751] hover:bg-[#344843] transition-colors text-white font-medium text-base rounded-full py-3 mt-2 cursor-pointer border-none"
                            >
                                Iniciar sesión
                            </button>
                        </form>

                        <div className="mt-5 text-center text-sm">
                            <p className="text-gray-700">
                                ¿Olvidaste tu contraseña? o ¿Necesitas registrarte?
                            </p>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="block mt-1 text-[#3f5751] font-semibold hover:underline"
                            >
                                Contácta al administrador
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
