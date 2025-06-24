import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa'; // Example tech icons

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean; // Alternate layout
  lang: 'en' | 'ru';
}

const FeaturedProject = ({ project, reverse = false, lang }: FeaturedProjectProps) => {
  const techIcons: Record<string, JSX.Element> = {
    react: <FaReact className="text-blue-400" />,
    python: <FaPython className="text-blue-600" />,
    node: <FaNodeJs className="text-green-500" />,
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-24`}
    >
      {/* Image with hover effect */}
      <div className="relative flex-1 group">
        <div className="absolute inset-0 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className={`flex-1 ${reverse ? 'lg:text-right' : 'lg:text-left'}`}>
        <h3 className="text-2xl font-bold text-blue-400 mb-2">
          {project.title}
        </h3>
        
        <div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-inner">
          <p className="text-gray-300">
            {lang === 'ru' 
              ? project.description 
              : `English description of ${project.title}`}
          </p>
        </div>

        {/* Tech stack */}
        <div className={`flex ${reverse ? 'lg:justify-end' : ''} gap-3 mb-4 flex-wrap`}>
          {project.tech.map(tech => (
            <span 
              key={tech} 
              className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {techIcons[tech.toLowerCase()] || null}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={`flex ${reverse ? 'lg:justify-end' : ''} gap-4`}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FiGithub /> {lang === 'ru' ? 'Код' : 'Code'}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FiExternalLink /> {lang === 'ru' ? 'Демо' : 'Live Demo'}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
