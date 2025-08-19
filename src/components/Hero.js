import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  color: var(--text-primary);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled(motion.a)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  font-size: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
  padding: 15px 30px;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;

  &:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: var(--accent-color);
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  max-width: 90%;
  object-fit: cover;
  border-radius: 30%;
  border: 4px solid var(--accent-color);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);

  @media (max-width: 1024px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const Hero = () => {
  const containerRef = useRef();

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
            I craft digital experiences that merge AI and modern web technologies. 
            Skilled in React, Node.js, FastAPI, LangChain, and cloud platforms, 
            I enjoy building scalable, innovative solutions that solve real problems.
          </Description>

          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PrimaryButton
              as="a"
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <FiArrowRight size={18} />
            </PrimaryButton>

            <SecondaryButton
              as="a"
              href="/Resume.pdf"
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
              <FiGithub size={20} />
            </SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/shruti-pathak-384735277/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={20} />
            </SocialButton>
            <SocialButton
              href="https://shrutipathak18.github.io/my-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGlobe size={20} />
            </SocialButton>
          </SocialLinks>
        </TextContent>

        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ProfileImage src="/shruti.jpg" alt="Shruti Pathak" />
        </ProfileImageWrapper>
      </Content>
    </HeroSection>
  );
};

export default Hero;
