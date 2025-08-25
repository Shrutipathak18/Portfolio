import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import styled from 'styled-components';

// ===== Animation Variants =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

// ===== Styled Components =====
const ContactSection = styled.section`
  padding: 70px 0; /* smaller */
  background: var(--secondary-color);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1100px; /* slightly smaller */
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled(motion.div)`
  text-align: left;
  margin-bottom: 3rem; /* smaller */
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem; /* smaller */
  margin-bottom: 0.8rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem; /* smaller */
  color: var(--text-secondary);
  max-width: 550px;
  margin: 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem; /* tighter */
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactInfo = styled(motion.div)`
  color: var(--text-primary);
`;

const ContactTitle = styled.h3`
  font-size: 1.6rem; /* smaller */
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.7rem; /* tighter */
  margin-bottom: 1.2rem; /* smaller */
  padding: 0.9rem; /* smaller */
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const ContactIcon = styled.div`
  width: 38px; /* smaller */
  height: 38px; /* smaller */
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  font-size: 0.9rem;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.75rem; /* smaller */
  color: var(--text-secondary);
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.div`
  font-size: 0.95rem; /* smaller */
  color: var(--text-primary);
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.7rem; /* tighter */
  margin-top: 1.5rem;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px; /* smaller */
  height: 34px; /* smaller */
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    background: var(--accent-color);
    color: var(--primary-color);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.6rem; /* smaller */
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.1rem; /* smaller */
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.4rem;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem; /* smaller */
`;

const FormInput = styled.input`
  width: 100%;
  padding: 9px 14px; /* smaller */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  font-size: 0.9rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 9px 14px; /* smaller */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  font-size: 0.9rem;
  min-height: 90px; /* smaller */
  resize: vertical;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 10px 20px; /* smaller */
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: var(--transition);
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// ===== Contact Component =====
const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mdkdjwzd', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error sending message: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FiMail size={18} />, label: 'Email', value: '2230121@kiit.ac.in', href: 'mailto:2230121@kiit.ac.in' },
    { icon: <FiMail size={18} />, label: 'Personal Email', value: 'sp.18pathak@gmail.com', href: 'mailto:sp.18pathak@gmail.com' },
    { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 8709987702', href: 'tel:+918709987702' },
    { icon: <FiMapPin size={18} />, label: 'Location', value: 'Bhubaneswar, Odisha, India', href: '#' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/Shrutipathak18', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/shruti-pathak-384735277/', label: 'LinkedIn' },
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>Let's discuss your next project and bring your ideas to life</SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactTitle>Let's Connect</ContactTitle>

            {contactInfo.map((info, index) => (
              <ContactItem
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactIcon>{info.icon}</ContactIcon>
                <ContactDetails>
                  <ContactLabel>{info.label}</ContactLabel>
                  <ContactValue>
                    <a href={info.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {info.value}
                    </a>
                  </ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}

            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </SocialButton>
              ))}
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Project inquiry"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
