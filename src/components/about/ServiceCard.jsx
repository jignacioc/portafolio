import { motion, useReducedMotion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.article
            className="tech-panel group relative flex flex-col items-start overflow-hidden p-6"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.18 }}
        >
            <div className="mb-5 text-3xl text-phosphor">
                {Icon && <Icon />}
            </div>

            <h3 className="mb-3 text-lg font-semibold text-ink">
                {title}
            </h3>

            <p className="leading-6 text-muted">{description}</p>
        </motion.article>
    );
}
