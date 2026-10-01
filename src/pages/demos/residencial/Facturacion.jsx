import { useState } from "react";
import { EyeIcon, FileIcon } from "../bms/icons.jsx";
import { Breadcrumb, Panel, Table, Tabs, DEPARTAMENTOS, clp } from "./shared.jsx";

const VALOR_KWH = 113;

const INFORMES_SITIO = [
    ["Septiembre 2026", "3.760 kWh", clp(3760 * VALOR_KWH), "Enviado al operador"],
    ["Agosto 2026", "4.105 kWh", clp(4105 * VALOR_KWH), "Enviado al operador"],
    ["Julio 2026", "4.280 kWh", clp(4280 * VALOR_KWH), "Enviado al operador"],
];

export default function Facturacion() {
    const [tab, setTab] = useState("deptos");

    const deptoRows = DEPARTAMENTOS.map((d) => [
        `Depto ${d.numero}`,
        d.residente,
        `${d.kwh} kWh`,
        clp(d.kwh * VALOR_KWH),
        <span className="text-emerald-700 font-medium">Enviada</span>,
        <span className="flex gap-3 text-gray-500"><EyeIcon size={16} /><FileIcon size={16} /></span>,
    ]);

    return (
        <div>
            <Breadcrumb items={[{ label: "Facturación" }]} />
            <Panel title="Facturación">
                <div className="mx-6 mb-4 border border-gray-200 rounded-md overflow-x-auto">
                    <table className="w-full text-sm text-gray-700">
                        <thead className="bg-gray-50">
                            <tr>
                                {["Sitio", "Comuna", "Valor kWh", "Cierre automático", "Próximo cierre"].map((c) => (
                                    <th key={c} className="text-left font-bold px-4 py-3 whitespace-nowrap">{c}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">Edificio &lt;Generico&gt;</td>
                                <td className="px-4 py-3">Santiago</td>
                                <td className="px-4 py-3">{VALOR_KWH} CLP</td>
                                <td className="px-4 py-3">Último día del mes (Celery)</td>
                                <td className="px-4 py-3">31-10-2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Tabs
                    active={tab}
                    onChange={setTab}
                    tabs={[
                        { id: "deptos", label: "Facturas por departamento · Septiembre 2026" },
                        { id: "sitio", label: "Informes del sitio" },
                    ]}
                />
                <div className="pt-4">
                    {tab === "deptos" ? (
                        <Table columns={["Departamento", "Residente", "Consumo", "Monto", "Correo", ""]} rows={deptoRows} />
                    ) : (
                        <Table columns={["Periodo", "Consumo total", "Monto total", "Estado"]} rows={INFORMES_SITIO} />
                    )}
                </div>
            </Panel>
        </div>
    );
}
