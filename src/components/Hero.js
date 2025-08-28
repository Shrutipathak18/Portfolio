// src/components/Hero.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import ShrutiImage from '../assets/Shruti.jpg';

// ===== Styled Components =====
const HeroSection = styled.section`
  min-height: 90vh; /* smaller than full screen */
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    padding: 2rem 12px;
  }
`;

const TextContent = styled.div`
  color: var(--text-primary);
`;

const Greeting = styled(motion.div)`
  font-size: 1rem;
  color: var(--accent-color);
  margin-bottom: 0.8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 auto 1.5rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  text-decoration: none;
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  text-decoration: none;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1.2rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialButton = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 320px;
  height: 320px;
  max-width: 85%;
  object-fit: cover;
  border-radius: 30%;
  border: 3px solid var(--accent-color);

  @media (max-width: 1024px) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

// ===== Hero Component =====
const Hero = () => {
  const containerRef = useRef(null);

  return (
    <HeroSection id="home" ref={containerRef}>
      <Content>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shruti Pathak
          </Name>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack & AI Developer
          </Title>

          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft digital experiences that merge AI and modern web technologies. Skilled in React, Node.js, FastAPI, LangChain, and cloud platforms, I enjoy building scalable, innovative solutions that solve real problems.
          </Description>

          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
              <FiArrowRight size={16} />
            </PrimaryButton>

            <SecondaryButton
              href="/Shruti_Latest.pdf"
              download="Shruti-Pathak-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </SecondaryButton>
          </CTAButtons>

          <SocialLinks
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <SocialButton
              href="https://github.com/Shrutipathak18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={18} />
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/shruti-pathak-384735277/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={18} />
            </SocialButton>
          </SocialLinks>
        </TextContent>

        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ProfileImage src={ShrutiImage} alt="Shruti Pathak" />
        </ProfileImageWrapper>
      </Content>
    </HeroSection>
  );
};

export default Hero;
