import SocialIcons from "../../commons/socialIcons/socialIcons.jsx";
import TypeEfect from "./typeEfect.jsx";

export default function Header() {
    return (
        <header className="relative h-screen bg-gray-950 overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-2">
                <div className="animate-gradientMove h-80 bg-linear-to-br from-[#982cf0] to-[#581f86] opacity-30 blur-[120px]"></div>
                <div className="animate-gradientMove2 h-80 bg-linear-to-br from-[#277752] to-[#02ffee] opacity-30 blur-[120px]"></div>
            </div>

            <main className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl md:text-7xl font-bold text-white text-shadow mt-10">
                    Hola, soy Joaquín Ignacio Clark
                </h1>

                <TypeEfect />

                <p className="text-xs md:text-xl text-white max-w-sm md:max-w-xl font-semibold mt-3">
                    Ingeniero en Informática y Computación (2024). Me especializo en
                    desarrollo <strong>backend</strong> y en la infraestructura que lo
                    ejecuta y despliega —contenerización, orquestación de servicios, redes
                    y observabilidad—, con experiencia real llevando software crítico de
                    telemetría a producción. Perfil técnico versátil y abierto a nuevos
                    dominios.
                </p>

                <SocialIcons />

                <a
                    href={`${import.meta.env.BASE_URL}CV_Joaquin_Clark.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-6 py-3 bg-primary hover:bg-secondary mt-3 text-white font-semibold rounded-3xl transition-all duration-150 drop-shadow-[2px_2px_0_#0debd8] active:translate-0.5 active:drop-shadow-none"
                >
                    Descargar CV
                </a>
            </main>
        </header>
    );
}
