import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiBriefcase, FiAward } from 'react-icons/fi';
import styled from 'styled-components';

// ========== Styled Components ==========
const ExperienceSection = styled.section`
  padding: 100px 0;
  background: var(--primary-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled(motion.div)`
  text-align: left;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0;
`;

const SectionSubtitleCentered = styled(SectionSubtitle)`
  margin: 0 auto;
  text-align: center;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gradient-primary);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 45%;
  position: relative;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: var(--accent-color);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.2);

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.div`
  font-size: 1.1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDetails = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent-color);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const EducationSection = styled.div`
  margin-top: 4rem;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const SchoolName = styled.div`
  font-size: 1.1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

// ========== Animation Variants ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

// ========== Data ==========
const experienceData = [
  {
    id: 1,
    title: "Open Source Contributor — Top 0.99%",
    company: "Keploy API Fellowship Program",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    description:
      "Ranked in the top 168 of 18,000+ participants. Built AI-powered C++ Unit Test Generator, custom API server, and automated CI/CD testing with GitHub Actions.",
    skills: ["API Testing", "C++", "LLMs", "GitHub Actions", "CI/CD"]
  },
  {
    id: 2,
    title: "Senior Executive, Public & Corporate Relations",
    company: "KIIT E-Cell",
    location: "Bhubaneswar, Odisha, India",
    period: "Jan 2025 – Present",
    description:
      "Leading Blind Pitch at E-Summit 2025, onboarding 50+ startups and investors with a 30% increase in projected sponsorships. Spearheading outreach and corporate partnerships.",
    skills: ["Public Relations", "Corporate Outreach", "Event Management"]
  },
  {
    id: 3,
    title: "Tech Team Member",
    company: "KIIT E-Cell",
    location: "Bhubaneswar, Odisha, India",
    period: "Mar 2023 – Dec 2024",
    description:
      "Coordinated Smart India Hackathon 2024 and managed infrastructure for Internship Camp 2023 with 500+ students and 25+ companies.",
    skills: ["Event Coordination", "Technical Support", "Team Collaboration"]
  }
];

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Electronics & Computer Science",
    school: "KIIT DU",
    period: "2019 – 2023",
    description: "Graduated with 8.08 CGPA, specializing in software and hardware integration."
  },
  {
    id: 2,
    degree: "12th Science",
    school: "D.A.V Public School, Ranchi, Jharkhand",
    period: "2018 – 2019",
    description: "Completed senior secondary education with 88% marks."
  }
];

// ========== Component ==========
const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,   // 👈 more sensitive, triggers faster
    triggerOnce: true
  });

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'visible'} // 👈 fallback visible
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Experience & Education</SectionTitle>
          <SectionSubtitle>
            My professional journey and educational background that shaped my expertise
          </SectionSubtitle>
        </SectionHeader>

        {/* Experience Timeline */}
        <Timeline>
          {experienceData.map((job, index) => (
            <TimelineItem
              key={job.id}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              animate={inView ? 'visible' : 'visible'} // 👈 fallback visible
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>
                  <FiBriefcase size={16} />
                  {job.company}
                </CompanyName>
                <JobDetails>
                  <JobDetail>
                    <FiCalendar size={14} />
                    {job.period}
                  </JobDetail>
                  <JobDetail>
                    <FiMapPin size={14} />
                    {job.location}
                  </JobDetail>
                </JobDetails>
                <JobDescription>{job.description}</JobDescription>
                <SkillsList>
                  {job.skills.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Education Section */}
        <EducationSection>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'visible'} // 👈 fallback visible
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <SectionTitle style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Education
            </SectionTitle>
            <SectionSubtitleCentered>
              Academic milestones that laid the foundation for my technical journey
            </SectionSubtitleCentered>
            <EducationGrid>
              {educationData.map((education, index) => (
                <EducationCard
                  key={education.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'visible'} // 👈 fallback visible
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <DegreeTitle>{education.degree}</DegreeTitle>
                  <SchoolName>
                    <FiAward size={16} />
                    {education.school}
                  </SchoolName>
                  <JobDetails>
                    <JobDetail>
                      <FiCalendar size={14} />
                      {education.period}
                    </JobDetail>
                  </JobDetails>
                  <JobDescription>{education.description}</JobDescription>
                </EducationCard>
              ))}
            </EducationGrid>
          </motion.div>
        </EducationSection>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
