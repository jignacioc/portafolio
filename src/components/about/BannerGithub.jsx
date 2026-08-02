import Reveal from "../commons/Reveal.jsx";

const githubUrl = "https://github.com/jignacioc";
const imageUrl = `${import.meta.env.BASE_URL}github.png`;

export default function BannerGithub() {
    return (
        <Reveal as="section" className="mt-20 flex justify-center px-5 md:px-6">
            <div className="tech-panel mx-auto w-full max-w-[1120px] overflow-hidden text-ink">
                <div className="flex h-full flex-col items-center md:flex-row-reverse md:items-stretch">
                    {/* Logo GitHub */}
                    <div className="flex h-full w-full shrink-0 items-center justify-center md:w-auto md:justify-end">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <img
                                src={imageUrl}
                                alt="GitHub Logo"
                            className="h-auto w-72 cursor-pointer object-contain opacity-80 grayscale transition duration-500 hover:scale-[1.025] hover:opacity-100 hover:grayscale-0 md:w-[430px]"
                            />
                        </a>
                    </div>

                    {/* Texto y botón */}
                    <div className="flex-1 p-4 text-center md:p-8 md:text-left">
                        <span className="stack-chip mb-5">SOURCE: GITHUB/JIGNACIOC</span>
                        <h3 className="text-3xl font-semibold text-ink md:text-4xl">Repos de Backend, IoT y DevOps</h3>
                        <p className="mt-3 text-sm leading-6 text-muted md:text-base">
                            Playgrounds de arquitectura distribuida, pipelines de observabilidad y utilidades
                            para SCADA/IT-OT. Código listo para ser usado o adaptado en entornos aislados.
                        </p>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-button mt-5"
                        >
                            $ abrir_github
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
