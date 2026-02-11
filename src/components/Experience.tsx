
import { Section, Reveal } from './ui';
import { profile } from '../data/profile';

const Experience = () => {
    return (
        <Section id="experience">
            <Reveal>
                <h2 style={{ marginBottom: '60px' }}>Experience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {profile.experience.map((job, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: '40px',
                            borderTop: index === 0 ? 'none' : '1px solid var(--divider-color)',
                            paddingTop: index === 0 ? '0' : '80px'
                        }}>
                            <div>
                                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{job.company}</h3>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '4px' }}>{job.role}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', opacity: 0.8 }}>{job.period}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '14px', opacity: 0.8 }}>{job.location}</div>
                            </div>
                            <div>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} style={{
                                            fontSize: '18px',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.6,
                                            position: 'relative',
                                            paddingLeft: '24px'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '10px',
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--accent-color)',
                                                opacity: 0.6
                                            }} />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </Section>
    );
};

export default Experience;
