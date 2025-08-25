import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// ========== Styled Components ==========
const SkillsSection = styled.section`
  padding: 40px 0;
  background: var(--primary-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SectionHeader = styled(motion.div)`
  text-align: left;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem; /* reduced */
  margin-bottom: 0.8rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem; /* reduced */
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0;
`;

const SectionSubtitleCentered = styled(SectionSubtitle)`
  margin: 0 auto;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* denser */
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCategory = styled(motion.div)``;

const CategoryTitle = styled.h3`
  font-size: 1.2rem; /* smaller */
  margin-bottom: 1rem;
  color: var(--accent-color);
  text-align: left;
`;

const SkillItem = styled.div`
  margin-bottom: 1rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-primary);
`;

const SkillPercentage = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--accent-color);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px; /* thinner */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: var(--gradient-primary);
`;

const TechnologiesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* tighter spacing */
  margin-top: 2rem;
`;

const TechCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 80px;
`;

const TechIcon = styled.div`
  font-size: 1.6rem; /* smaller */
  margin-bottom: 0.3rem;
`;

const TechName = styled.div`
  font-size: 0.8rem; /* reduced */
  color: var(--text-primary);
  font-weight: 500;
`;

// ========== Animations ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

// ========== Data ==========
const skillsData = {
  frontend: [
    { name: 'React.js', percentage: 95 },
    { name: 'Tailwind CSS / Bootstrap', percentage: 90 },
    { name: 'Material UI', percentage: 88 },
    { name: 'HTML5 / CSS3', percentage: 92 },
    { name: 'GSAP', percentage: 80 }
  ],
  backend: [
    { name: 'Node.js', percentage: 88 },
    { name: 'Express.js', percentage: 85 },
    { name: 'Flask', percentage: 82 },
    { name: 'REST API', percentage: 90 },
    { name: 'MongoDB / MySQL / SQLite', percentage: 85 }
  ],
  ai: [
    { name: 'LangChain', percentage: 80 },
    { name: 'LlamaIndex', percentage: 78 },
    { name: 'Hugging Face', percentage: 75 },
    { name: 'Python', percentage: 85 }
  ],
  tools: [
    { name: 'Git / GitHub', percentage: 95 },
    { name: 'Docker', percentage: 80 },
    { name: 'Postman', percentage: 88 },
    { name: 'CI/CD', percentage: 85 },
    { name: 'Unit Testing', percentage: 82 },
    { name: 'AWS', percentage: 80 }
  ]
};

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Material UI', icon: '🖌️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'Flask', icon: '🐍' },
  { name: 'REST API', icon: '🔗' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '💾' },
  { name: 'LangChain', icon: '🧠' },
  { name: 'LlamaIndex', icon: '📚' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Postman', icon: '📮' },
  { name: 'CI/CD', icon: '⚙️' },
  { name: 'Unit Testing', icon: '🧪' },
  { name: 'GSAP', icon: '🎥' },
  { name: 'GCP', icon: '☁️' },
  { name: 'AWS', icon: '☁️' }
];

// ========== Component ==========
const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        {/* Section Header */}
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SectionSubtitle>
            A comprehensive overview of my technical expertise and proficiency levels
          </SectionSubtitle>
        </SectionHeader>

        {/* Skills Grid */}
        <SkillsGrid>
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <SkillCategory
              key={category}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <CategoryTitle>
                {category === 'ai'
                  ? 'AI & Automation'
                  : category.charAt(0).toUpperCase() + category.slice(1) + ' Development'}
              </CategoryTitle>
              {skills.map((skill, index) => (
                <SkillItem key={skill.name}>
                  <SkillHeader>
                    <SkillName>{skill.name}</SkillName>
                    <SkillPercentage>{skill.percentage}%</SkillPercentage>
                  </SkillHeader>
                  <ProgressBar>
                    <ProgressFill
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>

        {/* Technologies Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <SectionTitle style={{ marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Technologies I Work With
          </SectionTitle>
          <SectionSubtitleCentered>
            A snapshot of tools, frameworks, and platforms I use in development
          </SectionSubtitleCentered>
          <TechnologiesGrid>
            {technologies.map((tech, index) => (
              <TechCard
                key={tech.name}
                variants={scaleIn}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechCard>
            ))}
          </TechnologiesGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
