export default function HomeProjectCard({ titulo, imagen, tecnologias, demo, codigo }) {
    return (
        <div className="group flex w-full max-w-md mx-auto flex-col overflow-hidden rounded-xl bg-gray-900 border border-none transition-all hover:scale-[1.015] drop-shadow-[4px_4px_0_#7836cf]">
            <img
                src={imagen}
                alt={`Proyecto: ${titulo}`}
                className="h-52 p-3 w-full object-cover rounded-2xl"
            />

            <div className="flex flex-col grow p-3">
                <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-[1px_1px_0_#7836cf]">
                    {titulo}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tecnologias.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md bg-[#7836cf]/20 text-[#a27ed1] px-2 py-0.5 text-xs font-semibold"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex justify-between gap-3">
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center border border-[#7836cf] text-[#7836cf] py-1.5 rounded-md text-sm font-semibold hover:bg-[#7836cf] hover:text-gray-900 transition-colors"
                    >
                        Demo
                    </a>

                    <a
                        href={codigo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center border border-[#7836cf] text-[#7836cf] py-1.5 rounded-md text-sm font-semibold hover:bg-[#7836cf] hover:text-gray-900 transition-colors"
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
}
