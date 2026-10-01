import { useState } from "react";
import { PlugIcon, PinIcon } from "../bms/icons.jsx";
import { Breadcrumb, Panel, SearchBox, Table, Tabs, clp } from "./shared.jsx";

const CARGADORES = [
    { nombre: "Cargador GREEN-UP E1", estacionamiento: "E-01", estado: "Disponible", precio: 180 },
    { nombre: "Cargador GREEN-UP E2", estacionamiento: "E-02", estado: "Cargando", precio: 180, progreso: 62 },
];

const SESIONES = [
    ["29-10-2026 21:14", "E-01", "Depto 101", "15,0 kWh", "14,6 kWh", clp(14.6 * 180), "Finalizada"],
    ["28-10-2026 19:02", "E-02", "Depto 204", "20,0 kWh", "19,6 kWh", clp(19.6 * 180), "Finalizada"],
    ["26-10-2026 08:40", "E-01", "Depto 305", "12,0 kWh", "11,6 kWh", clp(11.6 * 180), "Finalizada"],
    ["24-10-2026 22:31", "E-02", "Depto 102", "8,0 kWh", "7,6 kWh", clp(7.6 * 180), "Finalizada"],
    ["21-10-2026 18:05", "E-01", "Depto 206", "25,0 kWh", "24,6 kWh", clp(24.6 * 180), "Finalizada"],
];

function CargadorCard({ c }) {
    const cargando = c.estado === "Cargando";
    return (
        <div className="border border-gray-200 rounded-md p-4 w-64 flex flex-col items-center relative">
            <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full text-white ${cargando ? "bg-sky-600" : "bg-[#3f5751]"}`}>
                {c.estado}
            </span>
            <span className="self-start bg-gray-100 rounded p-2 text-gray-700"><PlugIcon size={20} /></span>
            <p className="font-semibold text-gray-900 mt-2">{c.nombre}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1"><PinIcon size={12} /> Estacionamiento {c.estacionamiento}</p>
            <p className="text-[10px] uppercase tracking-wide text-gray-500 mt-3">Tarifa</p>
            <p className="text-xl font-bold text-gray-900">${c.precio}<span className="text-xs font-normal"> / kWh</span></p>
            {cargando ? (
                <div className="w-full mt-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-600" style={{ width: `${c.progreso}%` }} />
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-1">{c.progreso}% del objetivo · 7,4 kW</p>
                </div>
            ) : (
                <button className="mt-3 bg-[#3f5751] hover:bg-[#344843] text-white text-xs font-medium px-4 py-1.5 rounded cursor-pointer border-none">
                    Iniciar carga
                </button>
            )}
        </div>
    );
}

export default function CargadoresEV() {
    const [tab, setTab] = useState("cargadores");

    return (
        <div>
            <Breadcrumb items={[{ label: "Cargadores EV" }]} />
            <Panel title="Cargadores EV" actions={<SearchBox placeholder="Buscar cargador..." />}>
                <Tabs
                    active={tab}
                    onChange={setTab}
                    tabs={[
                        { id: "cargadores", label: "Cargadores disponibles" },
                        { id: "sesiones", label: "Últimas sesiones" },
                    ]}
                />
                {tab === "cargadores" ? (
                    <div className="flex flex-wrap gap-4 p-6">
                        {CARGADORES.map((c) => <CargadorCard key={c.nombre} c={c} />)}
                    </div>
                ) : (
                    <div className="pt-4">
                        <Table
                            columns={["Inicio", "Cargador", "Residencia", "Objetivo", "Consumido", "Cargo en boleta", "Estado"]}
                            rows={SESIONES}
                        />
                    </div>
                )}
                <p className="text-xs text-gray-400 px-6 pb-5">
                    El costo de cada sesión se agrega como cargo extra a la boleta mensual del residente.
                </p>
            </Panel>
        </div>
    );
}
