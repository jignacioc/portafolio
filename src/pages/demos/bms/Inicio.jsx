import { useNavigate } from "react-router-dom";
import { PlugIcon } from "./icons.jsx";

function MeterImage() {
    return (
        <svg viewBox="0 0 200 130" className="w-44 h-28">
            <rect x="10" y="10" width="180" height="110" rx="3" fill="#f3f4f6" stroke="#d1d5db" />
            <rect x="50" y="35" width="100" height="50" fill="#dce7e3" stroke="#9ca3af" />
            <text x="100" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#374151">000000</text>
            <circle cx="170" cy="50" r="4" fill="#9ca3af" />
            <circle cx="170" cy="70" r="4" fill="#9ca3af" />
            <rect x="20" y="0" width="50" height="14" fill="#86efac" stroke="#4ade80" />
            <rect x="130" y="0" width="50" height="14" fill="#86efac" stroke="#4ade80" />
            <line x1="20" y1="115" x2="180" y2="115" stroke="#9ca3af" />
            <line x1="40" y1="20" x2="40" y2="110" stroke="#9ca3af" strokeOpacity="0.4" />
        </svg>
    );
}

function PduImage() {
    return (
        <svg viewBox="0 0 220 70" className="w-44 h-28">
            <rect x="2" y="20" width="216" height="30" rx="2" fill="#1f2937" />
            {[...Array(8)].map((_, i) => (
                <circle key={i} cx={20 + i * 24} cy={35} r="6" fill="#111827" stroke="#374151" />
            ))}
            <rect x="200" y="28" width="14" height="14" fill="#16a34a" rx="1" />
        </svg>
    );
}

function UpsImage() {
    return (
        <svg viewBox="0 0 120 160" className="w-32 h-28">
            <rect x="20" y="5" width="80" height="150" rx="3" fill="#1f2937" />
            <rect x="32" y="20" width="56" height="20" fill="#374151" stroke="#4b5563" />
            <text x="60" y="34" textAnchor="middle" fontSize="8" fill="#9ca3af" fontFamily="monospace">UPS</text>
            <rect x="32" y="50" width="56" height="6" fill="#16a34a" />
            <rect x="32" y="60" width="56" height="6" fill="#374151" />
            <rect x="32" y="70" width="56" height="6" fill="#374151" />
            <circle cx="60" cy="120" r="10" fill="#374151" stroke="#4b5563" />
        </svg>
    );
}

function EquipoCard({ nombre, tipo = "meter", onVerMas }) {
    const Img = tipo === "pdu" ? PduImage : tipo === "ups" ? UpsImage : MeterImage;
    return (
        <div className="bg-white rounded-md border border-gray-200 shadow-sm p-3 flex flex-col items-center relative">
            <span className="absolute top-2 right-2 text-green-600">
                <PlugIcon size={18} />
            </span>

            <div className="flex items-center justify-center h-32 w-full">
                <Img />
            </div>

            <p className="text-sm font-bold text-gray-800 mt-2 text-center">
                <span className="font-bold">Nombre:</span> {nombre}
            </p>

            <button
                onClick={onVerMas}
                className="mt-3 bg-emerald-700 hover:bg-emerald-800 transition-colors text-white text-xs font-medium px-5 py-1.5 rounded cursor-pointer border-none"
            >
                Ver más
            </button>
        </div>
    );
}

const EQUIPOS = [
    { nombre: "TDA PR ROL 1504" }, { nombre: "TDC PR ROL 1501" },
    { nombre: "TDC PR ROL 1502" }, { nombre: "TDC PR ROL 1503" },
    { nombre: "TDC PR ROL 1504" }, { nombre: "TDE IM ROL 1501" },
    { nombre: "TDE IM ROL 1502" }, { nombre: "TDE IM ROL 1503" },
    { nombre: "TDE IM ROL 1504" }, { nombre: "TDE PR ROL 1501" },
    { nombre: "TDE PR ROL 1502" }, { nombre: "TDE PR ROL 1503" },
    { nombre: "TDE PR ROL 1504" },
    { nombre: "PDU Raritan iX7 - 6 461 01", tipo: "pdu" },
    { nombre: "PDU Raritan iX7 - PX35085U", tipo: "pdu" },
    { nombre: "UPS Keor Mod", tipo: "ups" },
    { nombre: "TDA IM ROL 1501" }, { nombre: "TDA IM ROL 1502" },
    { nombre: "TDA IM ROL 1503" }, { nombre: "TDA IM ROL 1504" },
    { nombre: "TDA PR ROL 1501" }, { nombre: "TDA PR ROL 1502" },
];

export default function Inicio() {
    const navigate = useNavigate();

    return (
        <section className="px-8 py-6">
            <div className="text-center mb-2">
                <h1 className="text-2xl font-semibold text-gray-900">¡Bienvenido a &lt;Generico&gt;!</h1>
                <p className="text-base text-gray-700 mt-1">Estamos felices de tenerte aquí</p>
            </div>

            <p className="text-center text-sm font-semibold text-gray-700 mt-3 mb-5">
                Tienes algunos equipos:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {EQUIPOS.map((eq, i) => (
                    <EquipoCard
                        key={i}
                        nombre={eq.nombre}
                        tipo={eq.tipo}
                        onVerMas={() => navigate("/proyectos/bms-core/equipo")}
                    />
                ))}
            </div>
        </section>
    );
}
