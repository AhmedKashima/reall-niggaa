import { motion } from 'framer-motion';

interface SkillsProps {
  lang: 'ru' | 'en';
}

const skillsItems = [
  { name: 'Python', level: 90 },
  { name: 'Django', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Flutter', level: 75 },
  { name: 'Swift', level: 65 },
  { name: 'JavaScript (JS)', level: 80 },
  { name: 'TypeScript (TS)', level: 75 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'pgAdmin', level: 70 },
  { name: 'Docker', level: 70 },
  { name: 'Git', level: 100 },
  { name: 'GitHub', level: 100 },
  { name: 'GitLab', level: 100 },
  { name: 'MinIO', level: 65 },
  { name: 'Linux (ALT, Ubuntu)', level: 100 },
  { name: 'ACL (Access Control Lists)', level: 70 },
  { name: 'Jupyter Notebook', level: 85 },
  { name: 'REST API / VK API', level: 80 },
  { name: 'HTML/CSS', level: 70 },
  { name: 'Virtual Environments (venv)', level: 85 },
  { name: 'Nginx', level: 60 },
  { name: 'Qlik Sense', level: 55 },
];

const Skills = ({ lang }: SkillsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {lang === 'ru' ? 'Мои навыки' : 'My Skills'}
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {skillsItems.map((skill, index) => (
          <motion.div key={index} variants={item} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;