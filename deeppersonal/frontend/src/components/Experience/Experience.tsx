import { motion } from 'framer-motion';

interface ExperienceProps {
  lang: 'ru' | 'en';
}

  const experienceItems = [
    {
      year: '2021',
      ru: 'Изучение основ Python и реализация учебных мини-проектов (CLI, парсинг)',
      en: 'Learned Python basics through mini-projects (CLI tools, parsing)',
    },
    {
      year: '2021',
      ru: 'Первые шаги с Django: маршрутизация, шаблоны и модели',
      en: 'First steps with Django: routing, templates, and models',
    },
    {
      year: '2022',
      ru: 'Создание API на Django REST Framework, тестирование Postman, реализация авторизации и обработки ошибок',
      en: 'Built REST APIs using Django REST Framework, tested with Postman, implemented authentication and error handling',
    },
    {
      year: '2022',
      ru: 'Разработка интерфейсов с React, управление состоянием, интеграция с бэкендом через Axios',
      en: 'Developed UI using React, state management, integrated backend via Axios',
    },
    {
      year: '2022',
      ru: 'Мобильная разработка с Flutter и Swift: создание интерфейсов и взаимодействие с API',
      en: 'Mobile development using Flutter and Swift: UI building and API integration',
    },
    {
      year: '2023',
      ru: 'Развёртывание приложений в Docker, настройка docker-compose, работа с volume и сетью',
      en: 'Deployed apps with Docker, configured docker-compose, handled volumes and networking',
    },
    {
      year: '2023',
      ru: 'Работа с PostgreSQL и pgAdmin: проектирование схем, миграции, SQL-запросы',
      en: 'Used PostgreSQL and pgAdmin: schema design, migrations, SQL queries',
    },
    {
      year: '2023',
      ru: 'Использование MinIO для хранения и доступа к медиафайлам, работа с AWS-совместимым API',
      en: 'Used MinIO for media storage and access, integrated AWS-compatible API',
    },
    {
      year: '2023',
      ru: 'Работа с Linux (Ubuntu, ALT), настройка прав доступа, ACL, sticky bit и setgid',
      en: 'Worked with Linux (Ubuntu, ALT), configured permissions, ACLs, sticky bit, and setgid',
    },
    {
      year: '2023',
      ru: 'Создание Telegram-бота на Python с использованием AIOHTTP, поддержка вебхуков и асинхронной логики',
      en: 'Built a Telegram bot using Python and AIOHTTP, supported webhooks and async logic',
    },
    {
      year: '2023',
      ru: 'Администрирование серверов на Ubuntu и ALT Linux: SSH, настройка служб, виртуализация в VirtualBox',
      en: 'Managed servers on Ubuntu and ALT Linux: SSH, service configuration, VirtualBox virtualization',
    },
    {
      year: '2024',
      ru: 'Создание и администрирование сложных Django-приложений с разделением по ролям (пользователь, модератор, админ)',
      en: 'Built and managed complex Django apps with role-based access (user, moderator, admin)',
    },
    {
      year: '2024',
      ru: 'Организация Viking-экспедиций: REST API, административная панель, защита маршрутов, фильтрация и поиск',
      en: 'Organized Viking expeditions system: REST API, admin panel, route protection, filtering and search',
    },
    {
      year: '2024',
      ru: 'Интеграция с VK API, реализация бота-викторины, управление токенами и сессиями, cookie-защита',
      en: 'Integrated with VK API, developed quiz bot, managed tokens and sessions with cookie protection',
    },

    {
      year: '2024',
      ru: 'Интеграция Django backend с Expo и React Native, получение QR-кода для запуска мобильного клиента',
      en: 'Integrated Django backend with Expo and React Native, enabled QR-code generation for mobile launch',
    },
    {
      year: '2024',
      ru: 'Работа с графическими инструментами: создание визиток в Inkscape, использование Script-Fu в GIMP',
      en: 'Worked with design tools: created business cards in Inkscape, used Script-Fu in GIMP',
    },
    {
      year: '2025',
      ru: 'Разработка веб-сайта-портфолио: анимации, адаптивная верстка, иконки, отображение опыта и навыков',
      en: 'Built personal portfolio website: animations, responsive layout, icons, experience and skills display',
    },
    {
      year: '2025',
      ru: 'Анимации и пользовательские компоненты в React Native: кастомные переключатели языка, навигация, стилизация',
      en: 'Implemented animations and custom components in React Native: language switchers, navigation, styling',
    },
    {
      year: '2025',
      ru: 'Исследование и создание AI-контента: работа с генерацией изображений и видео, управление визуальным стилем',
      en: 'Explored AI content creation: worked with image and video generation, style control',
    }
  ];

const Experience = ({ lang }: ExperienceProps) => {
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
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {lang === 'ru' ? 'Опыты' : 'Experiences'}
      </h2>
      
      <motion.div 
        className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {experienceItems.map((exp, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:flex items-center mb-1">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md md:order-1 md:mx-auto">
                {exp.year}
              </div>
              <div className="md:flex-1 md:ml-4 md:mr-8 lg:mx-8">
                <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md">
                  <p>{lang === 'ru' ? exp.ru : exp.en}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;