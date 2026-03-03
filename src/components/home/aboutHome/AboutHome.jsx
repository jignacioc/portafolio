import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import MiFoto from "../../../assets/img/MiFoto.png";

export default function AboutHome() {
    return (
        <section className="relative flex items-center justify-center px-4 pt-16">
            <div
                className="absolute inset-0 -z-10 mx-auto max-w-6xl blur-3xl"
                aria-hidden="true"
            >
                <div className="h-[450px] w-full rounded-full bg-[#7836cf]/5"></div>
            </div>

            <div className="mx-auto flex max-w-4xl flex-col-reverse items-stretch gap-6 md:flex-row">
                <div className="bg-base-900 border-none flex w-full items-center justify-center overflow-hidden rounded-2xl border p-0 shadow-lg md:w-1/3 drop-shadow-[4px_4px_0_#7836cf]">
                    <img
                        src={MiFoto}
                        alt="Foto de Joaquín Ignacio Clark"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="bg-gray-900 border-none flex w-full flex-col justify-center rounded-2xl border p-6 shadow-lg md:w-2/3 drop-shadow-[4px_4px_0_#7836cf]">
                    <h2 className="text-white text-4xl font-bold drop-shadow-[2px_2px_0_#7836cf]">
                        Sobre Mí
                    </h2>
                    <p className="mt-2 font-semibold text-white">
                        Soy Joaquín Ignacio Clark (24), Ingeniero en Informática y actual
                        Ingeniero de Software/Arquitecto de Soluciones IoT en Teknica by
                        Legrand. Diseño sistemas desde la captura de datos en campo
                        (Modbus TCP/RTU, SNMP) hasta APIs y orquestación de infraestructura
                        Dockerizada, garantizando integridad de datos transaccionales, alta
                        disponibilidad y monitoreo en entornos offline.
                    </p>

                    <Link
                        to="/about"
                        className="group mt-4 inline-flex items-center text-primary font-bold transition-all hover:text-[#0debd8]"
                    >
                        Ver más sobre mí
                        <HiArrowRight
                            className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                            size={18}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
