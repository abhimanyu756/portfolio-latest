
import { motion } from 'framer-motion';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
    const navItems = ['Hero', 'Projects', 'Hackathons', 'Experience', 'Certifications', 'Connect'];

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
            <div
                style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-primary)', cursor: 'pointer' }}
                onClick={() => setActiveSection('Hero')}
            >
                Abhimanyu.
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                {navItems.filter(item => item !== 'Hero').map((item) => (
                    <button
                        key={item}
                        onClick={() => setActiveSection(item)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '14px',
                            color: activeSection === item ? 'var(--text-primary)' : 'var(--text-secondary)',
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            backgroundColor: activeSection === item ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                            fontWeight: activeSection === item ? 500 : 400
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navbar;
