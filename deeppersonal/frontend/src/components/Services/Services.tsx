import { motion } from 'framer-motion';
import { FaAward, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import ServiceCard from '../common/ServiceCard';

interface ServicesProps {
  lang: 'ru' | 'en';
}

const Services = ({ lang }: ServicesProps) => {
  const servicesItems = [
    {
      icon: <FaCode />,
      title: lang === 'ru' ? 'Веб-разработка' : 'Web Development',
      description: lang === 'ru' ? 'Современные веб-приложения на React и Django' : 'Modern web apps with React and Django',
    },
    {
      icon: <FaMobileAlt />,
      title: lang === 'ru' ? 'Мобильные приложения' : 'Mobile Apps',
      description: lang === 'ru' ? 'Кроссплатформенные приложения на Flutter' : 'Cross-platform apps with Flutter',
    },
    {
      icon: <FaServer />,
      title: lang === 'ru' ? 'Бэкенд разработка' : 'Backend Development',
      description: lang === 'ru' ? 'API, базы данных, микросервисы' : 'APIs, databases, microservices',
    },
    {
      icon: <FaAward />,
      title: lang === 'ru' ? 'Технические решения' : 'Technical Solutions',
      description: lang === 'ru' ? 'Интеграции и автоматизация процессов' : 'Integrations and process automation',
    },
  ];

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
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {lang === 'ru' ? 'Услуги' : 'Services'}
      </h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {servicesItems.map((service, idx) => (
          <motion.div key={idx} variants={item}>
            <ServiceCard 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;