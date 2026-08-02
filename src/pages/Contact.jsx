import MiFoto from "../assets/img/MiFoto.png";
import CopyMail from "../components/links/copyMail.jsx";
import Reveal from "../components/commons/Reveal.jsx";
import SectionHeading from "../components/commons/SectionHeading.jsx";

const links = [
    {
        href: "https://www.linkedin.com/in/joaquin-clark/",
        label: "LinkedIn",
    },
    { href: "https://github.com/jignacioc", label: "GitHub" },
    { href: "mailto:joaquinignacioclark@gmail.com", label: "Email" },
];

export default function Contact() {
    return (
        <>
            <style>
                {`
          .animate-spin-slow {
            animation: spin 25s linear infinite;
          }

          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
            </style>

            <section className="site-grid relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 md:px-6">
                <Reveal className="relative z-10 w-full max-w-3xl">
                    <SectionHeading>Contacto</SectionHeading>
                    <div className="tech-panel mt-8 flex flex-col items-center px-5 py-12 text-center md:px-10">
                        <div className="relative flex items-center justify-center">
                            <img
                                src={MiFoto}
                                alt="Foto de Joaquín Ignacio Clark"
                                className="h-32 w-32 rounded-full border border-phosphor-dim object-cover grayscale-[15%]"
                            />

                            <svg
                                viewBox="0 0 200 200"
                                className="animate-spin-slow absolute h-48 w-48"
                                aria-hidden="true"
                            >
                                <path
                                    id="circlePathText"
                                    d="M100,100 m-77,0 a77,77 0 1,1 154,0 a77,77 0 1,1 -154,0"
                                    fill="none"
                                ></path>
                                <text fill="var(--accent-phosphor)" fontSize="14" fontFamily="JetBrains Mono">
                                    <textPath href="#circlePathText" startOffset="0%">
                                        BACKEND · INFRA · SOFTWARE ENGINEERING · LET'S BUILD ·
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        <h1 className="mt-12 text-3xl font-semibold text-ink md:text-4xl">Hablemos.</h1>
                        <p className="mt-3 max-w-xl leading-7 text-muted">
                            Para intercambiar ideas sobre backend e infraestructura, escribime.
                        </p>

                        <CopyMail />

                <div className="grid w-full max-w-xl gap-3 pt-5 sm:grid-cols-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-button w-full"
                        >
                            ./ {link.label.toLowerCase()}
                        </a>
                    ))}
                </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
