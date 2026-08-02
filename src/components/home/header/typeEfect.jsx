import Typewriter from "typewriter-effect";
import { useReducedMotion } from "framer-motion";

const TypewriterComponent = () => {
  const reduceMotion = useReducedMotion();
  const strings = [
    "Backend: Django · Celery · PostgreSQL",
    "Infra: Docker · Nginx · Linux",
    "IoT/OT: Modbus · SNMP · KNX",
  ];

  if (reduceMotion) {
    return <span>{strings[0]}</span>;
  }

  return (
    <span className="notranslate">
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 42,
          deleteSpeed: 24,
          cursor: "",
        }}
      />
    </span>
  );
};

export default TypewriterComponent;
