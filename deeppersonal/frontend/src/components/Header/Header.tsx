// // src/components/Header/Header.tsx
// import { motion } from 'framer-motion';
// import Resume from '../Resume';
// import Education from '../Education';

// interface HeaderProps {
//   lang: 'ru' | 'en';          // Changed from currentLang to lang
//   activeSection: string;
//   setLang: (lang: 'ru' | 'en') => void;  // Changed from toggleLang
// }

// const t = {
//   home: { ru: 'Главная', en: 'Home' },
//   about: { ru: 'Обо мне', en: 'About me' },
//   experience: { ru: 'Опыт', en: 'Experience' },
//   services: { ru: 'Услуги', en: 'Services' },
//   skills: { ru: 'Навыки', en: 'Skills' },
//   portfolio: { ru: 'Портфолио', en: 'Portfolio' },
//   Resume: { ru: 'Резюме', en: 'CV' },
//   Education: { ru: 'Образование', en: 'Education' },
//   contact: { ru: 'Контакты', en: 'Contact' },
// };

// const Header = ({ lang, activeSection, setLang }: HeaderProps) => {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 shadow-lg z-50">
//       <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <div className="text-xl font-bold">Ahmed Kashima</div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {['home', 'about', 'skills', 'experience', 'services', 'portfolio', 'contact'].map((section) => (
//               <a
//                 key={section}
//                 href={`#${section}`}
//                 className={`hover:text-blue-400 transition-colors ${
//                   activeSection === section ? 'text-blue-400 font-medium' : 'text-gray-300'
//                 }`}
//               >
//                 {t[section as keyof typeof t][lang]}
//               </a>
//             ))}
            
//             <motion.button
//               onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
//               className="px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {lang === 'ru' ? 'EN' : 'RU'}
//             </motion.button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import { motion } from 'framer-motion';

interface HeaderProps {
  lang: 'ru' | 'en';
  activeSection: string;
  setLang: (lang: 'ru' | 'en') => void;
}

const Header = ({ lang, activeSection, setLang }: HeaderProps) => {
  const t = {
    home: { ru: 'Главная', en: 'Home' },
    about: { ru: 'Обо мне', en: 'About' },
    experience: { ru: 'Опыт', en: 'Experience' },
    services: { ru: 'Услуги', en: 'Services' },
    skills: { ru: 'Навыки', en: 'Skills' },
    portfolio: { ru: 'Портфолио', en: 'Portfolio' },
    resume: { ru: 'Резюме', en: 'CV' },  // Changed to lowercase to match usage
    education: { ru: 'Образование', en: 'Education' },  // Changed to lowercase
    contact: { ru: 'Контакты', en: 'Contact' },
  };

  // Include ALL navigation items in the correct order
  const navigationItems = [
    'home',
    'about',
    'skills',
    'experience',
    'education',  // Added
    'services',
    'portfolio',
    'resume',     // Added
    'contact'
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold">Ahmed Kashima</div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`transition ${
                  activeSection === section 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t[section as keyof typeof t][lang]}
              </a>
            ))}
            
            <motion.button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="text-gray-300 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;