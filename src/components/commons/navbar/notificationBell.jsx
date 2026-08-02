import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

const BASE_NOTIFICATIONS = [
  { id: 1, text: "Nuevo proyecto publicado", read: false },
  {
    id: 2,
    text: "¡Hola! Recientemente subí un nuevo post en LinkedIn. Échale un ojo.",
    read: false,
  },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  // Cargar desde localStorage y mezclar con base
  useEffect(() => {
    try {
      const saved = localStorage.getItem("notifications");
      if (!saved) {
        setNotifications(BASE_NOTIFICATIONS);
        return;
      }

      const savedArray = JSON.parse(saved);
      if (!Array.isArray(savedArray)) {
        setNotifications(BASE_NOTIFICATIONS);
        return;
      }

      const savedMap = new Map(savedArray.map((n) => [n.id, n]));
      setNotifications(BASE_NOTIFICATIONS.map((n) => savedMap.get(n.id) || n));
    } catch {
      setNotifications(BASE_NOTIFICATIONS);
    }
  }, []);

  // localStorage
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Cerrar dropdown
  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handleDocClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handleDocClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Marca como leidas
  useEffect(() => {
    if (open && unreadCount > 0) {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }
  }, [open]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Notificaciones"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border-none bg-transparent hover:bg-panel"
      >
        <FaBell className="text-lg text-muted transition-colors hover:text-phosphor" />
        {unreadCount > 0 && (
          <span className="absolute right-0 top-0 inline-flex h-4 min-w-4 items-center justify-center bg-phosphor px-1 font-technical text-[0.6rem] text-void">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="tech-panel !absolute right-0 top-full z-[70] mt-2 w-[min(20rem,calc(100vw-2.5rem))] bg-panel shadow-xl">
          <div className="p-3">
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-technical text-xs font-semibold text-phosphor">
                &gt;&gt; NOTIFICACIONES
              </h4>
            </div>

            {notifications.length > 0 ? (
              <ul className="max-h-[min(18rem,calc(100vh-8rem))] divide-y divide-line overflow-y-auto">
                {notifications.map((n) => (
                  <li key={n.id} className="break-words py-2 text-sm leading-6 text-muted">
                    {n.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">No hay notificaciones.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
