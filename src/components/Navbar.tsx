
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 1000,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <div style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-primary)' }}>
                Abhimanyu.
            </div>
            <div>
                {['Projects', 'Hackathons', 'Experience', 'Certifications', 'Connect'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            marginLeft: '24px',
                            fontSize: '14px',
                            color: 'var(--text-secondary)',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
