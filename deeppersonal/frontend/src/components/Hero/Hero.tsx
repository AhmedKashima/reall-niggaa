import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

interface HeroProps {
  lang: 'ru' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const t = {
    welcome: lang === 'ru' ? 'Привет, я Ahmed Kashima' : 'Hi, I\'m Ahmed Kashima',
    subtitle: lang === 'ru' ? 'Full-stack разработчик' : 'Full-stack Developer',
    intro: lang === 'ru'
      ? 'Я создаю современные веб и мобильные приложения с акцентом на качество и производительность.'
      : 'I build modern web and mobile applications with focus on quality and performance.',
    contact: lang === 'ru' ? 'Контакты' : 'Contact'
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {t.welcome}
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">{t.subtitle}</h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">{t.intro}</p>
        
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.contact}
            <FiChevronRight className="ml-2" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;