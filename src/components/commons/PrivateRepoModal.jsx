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
                        className="tech-panel relative w-full max-w-md bg-panel px-7 py-8 text-center"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Cerrar"
                            className="absolute top-3 right-3 cursor-pointer border-none bg-transparent text-muted hover:text-phosphor"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                        <h3
                            id="private-repo-title"
                            className="mb-3 text-2xl font-semibold text-phosphor"
                        >
                            Repositorio privado
                        </h3>

                        <p className="text-muted">
                            Este repositorio es privado.
                        </p>

                        <button
                            onClick={onClose}
                            className="terminal-button terminal-button--solid mt-6 cursor-pointer"
                        >
                            Entendido
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
