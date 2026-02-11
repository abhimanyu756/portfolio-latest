
import { Section, Reveal } from './ui';
import { profile } from '../data/profile';
import { ExternalLink, Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Section id="projects">
            <Reveal>
                <h2 style={{ marginBottom: '60px' }}>Selected Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '32px'
                }}>
                    {profile.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            style={{
                                backgroundColor: '#1d1d1f',
                                borderRadius: '18px',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                border: '1px solid #333'
                            }}
                        >
                            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{project.name}</h3>
                            <p style={{
                                fontSize: '17px',
                                color: 'var(--text-secondary)',
                                marginBottom: '24px',
                                flexGrow: 1,
                                lineHeight: 1.5
                            }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                {project.techStack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '12px',
                                        padding: '4px 10px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        borderRadius: '20px',
                                        fontWeight: 500
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 500 }}>
                                        <Github size={18} /> Code
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 500 }}>
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                                {project.video && (
                                    <a href={project.video} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 500 }}>
                                        <Youtube size={18} /> Demo
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

export default Projects;
