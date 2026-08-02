import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", as = "div", delay = 0 }) {
    const reduceMotion = useReducedMotion();
    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            className={className}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : delay, ease: "easeOut" }}
        >
            {children}
        </MotionTag>
    );
}
