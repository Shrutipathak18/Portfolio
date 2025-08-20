import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 40px 0;
  background: var(--secondary-color);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled(motion.div)`
  text-align: left;
  margin-bottom: 2.5rem;
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid ${props => props.active ? 'transparent' : 'var(--accent-color)'};
  padding: 10px 20px;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    background: ${props => props.active ? 'var(--gradient-primary)' : 'var(--accent-color)'};
    color: ${props => props.active ? 'white' : 'var(--primary-color)'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: var(--transition);
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent-color);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);

  &:hover {
    color: var(--accent-color);
  }
`;

// === Resume-Based Projects ===
const projects = [
  {
    id: 1,
    title: "PDF QA App",
    description:
      "Full-stack PDF Q&A tool using FastAPI, LangChain, and LlamaIndex with over 88% accuracy. Integrated PyMuPDF for fast PDF processing and built a real-time React.js UI, reducing bounce rate by 25%.",
    image: "📄",
    category: "ai",
    technologies: ["FastAPI", "LangChain", "LlamaIndex", "React.js", "PyMuPDF"],
    liveUrl: "https://github.com/Shrutipathak18/INTERNSHIP-ASSIGNMENT",
    githubUrl: "https://github.com/Shrutipathak18/INTERNSHIP-ASSIGNMENT"
  },
  {
    id: 2,
    title: "Modern Dashboard Application",
    description:
      "Dynamic dashboard built with React.js and Chart.js for data visualization. Includes dark mode, auto-refresh, and responsive UI, improving mobile usability by 40% and reducing load time by 20%.",
    image: "📊",
    category: "frontend",
    technologies: ["React.js", "Chart.js", "JavaScript", "CSS"],
    liveUrl: "https://github.com/Shrutipathak18/FRONTEND_PROJECT",
    githubUrl: "https://github.com/Shrutipathak18/FRONTEND_PROJECT"
  },
  {
    id: 3,
    title: "CartMapper",
    description:
      "Smart product mapping tool with bilingual voice search (English/Hindi) and QR scanning. Built using React.js, Material UI, and modular reusable components, achieving 95% voice recognition accuracy.",
    image: "🛒",
    category: "fullstack",
    technologies: [
      "React.js",
      "Material UI",
      "JavaScript",
      "QR Scanning",
      "Voice Recognition"
    ],
    liveUrl: "https://github.com/Shrutipathak18/CartMapper",
    githubUrl: "https://github.com/Shrutipathak18/CartMapper"
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ai', name: 'AI/ML' }
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            A selection of my most impactful work, combining innovative ideas with clean, scalable solutions.
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            // In the render section, change the active prop to use toString()
            <FilterButton
              key={category.id}
              active={(activeFilter === category.id).toString()}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtons>

        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      fontSize: '3rem',
                      color: 'white'
                    }}
                  >
                    {project.image}
                  </div>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                   
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiGithub size={16} />
                      Code
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
