import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    HomeIcon,
    BellIcon,
    BoltIcon,
    ActivityIcon,
    CalendarIcon,
    LogoutIcon,
    CpuIcon,
    PinIcon,
    UsersIcon,
    BriefcaseIcon,
    LayersIcon,
    ProtocolIcon,
    BuildingIcon,
    DashIcon,
    DollarIcon,
    PlugIcon,
    RemoteIcon,
    VideoIcon,
    FileIcon,
    GenericLogo,
} from "./icons.jsx";

const ENABLED = [
    { to: "/proyectos/bms-core/inicio", label: "Inicio", icon: HomeIcon },
    { to: "/proyectos/bms-core/alertas", label: "Alertas", icon: BellIcon, badge: 46 },
    { to: "/proyectos/bms-core/gestion-energetica", label: "Gestión de Energía", icon: BoltIcon },
    { to: "/proyectos/bms-core/sistema", label: "Sistema", icon: ActivityIcon },
    { to: "/proyectos/bms-core/logs", label: "Logs", icon: CalendarIcon },
];

const DISABLED = [
    { label: "Equipos", icon: CpuIcon },
    { label: "Sitios", icon: PinIcon },
    { label: "Usuarios", icon: UsersIcon },
    { label: "Negocios", icon: BriefcaseIcon },
    { label: "Verticales", icon: LayersIcon },
    { label: "Protocolos", icon: ProtocolIcon },
    { label: "Residencial", icon: BuildingIcon },
    { label: "Dashboards", icon: DashIcon },
    { label: "Facturación", icon: DollarIcon },
    { label: "Cargadores EV", icon: PlugIcon },
    { label: "Control", icon: RemoteIcon },
    { label: "CCTV", icon: VideoIcon },
    { label: "Informe", icon: FileIcon },
];

function NavItem({ to, label, icon: Icon, badge, active, disabled, onClick }) {
    const base =
        "flex items-center gap-4 px-5 py-3 text-sm select-none relative w-full text-left";
    const cls = disabled
        ? `${base} text-gray-400 cursor-not-allowed opacity-60`
        : active
            ? `${base} bg-emerald-50 text-emerald-700 font-semibold cursor-pointer`
            : `${base} text-gray-700 hover:bg-gray-50 cursor-pointer`;

    const inner = (
        <>
            <span className="relative shrink-0">
                <Icon size={20} />
                {badge !== undefined && (
                    <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                        {badge}
                    </span>
                )}
            </span>
            <span>{label}</span>
        </>
    );

    if (disabled) {
        return <li><span className={cls} aria-disabled="true">{inner}</span></li>;
    }
    if (onClick) {
        return <li><button type="button" onClick={onClick} className={cls}>{inner}</button></li>;
    }
    return <li><Link to={to} className={cls}>{inner}</Link></li>;
}

export default function Sidebar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <aside className="w-56 min-h-[calc(100vh-72px)] bg-white border-r border-gray-200 flex flex-col shrink-0">
            <div className="pt-6 pb-4 flex justify-center border-b border-gray-100">
                <GenericLogo />
            </div>

            <nav className="flex-1 py-2 overflow-y-auto">
                <ul>
                    {ENABLED.map((item) => (
                        <NavItem
                            key={item.label}
                            to={item.to}
                            label={item.label}
                            icon={item.icon}
                            badge={item.badge}
                            active={pathname === item.to}
                        />
                    ))}

                    <li className="px-5 pt-4 pb-1 text-[10px] uppercase tracking-widest text-gray-400 select-none">
                        Próximamente
                    </li>

                    {DISABLED.map((item) => (
                        <NavItem
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            disabled
                        />
                    ))}
                </ul>
            </nav>

            <div className="border-t border-gray-100 py-2">
                <NavItem
                    label="Cerrar Sesión"
                    icon={LogoutIcon}
                    onClick={() => navigate("/proyectos/bms-core")}
                />
            </div>
        </aside>
    );
}
