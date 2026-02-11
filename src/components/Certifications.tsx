import { Section, Reveal } from './ui';
import { profile } from '../data/profile';
import { FileBadge, ExternalLink } from 'lucide-react';

const Certifications = () => {
    return (
        <Section id="certifications">
            <Reveal>
                <div style={{ borderTop: '1px solid var(--divider-color)', paddingTop: '80px' }}>
                    <h2 style={{ marginBottom: '60px' }}>Certifications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {profile.certifications.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '24px',
                                    backgroundColor: '#1d1d1f',
                                    borderRadius: '16px',
                                    border: '1px solid #333',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#2d2d2f';
                                    e.currentTarget.style.borderColor = 'var(--text-secondary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#1d1d1f';
                                    e.currentTarget.style.borderColor = '#333';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <FileBadge size={32} color="var(--accent-color)" />
                                    <span style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text-primary)' }}>{cert.name}</span>
                                </div>
                                <ExternalLink size={20} color="var(--text-secondary)" />
                            </a>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Section>
    );
};

export default Certifications;
