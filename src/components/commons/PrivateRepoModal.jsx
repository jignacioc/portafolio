import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function PrivateRepoModal({ open, onClose }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="private-repo-title"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="relative w-full max-w-md rounded-xl bg-gray-900 border border-white/10 px-7 py-8 text-center drop-shadow-[4px_4px_0_#7836cf]"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Cerrar"
                            className="absolute top-3 right-3 text-white/60 hover:text-white bg-transparent border-none cursor-pointer"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                        <h3
                            id="private-repo-title"
                            className="text-2xl font-bold text-[#69c7c7] drop-shadow-[2px_2px_0_#7836cf] mb-3"
                        >
                            Repositorio privado
                        </h3>

                        <p className="text-white/80 font-semibold">
                            Este repositorio es privado.
                        </p>

                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-2 cursor-pointer border-none bg-[#69c7c7] text-[#1d1250] font-bold rounded-full hover:bg-[#46caca] drop-shadow-[2px_2px_0_#7836cf] active:translate-y-0.5 active:drop-shadow-none transition-all"
                        >
                            Entendido
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
