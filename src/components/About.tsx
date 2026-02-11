
import { Section, Reveal } from './ui';
import { profile } from '../data/profile';

const About = () => {
    return (
        <Section id="about">
            <Reveal>
                <h2 style={{ marginBottom: '40px' }}>About Me</h2>
                <p style={{ maxWidth: '800px', fontSize: '24px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    {profile.summary}
                </p>
            </Reveal>
        </Section>
    );
};

export default About;
