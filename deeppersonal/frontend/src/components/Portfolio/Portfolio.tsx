interface PortfolioProps {
    lang: 'ru' | 'en';
  }
  
  const Portfolio = ({ lang }: PortfolioProps) => {
    const t = {
      soon: lang === 'ru' 
        ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻' 
        : 'My best projects will appear here soon 👨‍💻'
    };
  
    return (
      <section id="portfolio" className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {lang === 'ru' ? 'Портфолио' : 'Portfolio'}
        </h2>
        <p className="text-center text-gray-400 text-xl">{t.soon}</p>
      </section>
    );
  };
  
  export default Portfolio;




//   import FeaturedProject from '../FeaturedProject'; // Adjusted path
// import { motion } from 'framer-motion';
// import { FiGithub, FiExternalLink } from 'react-icons/fi';
// import { FaReact, FaPython, FaNodeJs, FaDatabase, FaMobileAlt } from 'react-icons/fa';

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   githubUrl?: string;
//   liveUrl?: string;
// }

// interface PortfolioProps {
//   lang: 'ru' | 'en';
// }

// const Portfolio = ({ lang }: PortfolioProps) => {
//   // Translation object
//   const t = {
//     soon: lang === 'ru' 
//       ? 'Скоро здесь появятся мои лучшие проекты 👨‍💻' 
//       : 'My best projects will appear here soon 👨‍💻',
//     viewCode: lang === 'ru' ? 'Код' : 'Code',
//     viewDemo: lang === 'ru' ? 'Демо' : 'Demo'
//   };

//   // Sample projects data
//   const projects: Project[] = [
//     {
//       id: 1,
//       title: lang === 'ru' ? 'Интернет Магазин' : 'E-Commerce Platform',
//       description: lang === 'ru' 
//         ? 'Полнофункциональная платформа с платежами и админ-панелью' 
//         : 'Full-featured platform with payments and admin panel',
//       tech: ["React", "Node.js", "MongoDB"],
//       image: "/project1.jpg",
//       githubUrl: "#",
//       liveUrl: "#"
//     },
//     {
//       id: 2,
//       title: lang === 'ru' ? 'Мобильное Приложение' : 'Mobile App',
//       description: lang === 'ru' 
//         ? 'Кроссплатформенное приложение для iOS и Android' 
//         : 'Cross-platform app for iOS and Android',
//       tech: ["Flutter", "Firebase"],
//       image: "/project2.jpg",
//       githubUrl: "#"
//     }
//   ];

//   const techIcons: Record<string, JSX.Element> = {
//     react: <FaReact className="text-blue-400" />,
//     python: <FaPython className="text-blue-600" />,
//     node: <FaNodeJs className="text-green-500" />,
//     flutter: <FaMobileAlt className="text-blue-300" />,
//     firebase: <FaDatabase className="text-yellow-500" />,
//     mongodb: <FaDatabase className="text-green-600" />
//   };

//   return (
//     <section id="portfolio" className="py-16">
//       <h2 className="text-3xl font-bold mb-12 text-center">
//         {lang === 'ru' ? 'Портфолио' : 'Portfolio'}
//       </h2>

//       {projects.length > 0 ? (
//         <div className="max-w-6xl mx-auto px-4">
//           {projects.map((project, index) => (
//             <motion.div 
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-24`}
//             >
//               {/* Project Image */}
//               <div className="relative flex-1 group">
//                 <div className="absolute inset-0 bg-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-auto rounded-xl shadow-2xl"
//                 />
//               </div>

//               {/* Project Content */}
//               <div className={`flex-1 ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
//                 <h3 className="text-2xl font-bold text-blue-400 mb-2">
//                   {project.title}
//                 </h3>
                
//                 <div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-inner">
//                   <p className="text-gray-300">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Tech stack */}
//                 <div className={`flex ${index % 2 !== 0 ? 'lg:justify-end' : ''} gap-3 mb-4 flex-wrap`}>
//                   {project.tech.map(tech => (
//                     <span 
//                       key={tech} 
//                       className="flex items-center gap-1 bg-gray-700 px-3 py-1 rounded-full text-sm"
//                     >
//                       {techIcons[tech.toLowerCase()] || null}
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className={`flex ${index % 2 !== 0 ? 'lg:justify-end' : ''} gap-4`}>
//                   {project.githubUrl && (
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
//                     >
//                       <FiGithub /> {t.viewCode}
//                     </a>
//                   )}
//                   {project.liveUrl && (
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
//                     >
//                       <FiExternalLink /> {t.viewDemo}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-400 text-xl">{t.soon}</p>
//       )}
//     </section>
//   );
// };

// export default Portfolio;