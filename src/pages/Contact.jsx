import MiFoto from "../assets/img/MiFoto.png";
import CopyMail from "../components/links/copyMail.jsx";

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

            <section className="bg-gray-900 flex min-h-screen flex-col items-center justify-center px-6">
                <div className="mb-2 mt-11">
                    <div className="mb-2 mt-11">
                        <div className="relative flex items-center justify-center">
                            {/* Foto con borde */}
                            <img
                                src={MiFoto}
                                alt="Foto de Joaquín Ignacio Clark"
                                className="border-primary h-32 w-32 rounded-full shadow-lg"
                            />

                            {/* Texto circular alrededor de la foto */}
                            <svg
                                viewBox="0 0 200 200"
                                className="animate-spin-slow absolute h-48 w-48"
                            >
                                <path
                                    id="circlePathText"
                                    d="M100,100 m-77,0 a77,77 0 1,1 154,0 a77,77 0 1,1 -154,0"
                                    fill="none"
                                ></path>
                                <text fill="#69c7c7" fontSize="18" fontWeight="bold">
                                    <textPath href="#circlePathText" startOffset="0%">
                                        ✦ Backend & DevOps ✦ Disponible para sistemas críticos e IoT/OT
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <CopyMail />

                {/* Lista de Links */}
                <div className="w-full max-w-xl space-y-4 pt-10">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-bold w-full rounded-lg bg-primary hover:bg-secondary drop-shadow-[2px_2px_0_#0debd8] px-6 py-3 text-center text-white transition "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
