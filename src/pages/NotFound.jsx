import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-7xl md:text-8xl font-extrabold text-[#69c7c7] drop-shadow-[3px_3px_0_#7836cf] mb-6">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">
                Página no encontrada :/
            </h2>

            <p className="text-white/80 max-w-md mx-auto mb-10 font-bold">
                El enlace al que intentaste acceder no existe o fue movido. Pero
                tranquilo, podés volver al inicio y seguir navegando.
            </p>

            <Link
                to="/"
                className="rounded-full bg-[#69c7c7] px-8 py-3 text-lg font-bold text-[#1d1250] drop-shadow-[3px_3px_0_#7836cf] transition-all duration-150 active:translate-y-0.5 active:drop-shadow-none"
            >
                Volver al inicio
            </Link>
        </section>
    );
}
