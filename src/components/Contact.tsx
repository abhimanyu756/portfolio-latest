
import { Section, Reveal } from './ui';
import { profile } from '../data/profile';
import { Mail, Linkedin, Github } from 'lucide-react';

const Skills = () => {
    return (
        <Section id="skills">
            <Reveal>
                <div style={{ borderTop: '1px solid var(--divider-color)', paddingTop: '80px' }}>
                    <h2 style={{ marginBottom: '40px' }}>Technical Skills</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '80px' }}>
                        {profile.skills.map(skill => (
                            <span key={skill} style={{
                                fontSize: '18px',
                                padding: '12px 24px',
                                backgroundColor: '#1d1d1f',
                                color: 'var(--text-primary)',
                                borderRadius: '100px',
                                border: '1px solid #333'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}

const Contact = () => {
    return (
        <footer style={{
            padding: '80px 0',
            borderTop: '1px solid var(--divider-color)',
            textAlign: 'center'
        }}>
            <div className="container">
                <Reveal>
                    <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>Let's Connect</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '40px' }}>
                        <a href={`mailto:${profile.contact.email}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ padding: '16px', backgroundColor: '#1d1d1f', borderRadius: '50%' }}>
                                <Mail size={32} />
                            </div>
                            <span>Email</span>
                        </a>
                        <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ padding: '16px', backgroundColor: '#1d1d1f', borderRadius: '50%' }}>
                                <Linkedin size={32} />
                            </div>
                            <span>LinkedIn</span>
                        </a>
                        <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div style={{ padding: '16px', backgroundColor: '#1d1d1f', borderRadius: '50%' }}>
                                <Github size={32} />
                            </div>
                            <span>GitHub</span>
                        </a>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>
                </Reveal>
            </div>
        </footer>
    );
};

export { Skills, Contact };
