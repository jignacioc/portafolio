import { useNavigate } from "react-router-dom";
import edificio from "../../../assets/demos/residencial/edificio.jpg";
import { BASE, Breadcrumb, Panel } from "./shared.jsx";

// Posición (en %) de cada marcador de piso sobre la imagen del edificio.
const PISOS = [
    { id: 3, top: "40%" },
    { id: 2, top: "52%" },
    { id: 1, top: "64%" },
];

const CONSUMO = [
    { mes: "May", kwh: 3420 },
    { mes: "Jun", kwh: 3910 },
    { mes: "Jul", kwh: 4280 },
    { mes: "Ago", kwh: 4105 },
    { mes: "Sep", kwh: 3760 },
    { mes: "Oct", kwh: 3590 },
];

function ConsumoChart() {
    const max = Math.max(...CONSUMO.map((c) => c.kwh));
    return (
        <div className="flex items-end justify-between gap-3 h-48 px-2">
            {CONSUMO.map((c) => (
                <div key={c.mes} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-[11px] text-gray-500">{c.kwh.toLocaleString("es-CL")}</span>
                    <div
                        className="w-full rounded-t bg-emerald-700/80"
                        style={{ height: `${(c.kwh / max) * 140}px` }}
                    />
                    <span className="text-xs text-gray-600">{c.mes}</span>
                </div>
            ))}
        </div>
    );
}

export default function Inicio() {
    const navigate = useNavigate();

    return (
        <div>
            <Breadcrumb items={[{ label: "Sitio" }]} />
            <Panel title="Edificio &lt;Generico&gt;">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 px-6 pb-6">
                    <div className="relative mx-auto max-w-md">
                        <img src={edificio} alt="Edificio residencial" className="w-full" />
                        {PISOS.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => navigate(`${BASE}/plano/${p.id}`)}
                                style={{ top: p.top }}
                                className="absolute left-[42%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white bg-[#3f5751]/90 text-white text-[10px] font-bold shadow cursor-pointer hover:scale-110 transition-transform"
                                title={`Ver plano del piso ${p.id}`}
                            >
                                PISO {p.id}
                            </button>
                        ))}
                    </div>

                    <div className="border border-gray-200 rounded-md p-5 flex flex-col">
                        <p className="text-center text-gray-700 font-medium">Consumo general del edificio (kWh)</p>
                        <div className="flex justify-center gap-3 my-3 text-sm">
                            <select className="border border-gray-300 rounded px-2 py-1"><option>2026</option></select>
                            <select className="border border-gray-300 rounded px-2 py-1"><option>Últimos 6 meses</option></select>
                        </div>
                        <ConsumoChart />
                        <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                            <div className="bg-gray-50 rounded p-3">
                                <p className="text-xs text-gray-500">Departamentos</p>
                                <p className="text-lg font-semibold text-gray-900">18</p>
                            </div>
                            <div className="bg-gray-50 rounded p-3">
                                <p className="text-xs text-gray-500">Medidores Modbus</p>
                                <p className="text-lg font-semibold text-gray-900">24</p>
                            </div>
                            <div className="bg-gray-50 rounded p-3">
                                <p className="text-xs text-gray-500">Cargadores EV</p>
                                <p className="text-lg font-semibold text-gray-900">2</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 text-center mt-4">
                            Haz clic en un piso para ver su plano y los equipos instalados.
                        </p>
                    </div>
                </div>
            </Panel>
        </div>
    );
}
