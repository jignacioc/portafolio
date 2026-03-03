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
                    Ingeniero en Informática especializado en backend, DevOps e IoT/OT.
                    Diseño y opero arquitecturas distribuidas que conectan protocolos
                    industriales, integridad de datos transaccionales y observabilidad de
                    punta a punta incluso en entornos aislados.
                </p>

                <SocialIcons />

                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Próximamente");
                    }}
                    className="px-6 py-3 bg-primary hover:bg-secondary mt-3 text-white font-semibold rounded-3xl transition-all duration-150 drop-shadow-[2px_2px_0_#0debd8] active:translate-0.5 active:drop-shadow-none"
                >
                    CV Próximamente
                </a>
            </main>
        </header>
    );
}
