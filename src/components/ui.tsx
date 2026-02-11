
import { motion } from 'framer-motion';

export const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
    <section id={id} className={`section ${className}`} style={{ padding: '80px 0' }}>
        <div className="container">
            {children}
        </div>
    </section>
);

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Apple-esque ease
    >
        {children}
    </motion.div>
);
