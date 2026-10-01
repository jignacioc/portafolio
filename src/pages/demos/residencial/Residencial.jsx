import { useState } from "react";
import { BuildingIcon } from "../bms/icons.jsx";
import { Breadcrumb, Panel, SearchBox, Table, Tabs, DEPARTAMENTOS, clp } from "./shared.jsx";

const TOTAL_M2 = DEPARTAMENTOS.reduce((s, d) => s + d.m2, 0);

const CARGOS_EXTRA = [
    ["101", "Carga EV", "Sesión E-01 · 14,6 kWh", clp(2628), "Octubre 2026"],
    ["204", "Carga EV", "Sesión E-02 · 19,6 kWh", clp(3528), "Octubre 2026"],
    ["305", "Gasto común eléctrico", "Prorrateo áreas comunes", clp(4120), "Octubre 2026"],
    ["102", "Carga EV", "Sesión E-01 · 7,6 kWh", clp(1368), "Septiembre 2026"],
];

export default function Residencial() {
    const [tab, setTab] = useState("deptos");

    const deptoRows = DEPARTAMENTOS.map((d) => [
        `Depto ${d.numero}`,
        d.piso,
        `${d.m2} m²`,
        (d.m2 / TOTAL_M2).toFixed(4),
        d.residente,
    ]);

    return (
        <div>
            <Breadcrumb items={[{ label: "Residencial" }]} />
            <Panel>
                <div className="pt-4">
                    <Tabs
                        active={tab}
                        onChange={setTab}
                        tabs={[
                            { id: "deptos", label: "Departamentos" },
                            { id: "cargos", label: "Cargos Extra" },
                            { id: "residencias", label: "Residencias", disabled: true },
                            { id: "servicios", label: "Servicios", disabled: true },
                        ]}
                    />
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <BuildingIcon size={20} />
                        {tab === "deptos" ? "Departamentos" : "Cargos Extra"}
                    </h2>
                    <SearchBox placeholder={tab === "deptos" ? "Buscar departamento..." : "Buscar cargo..."} />
                </div>
                {tab === "deptos" ? (
                    <Table columns={["Departamento", "Subsitio", "Superficie", "Prorrata m²", "Residente"]} rows={deptoRows} />
                ) : (
                    <Table columns={["Depto", "Tipo", "Detalle", "Monto", "Boleta"]} rows={CARGOS_EXTRA} />
                )}
            </Panel>
        </div>
    );
}
