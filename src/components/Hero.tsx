
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span style={{
                    fontSize: '21px',
                    color: 'var(--accent-color)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '16px'
                }}>
                    Hello, I'm
                </span>
                <h1 style={{
                    fontSize: 'clamp(48px, 8vw, 96px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em',
                    marginBottom: '24px',
                    background: 'linear-gradient(180deg, #fff 0%, #888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    paddingBottom: '0.1em' /* Fix clipping */
                }}>
                    {profile.name}
                </h1>
                <p style={{
                    fontSize: 'clamp(21px, 4vw, 32px)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: 'var(--text-secondary)'
                }}>
                    {profile.title} building scalable, distributed systems.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '40px' }}
            >
                <ArrowDown color="var(--text-secondary)" size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
