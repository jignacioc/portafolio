import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import piso from "../../../assets/demos/residencial/piso.jpg";
import { BoltIcon, PlugIcon, CloseIcon } from "../bms/icons.jsx";
import { BASE, Breadcrumb, Panel, DEPARTAMENTOS } from "./shared.jsx";

// Posición (en %) de los medidores sobre el plano; el piso 1 suma los dos cargadores EV.
const POSICIONES = [
    { left: "30%", top: "22%" },
    { left: "53%", top: "24%" },
    { left: "73%", top: "22%" },
    { left: "24%", top: "44%" },
    { left: "82%", top: "42%" },
    { left: "30%", top: "64%" },
];

export default function PlanoPiso() {
    const { piso: n = "1" } = useParams();
    const [sel, setSel] = useState(null);

    const deptos = DEPARTAMENTOS.filter((d) => d.piso === `PISO ${n}`);
    const equipos = deptos.map((d, i) => ({
        nombre: `Medidor Depto ${d.numero}`,
        tipo: "medidor",
        detalle: `${d.kwh} kWh este mes · Modbus RTU`,
        ...POSICIONES[i],
    }));
    if (n === "1") {
        equipos.push(
            { nombre: "Cargador EV E-01", tipo: "ev", detalle: "Disponible · $180/kWh", left: "56%", top: "64%" },
            { nombre: "Cargador EV E-02", tipo: "ev", detalle: "Cargando · 7,4 kW", left: "67%", top: "64%" },
        );
    }

    return (
        <div>
            <Breadcrumb items={[{ label: "Sitio", to: `${BASE}/inicio` }, { label: `Plano PISO ${n}` }]} />
            <Panel
                title={`Plano de PISO ${n}`}
                actions={
                    <Link to={`${BASE}/inicio`} className="text-gray-500 hover:text-gray-800" aria-label="Cerrar plano">
                        <CloseIcon size={22} />
                    </Link>
                }
            >
                <div className="flex justify-center gap-2 pb-2">
                    {[1, 2, 3].map((p) => (
                        <Link
                            key={p}
                            to={`${BASE}/plano/${p}`}
                            onClick={() => setSel(null)}
                            className={`px-3 py-1 rounded text-xs font-medium ${String(p) === n ? "bg-[#3f5751] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                            PISO {p}
                        </Link>
                    ))}
                </div>
                <div className="relative mx-auto max-w-lg pb-6">
                    <img src={piso} alt={`Plano del piso ${n}`} className="w-full" />
                    {equipos.map((e) => {
                        const Icon = e.tipo === "ev" ? PlugIcon : BoltIcon;
                        return (
                            <button
                                key={e.nombre}
                                onClick={() => setSel(e)}
                                style={{ left: e.left, top: e.top }}
                                className={`absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white shadow cursor-pointer hover:scale-110 transition-transform ${e.tipo === "ev" ? "bg-sky-700" : "bg-[#3f5751]"}`}
                                title={e.nombre}
                            >
                                <Icon size={16} />
                            </button>
                        );
                    })}
                    {sel && (
                        <div className="absolute right-0 top-2 bg-white border border-gray-200 rounded-md shadow-md p-4 w-56 text-sm">
                            <div className="flex justify-between items-start">
                                <p className="font-semibold text-gray-900">{sel.nombre}</p>
                                <button onClick={() => setSel(null)} className="text-gray-400 hover:text-gray-700 bg-transparent border-none cursor-pointer">
                                    <CloseIcon size={14} />
                                </button>
                            </div>
                            <p className="text-gray-600 mt-1">{sel.detalle}</p>
                            <p className="text-xs text-emerald-700 mt-2">● En línea</p>
                        </div>
                    )}
                </div>
            </Panel>
        </div>
    );
}
