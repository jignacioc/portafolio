export default function ServiceCard({ icon: Icon, title, description }) {
    return (
        <section className="group bg-gray-900 relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6 shadow-lg transition-transform hover:scale-102 hover:shadow-xl drop-shadow-[4px_4px_0_#7836cf]">
            {/* Glow efecto */}
            <div className="absolute inset-0 -z-10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"></div>

            {/* Icono */}
            <div className="mb-4 drop-shadow-[2px_2px_0_#7836cf] text-4xl text-[#02ffee]">
                {Icon && <Icon />}
            </div>

            {/* Título */}
            <h3 className="mb-2 text-xl font-bold text-white drop-shadow-[2px_2px_0_#7836cf]">
                {title}
            </h3>

            {/* Descripción */}
            <p className="text-center text-neutral-300">{description}</p>
        </section>
    );
}
