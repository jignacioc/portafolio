import { Link } from "react-router-dom";
import { HomeIcon, BellIcon, BoltIcon, FilterIcon } from "./icons.jsx";

function TopBar() {
    return (
        <div className="relative flex items-center px-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
                <HomeIcon size={16} />
                <Link to="/proyectos/bms-core/inicio" className="text-emerald-700 font-medium hover:underline">
                    Inicio
                </Link>
                <span className="text-gray-400">&gt;</span>
                <BoltIcon size={16} />
                <span className="text-gray-800">Gestión Energética</span>
            </div>

            <button className="ml-auto relative text-red-500 hover:text-red-600 bg-transparent border-none cursor-pointer">
                <BellIcon size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
        </div>
    );
}

function ConsumoGeneralChart() {
    const value = 2212.79;
    const yTicks = [2500, 2000, 1500, 1000, 500, 0];
    const max = 2500;
    const barH = (value / max) * 220;
    return (
        <div className="bg-white">
            <p className="text-center text-sm font-semibold text-gray-700 mb-4">Consumo Eléctrico (kWh)</p>
            <div className="flex justify-center items-center gap-2 mb-3 text-xs text-gray-700">
                <span className="inline-block w-4 h-4 bg-sky-300"></span>
                <span>kWh: 2212.789999999996</span>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-between text-[11px] text-gray-600 pr-2 h-[240px] py-1 items-end">
                    {yTicks.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="relative flex-1 h-[240px] border-l border-b border-gray-300">
                    {yTicks.slice(0, -1).map((_, i) => (
                        <div key={i} className="absolute left-0 right-0 border-t border-gray-200"
                            style={{ top: `${(i / (yTicks.length - 1)) * 100}%` }} />
                    ))}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 bg-sky-300 border border-sky-400" style={{ height: barH }}></div>
                </div>
            </div>
            <p className="text-center text-xs text-gray-700 mt-2">2025-06</p>
        </div>
    );
}

const SUBSITIO_DATA = [
    { eq: "TDE PR ROL 1501", v: 580, color: "#dc2626" },
    { eq: "TDE IM ROL 1503", v: 40, color: "#86efac" },
    { eq: "TDE IM ROL 1501", v: 35, color: "#86efac" },
    { eq: "TDC PR ROL 1503", v: 175, color: "#bef264" },
    { eq: "TDC PR ROL 1501", v: 35, color: "#86efac" },
    { eq: "TDA PR ROL 1501", v: 230, color: "#bef264" },
    { eq: "TDA PR ROL 1502", v: 210, color: "#bef264" },
    { eq: "TDA IM ROL 1504", v: 175, color: "#bef264" },
    { eq: "TDA IM ROL 1502", v: 60, color: "#86efac" },
    { eq: "PDU Raritan iX7 - PX35085U", v: 40, color: "#86efac" },
    { eq: "TDE PR ROL 1504", v: 165, color: "#bef264" },
    { eq: "TDE PR ROL 1503", v: 55, color: "#86efac" },
];

function ConsumoSubsitioChart() {
    const yTicks = [1000, 500, 0];
    const max = 1000;
    return (
        <div className="bg-white">
            <p className="text-center text-sm font-semibold text-gray-700 mb-4">Consumo Eléctrico (kWh)</p>
            <div className="flex justify-center items-center gap-2 mb-3 text-xs text-gray-700">
                <span className="inline-block w-4 h-4 bg-red-500"></span>
                <span>kWh</span>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-between text-[11px] text-gray-600 pr-2 h-[240px] py-1 items-end">
                    {yTicks.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="relative flex-1 h-[240px] border-l border-b border-gray-300">
                    {yTicks.map((_, i) => (
                        <div key={i} className="absolute left-0 right-0 border-t border-gray-200"
                            style={{ top: `${(i / (yTicks.length - 1)) * 100}%` }} />
                    ))}
                    <div className="absolute inset-0 flex items-end justify-around px-2">
                        {SUBSITIO_DATA.map((d, i) => (
                            <div key={i} className="flex-1 mx-0.5 h-full flex items-end" style={{ maxWidth: 24 }}>
                                <div className="w-full" style={{ height: `${(d.v / max) * 100}%`, backgroundColor: d.color, border: "1px solid rgba(0,0,0,0.1)" }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex pl-7 mt-1">
                <div className="flex-1 flex justify-around items-start">
                    {SUBSITIO_DATA.map((d, i) => (
                        <div key={i} className="flex-1 flex justify-center" style={{ maxWidth: 24 }}>
                            <span className="text-[10px] text-gray-700 origin-top-left whitespace-nowrap"
                                style={{ transform: "rotate(45deg)", display: "inline-block", marginTop: 4, marginLeft: 4 }}>
                                {d.eq}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AlertasActivas() {
    return (
        <div className="bg-white">
            <h3 className="text-center text-lg font-semibold text-gray-500 mb-4">ALERTAS ACTIVAS</h3>
            <div className="grid grid-cols-4 px-6 py-2 text-xs font-bold text-gray-700">
                <span>LUGAR</span>
                <span>HORA</span>
                <span>DESCRIPCIÓN</span>
                <span>NIVEL</span>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-md py-4 text-center text-sm text-gray-700">
                No hay alertas activas.
            </div>
        </div>
    );
}

export default function GestionEnergetica() {
    return (
        <div className="bg-gray-50">
            <TopBar />

            <div className="px-6 pb-8 pt-6">
                <div className="bg-white border border-gray-200 rounded-md shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200 rounded-t-md">
                        <h1 className="text-2xl font-bold text-gray-800">Gestión Energética</h1>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded shadow-sm cursor-pointer border-none">
                            Reporte PDF
                        </button>
                    </div>

                    <div className="px-6 py-4 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                            <FilterIcon size={16} />
                            <span className="font-medium">Filtrar por:</span>
                            <div className="border border-gray-300 rounded px-4 py-1.5 text-sm text-gray-700">
                                Andrés Bello 2457, Torre 2, Piso 15.
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Año:</span>
                                <div className="border border-gray-300 rounded px-3 py-1 text-sm">2025</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Mes:</span>
                                <div className="border-2 border-sky-400 rounded px-3 py-1 text-sm">Junio</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pt-2 pb-6">
                        <div className="border border-gray-200 rounded-md p-4">
                            <h2 className="text-center text-xl text-gray-500 font-semibold mb-2">CONSUMO GENERAL</h2>
                            <ConsumoGeneralChart />
                        </div>
                        <div className="border border-gray-200 rounded-md p-4">
                            <h2 className="text-center text-xl text-gray-500 font-semibold mb-2">CONSUMO SUBSITIO</h2>
                            <ConsumoSubsitioChart />
                        </div>
                    </div>

                    <div className="px-6 pb-6">
                        <div className="border border-gray-200 rounded-md p-4">
                            <AlertasActivas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
