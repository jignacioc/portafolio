import urbanStyle from "../assets/img-projects/urbanStyle.png";
import seguritrans from "../assets/img-projects/seguritrans.png";

export const proyectos = [
  {
    titulo: "SCADA Software",
    slug: "bms-core",
    imagen: urbanStyle,
    tecnologias: [
      "Python",
      "Django/DRF",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    demo: true,
    codigo: "#",
    codigoPrivado: true,
  },
  {
    titulo: "Seguritrans",
    imagen: seguritrans,
    tecnologias: ["HTML5", "CSS3", "Bootstrap", "jQuery"],
    demo: "https://seguritrans.cl/",
    codigo: "#",
    codigoPrivado: true,
  },
];
