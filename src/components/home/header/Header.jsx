import SocialIcons from "../../commons/socialIcons/socialIcons.jsx";
import TypeEfect from "./typeEfect.jsx";
import Typewriter from "typewriter-effect";
import { motion, useReducedMotion } from "framer-motion";

const cvUrl = `${import.meta.env.BASE_URL}CV_Joaquin_Clark.pdf`;

export default function Header() {
    const reduceMotion = useReducedMotion();

    return (
        <header className="site-grid relative flex min-h-[760px] items-center overflow-hidden border-b border-line bg-void pt-16 md:min-h-screen">
            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 py-20 text-left md:px-10">
                <div className="notranslate mb-6 min-h-6 font-technical text-sm text-phosphor">
                    {reduceMotion ? (
                        "$ whoami"
                    ) : (
                        <Typewriter
                            options={{
                                strings: ["$ whoami"],
                                autoStart: true,
                                delay: 70,
                                cursor: "_",
                            }}
                        />
                    )}
                </div>

                <motion.h1
                    className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink md:text-7xl"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.5, duration: 0.45 }}
                >
                    Hola, soy <span className="text-phosphor">Joaquín Ignacio Clark</span>
                </motion.h1>

                <p className="mt-5 font-technical text-sm tracking-wide text-muted md:text-base">
                    Ingeniero en Informática · Backend &amp; Infraestructura
                </p>

                <div className="mt-8 flex min-h-8 items-center border-l border-phosphor-dim pl-4 font-technical text-sm text-ink md:text-base">
                    <span className="mr-2 text-phosphor" aria-hidden="true">&gt;</span>
                    <TypeEfect />
                    <span className="terminal-cursor" aria-hidden="true"></span>
                </div>

                <p className="mt-8 max-w-2xl text-base leading-7 text-muted md:text-lg">
                    Diseño backends robustos y la infraestructura que los sostiene. Trabajo
                    con Django, Docker, Celery y PostgreSQL, conectando software, datos y
                    sistemas industriales cuando el proyecto lo requiere.
                </p>

                <div className="mt-4">
                    <SocialIcons />
                </div>

                <a
                    href={cvUrl}
                    download="CV_Joaquin_Clark.pdf"
                    className="terminal-button mt-1"
                >
                    $ descargar_cv
                </a>
            </main>
        </header>
    );
}
