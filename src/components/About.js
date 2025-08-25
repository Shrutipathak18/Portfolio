// src/components/About.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUser, FiCode, FiEdit3, FiZap } from "react-icons/fi";
import styled from "styled-components";

// ================== Styled Components ==================
const AboutSection = styled.section`
  padding: 40px 0;
  background: var(--secondary-color);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 25px 0;
  }

  @media (max-width: 468px) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  max-width: 1100px; /* allow more space on large screens */
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 468px) {
    padding: 0 14px;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 468px) {
    margin-bottom: 1.2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 468px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 468px) {
    font-size: 0.85rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TextContent = styled(motion.div)`
  color: var(--text-primary);
`;

const AboutTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 468px) {
    font-size: 1.1rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;

  /* 👇 Shruti Pathak smaller */
  strong {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 468px) {
    font-size: 0.8rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const StatNumber = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.3rem;

  @media (max-width: 468px) {
    font-size: 1.2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);

  @media (max-width: 468px) {
    font-size: 0.7rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SkillIcon = styled.div`
  width: 42px;
  height: 42px;
  margin: 0 auto 0.6rem;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SkillTitle = styled.h4`
  font-size: 0.95rem;
  margin-bottom: 0.2rem;

  @media (max-width: 468px) {
    font-size: 0.85rem;
  }
`;

const SkillDescription = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.4;

  @media (max-width: 468px) {
    font-size: 0.75rem;
  }
`;

// ================== Data ==================
const skills = [
  {
    icon: <FiCode size={18} />,
    title: "Full-Stack Development",
    description: "React.js, Node.js, Flask, Express, MongoDB, MySQL",
  },
  {
    icon: <FiZap size={18} />,
    title: "AI & Automation",
    description: "LangChain, LlamaIndex, Hugging Face, REST API integration",
  },
  {
    icon: <FiEdit3 size={18} />,
    title: "UI/UX & Performance",
    description: "Responsive design, Tailwind CSS, SEO optimization",
  },
  {
    icon: <FiUser size={18} />,
    title: "Leadership & Collaboration",
    description: "Corporate partnerships, event coordination, team management",
  },
];

// ================== Component ==================
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <AboutSection id="about">
      <Container ref={ref}>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Passionate Computer Science engineer specializing in full-stack
            development, AI integrations, and high-performance web apps.
          </SectionSubtitle>
        </SectionHeader>

        <ContentGrid>
          {/* Left Side */}
          <TextContent
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AboutTitle>
              Innovating at the Intersection of Technology & Creativity
            </AboutTitle>
            <AboutDescription>
              I’m <strong>Shruti Pathak</strong>, an Electronics & Computer
              Science engineer with a passion for creating full-stack
              applications, AI-powered tools, and performance-driven web
              solutions.
            </AboutDescription>
            <AboutDescription>
              Beyond coding, I’ve held leadership roles at KIIT E-Cell,
              spearheading corporate partnerships, investor onboarding, and
              large-scale events like Blind Pitch at E-Summit 2025 and Smart
              India Hackathon 2024.
            </AboutDescription>

            <StatsGrid>
              {[
                { num: "3+", label: "Major Projects", delay: 0.3 },
                { num: "5+", label: "Hackathons", delay: 0.4 },
                { num: "2+", label: "Years Leadership", delay: 0.5 },
                { num: "10+", label: "Technologies", delay: 0.6 },
              ].map((stat, i) => (
                <StatCard
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: stat.delay }}
                >
                  <StatNumber>{stat.num}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </TextContent>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
