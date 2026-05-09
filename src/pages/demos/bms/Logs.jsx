import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, BellIcon, CalendarIcon, SettingsIcon } from "./icons.jsx";

function TopBar() {
    return (
        <div className="flex items-center justify-between px-6 pt-4">
            <div className="flex-1" />
            <div className="flex items-center gap-2 text-sm text-gray-700">
                <HomeIcon size={16} />
                <Link to="/proyectos/bms-core/inicio" className="text-emerald-700 font-medium hover:underline">
                    Inicio
                </Link>
                <span className="text-gray-400">&gt;</span>
                <CalendarIcon size={16} />
                <span className="text-gray-800">Logs</span>
            </div>
            <div className="flex-1 flex items-center justify-end gap-4 text-gray-600">
                <button className="relative text-red-500 hover:text-red-600 bg-transparent border-none cursor-pointer">
                    <BellIcon size={22} />
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        </div>
    );
}

const LOGS = [
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:21:07 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'TDA IM ROL 1502' (ID 15). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:21:01 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'TDA IM ROL 1503' (ID 24). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:21:01 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'EMS MANDO DPX3 1600' (ID 41). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:20:59 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'TDA IM ROL 1502' (ID 15). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:20:59 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'TDA IM ROL 1503' (ID 24). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:20:59 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'EMS MANDO INT DIF' (ID 42). Campos: sin cambios detectados." },
    { acc: "El usuario sistema realizó la acción UPDATE.", modelo: "Equipo", usuario: "sistema", fecha: "08-05-2026", hora: "3:20:58 p. m.", msg: "El usuario usuario_desconocido actualizó Equipo 'EMS MANDO DPX3 1600' (ID 41). Campos: sin cambios detectados." },
];

function Tabs() {
    const [active, setActive] = useState("app");
    const tab = (id, label) => (
        <button
            onClick={() => setActive(id)}
            className={`px-1 pb-2 text-sm font-medium border-b-2 transition-colors bg-transparent cursor-pointer ${active === id ? "border-emerald-700 text-emerald-700" : "border-transparent text-gray-700 hover:text-gray-900"
                }`}
        >
            {label}
        </button>
    );
    return (
        <div className="flex items-center gap-8 border-b border-gray-200 px-6">
            {tab("app", "Logs App")}
            {tab("modbus", "Logs Modbus")}
            {tab("snmp", "Logs SNMP")}
        </div>
    );
}

function LogsTable() {
    return (
        <div className="px-6 py-4">
            <div className="border border-gray-200 rounded-md bg-white overflow-hidden">
                <div className="grid grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr_0.8fr_2fr] bg-gray-50 px-5 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">
                    <span>Acción</span>
                    <span>Modelo</span>
                    <span>Usuario</span>
                    <span>Fecha</span>
                    <span>Hora</span>
                    <span>Mensaje</span>
                </div>
                {LOGS.map((l, i) => (
                    <div key={i} className="grid grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr_0.8fr_2fr] px-5 py-4 text-sm text-gray-700 border-b border-gray-100 last:border-b-0">
                        <span>{l.acc}</span>
                        <span>{l.modelo}</span>
                        <span>{l.usuario}</span>
                        <span>{l.fecha}</span>
                        <span>{l.hora}</span>
                        <span>{l.msg}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Logs() {
    return (
        <div className="bg-white">
            <TopBar />
            <div className="px-6 pt-6">
                <Tabs />
                <div className="flex justify-end items-center gap-2 mt-3 px-6">
                    <input
                        type="text"
                        placeholder="search"
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm w-64 focus:outline-none focus:border-emerald-500"
                    />
                    <button className="text-gray-600 hover:text-gray-800 p-1.5 border border-gray-300 rounded bg-white cursor-pointer">
                        <SettingsIcon size={16} />
                    </button>
                </div>
            </div>
            <LogsTable />
        </div>
    );
}
