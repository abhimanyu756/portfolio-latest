import { Section, Reveal } from './ui';
import { profile } from '../data/profile';
import { Trophy, ExternalLink, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Hackathons = () => {
    return (
        <Section id="hackathons">
            <Reveal>
                <h2 style={{ marginBottom: '60px' }}>Hackathon Wins</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {profile.hackathons.map((hackathon, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                            style={{
                                backgroundColor: '#1d1d1f',
                                borderRadius: '18px',
                                padding: '40px',
                                border: '1px solid #333',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                padding: '8px 16px',
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                borderBottomLeftRadius: '18px',
                                fontWeight: 600,
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <Trophy size={16} /> {hackathon.award}
                            </div>

                            <h3 style={{ fontSize: '28px', marginBottom: '16px', marginTop: '16px' }}>{hackathon.name}</h3>
                            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.6 }}>
                                {hackathon.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                                {hackathon.techStack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '14px',
                                        padding: '6px 12px',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        color: 'var(--text-primary)',
                                        borderRadius: '20px',
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                {hackathon.link && (
                                    <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                        <ExternalLink size={20} /> Project Link
                                    </a>
                                )}
                                {hackathon.video && (
                                    <a href={hackathon.video} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 500 }}>
                                        <Youtube size={20} /> Demo Video
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </Section>
    );
};

export default Hackathons;
