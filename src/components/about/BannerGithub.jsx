const githubUrl = "https://github.com/jignacioc";
const imageUrl = "/github.png";

export default function BannerGithub() {
    return (
        <section className="mt-16 flex justify-center px-4">
            <div className="mx-auto max-h-80 w-full max-w-[1120px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#211355] to-[#12186e] text-white shadow-lg drop-shadow-[4px_4px_0_#7836cf]">
                <div className="flex h-full flex-col items-center md:flex-row-reverse md:items-start">
                    {/* Logo GitHub */}
                    <div className="flex h-full w-full shrink-0 items-center justify-center md:w-auto md:justify-end">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <img
                                src={imageUrl}
                                alt="GitHub Logo"
                                className="h-auto w-72 cursor-pointer object-contain transition hover:scale-105 md:w-[470px]"
                            />
                        </a>
                    </div>

                    {/* Texto y botón */}
                    <div className="flex-1 p-4 text-center md:p-8 md:text-left">
                        <h3 className="text-5xl font-bold md:text-4xl text-white">Repos de Backend, IoT y DevOps</h3>
                        <p className="mt-2 text-sm md:text-xl text-white">
                            Playgrounds de arquitectura distribuida, pipelines de observabilidad y utilidades
                            para BMS/IT-OT. Código listo para ser usado o adaptado en entornos aislados.
                        </p>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                        >
                            Ir a GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
