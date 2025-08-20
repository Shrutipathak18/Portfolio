// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCode, FiEdit3, FiZap } from 'react-icons/fi';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 40px 0;
  background: var(--secondary-color);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 468px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  color: var(--text-primary);
`;

const AboutTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const skills = [
  {
    icon: <FiCode size={24} />,
    title: 'Full-Stack Development',
    description: 'React.js, Node.js, Flask, Express, MongoDB, MySQL',
  },
  {
    icon: <FiZap size={24} />,
    title: 'AI & Automation',
    description: 'LangChain, LlamaIndex, Hugging Face, REST API integration',
  },
  {
    icon: <FiEdit3 size={24} />,
    title: 'UI/UX & Performance',
    description: 'Responsive design, Tailwind CSS, Material-UI, SEO optimization',
  },
  {
    icon: <FiUser size={24} />,
    title: 'Leadership & Collaboration',
    description: 'Corporate partnerships, event coordination, team management',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // trigger earlier for small screens
    triggerOnce: true,
  });

  return (
    <AboutSection id="about">
      <Container ref={ref}>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Passionate Computer Science engineer specializing in full-stack development, AI integrations, and high-performance web applications.
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutTitle>Innovating at the Intersection of Technology & Creativity</AboutTitle>
            <AboutDescription>
              I’m Shruti Pathak, an Electronics & Computer Science engineer with a passion for creating full-stack applications, AI-powered tools, and performance-driven web solutions. Skilled in React.js, Node.js, Flask, and modern cloud technologies, I focus on building impactful, user-friendly products while continuously exploring emerging innovations.
            </AboutDescription>
            <AboutDescription>
              Beyond coding, I’ve held leadership roles at KIIT E-Cell, spearheading corporate partnerships, investor onboarding, and large-scale events like Blind Pitch at E-Summit 2025 and Smart India Hackathon 2024. I thrive in collaborative environments, enjoy mentoring peers, and actively explore emerging technologies in AI, automation, and cloud computing.
            </AboutDescription>

            <StatsGrid>
              {[
                { num: '3+', label: 'Major Projects', delay: 0.4 },
                { num: '5+', label: 'Hackathons', delay: 0.5 },
                { num: '2+', label: 'Years Leadership', delay: 0.6 },
                { num: '10+', label: 'Technologies', delay: 0.7 },
              ].map((stat, i) => (
                <StatCard
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>{stat.num}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </TextContent>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
              ))}
            </SkillsGrid>
          </motion.div>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
