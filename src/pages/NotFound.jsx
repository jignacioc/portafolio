import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="site-grid relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
            <div className="relative z-10">
            <p className="mb-4 font-technical text-sm text-phosphor">$ resolve_route</p>
            <h1 className="mb-6 text-7xl font-semibold text-phosphor md:text-8xl">
                404
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-ink md:text-3xl">
                Página no encontrada :/
            </h2>

            <p className="mx-auto mb-10 max-w-md text-muted">
                El enlace al que intentaste acceder no existe o fue movido. Pero
                tranquilo, podés volver al inicio y seguir navegando.
            </p>

            <Link
                to="/"
                className="terminal-button terminal-button--solid"
            >
                Volver al inicio
            </Link>
            </div>
        </section>
    );
}
