import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--primary-color);
  padding: 60px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: left;
  }
`;

const FooterSection = styled(motion.div)`
  color: var(--text-primary);
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const FooterDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialButton = styled(motion.a)`
  width: 45px;
  height: 45px;
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

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const QuickLink = styled(motion.a)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--accent-color);
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--text-secondary);
`;

const ContactIcon = styled.div`
  width: 20px;
  color: var(--accent-color);
`;

const Copyright = styled(motion.div)`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const HeartIcon = styled(motion.span)`
  color: #ff6b6b;
  display: inline-block;
  margin: 0 0.2rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          {/* About Me */}
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FooterTitle>Shruti Pathak</FooterTitle>
            <FooterDescription>
              Electronics & Computer Science Engineer passionate about creating innovative 
              web and AI-powered applications. Experienced in React.js, Node.js, LangChain, 
              and full-stack development, with a strong foundation in DSA and cloud platforms.
            </FooterDescription>
            <SocialLinks>
              <SocialButton href="https://github.com/Shrutipathak18" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiGithub size={20} />
              </SocialButton>
              <SocialButton href="https://www.linkedin.com/in/shruti-pathak-384735277/" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiLinkedin size={20} />
              </SocialButton>
              <SocialButton href="mailto:sp.18pathak@gmail.com" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FiMail size={20} />
              </SocialButton>
            </SocialLinks>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              <QuickLink href="#home" whileHover={{ x: 5 }}>Home</QuickLink>
              <QuickLink href="#about" whileHover={{ x: 5 }}>About</QuickLink>
              <QuickLink href="#skills" whileHover={{ x: 5 }}>Skills</QuickLink>
              <QuickLink href="#projects" whileHover={{ x: 5 }}>Projects</QuickLink>
              <QuickLink href="#experience" whileHover={{ x: 5 }}>Experience</QuickLink>
              <QuickLink href="#contact" whileHover={{ x: 5 }}>Contact</QuickLink>
            </QuickLinks>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon><FiMail size={16} /></ContactIcon>
                sp.18pathak@gmail.com
              </ContactItem>
              <ContactItem>
                <ContactIcon><FiPhone size={16} /></ContactIcon>
                +91 8709987702
              </ContactItem>
              <ContactItem>
                <ContactIcon><FiMapPin size={16} /></ContactIcon>
                Ranchi, Jharkhand, India
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <Copyright
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © {currentYear} Shruti Pathak. All rights reserved. Made with{' '}
          <HeartIcon animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
            <FiHeart size={14} />
          </HeartIcon>
          {' '}and lots of coffee.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
