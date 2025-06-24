// import { motion } from 'framer-motion';
// import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

// interface EducationProps {
//   lang: 'ru' | 'en';
// }

// interface EducationItem {
//   id: number;
//   degree: {
//     ru: string;
//     en: string;
//   };
//   institution: {
//     ru: string;
//     en: string;
//   };
//   year: string;
//   description: {
//     ru: string;
//     en: string;
//   };
// }

// const Education = ({ lang }: EducationProps) => {
//   const educationData: EducationItem[] = [
//     {
//       id: 1,
//       degree: {
//         ru: "Бакалавр компьютерных наук",
//         en: "Bachelor's in Computer Science"
//       },
//       institution: {
//         ru: "Технический Университет",
//         en: "Tech University"
//       },
//       year: "2018-2022",
//       description: {
//         ru: "Специализация в веб-разработке и искусственном интеллекте",
//         en: "Specialized in Web Development and AI"
//       }
//     },
//     {
//       id: 2,
//       degree: {
//         ru: "Аттестат о среднем образовании",
//         en: "High School Diploma"
//       },
//       institution: {
//         ru: "Научная Академия",
//         en: "Science Academy"
//       },
//       year: "2014-2018",
//       description: {
//         ru: "Углубленное изучение математики и физики",
//         en: "Focus on Mathematics and Physics"
//       }
//     }
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <section id="education" className="py-16">
//       <h2 className="text-3xl font-bold mb-12 text-center">
//         {lang === 'ru' ? 'Образование' : 'Education'}
//       </h2>
      
//       <motion.div 
//         className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-400 before:to-transparent"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {educationData.map((edu, idx) => (
//           <motion.div 
//             key={edu.id}
//             variants={item}
//             className="relative pl-8 md:pl-0"
//           >
//             <div className="md:flex items-center mb-1">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white shadow-md md:order-1 md:mx-auto">
//                 {idx % 2 === 0 ? <FaGraduationCap className="text-lg" /> : <FaUniversity className="text-lg" />}
//               </div>
//               <div className="md:flex-1 md:ml-4 md:mr-8 lg:mx-8">
//                 <div className="flex-1 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all">
//                   <h3 className="text-xl font-bold text-blue-400">
//                     {edu.degree[lang]}
//                   </h3>
//                   <div className="flex items-center text-gray-400 mb-2">
//                     <span>{edu.institution[lang]}</span>
//                     <span className="mx-2">•</span>
//                     <span>{edu.year}</span>
//                   </div>
//                   <p className="text-gray-300">
//                     {edu.description[lang]}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Education;



import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Education = ({ lang }: { lang: 'ru' | 'en' }) => {
  useEffect(() => {
    console.log('Language changed to:', lang);
  }, [lang]);

  // const educationItems = [
  //   {
  //     id: 1,
  //     title: {
  //       ru: "Образование",
  //       en: "Education" 
  //     },
  //     items: [
  //       {
  //         degree: {
  //           ru: "Компьютерные науки",
  //           en: "Computer Science"
  //         },
  //         institution: "MIT",
  //         year: "2020-2024"
  //       }
  //     ]
  //   }
  // ];


  const educationItems = [
    {
      id: 1,
      title: {
        ru: "Образование",
        en: "Education"
      },
      items: [
        {
          degree: {
            ru: "Среднее образование — результат 97%",
            en: "High School Education — Graduated with 97%"
          },
          institution: {
            ru: "Средняя школа",
            en: "High School"
          },
          year: "2017–2020"
        },
        {
          degree: {
            ru: "Компьютерные науки",
            en: "Computer Science"
          },
          institution: "MIT",
          year: "2020–2024"
        },
        {
          degree: {
            ru: "Системы обработки информации и управления",
            en: "Faculty of Information processing and control systems"
          },
          institution: {
            ru: "МГТУ им. Н.Э. Баумана",
            en: "Bauman Moscow State Technical University"
          },
          year: "2021–2025"
        },
        {
          degree: {
            ru: "Курсы по веб- и мобильной разработке (Django, Flutter, React, Swift)",
            en: "Courses in Web & Mobile Development (Django, Flutter, React, Swift)"
          },
          institution: {
            ru: "Онлайн-платформы (Stepik, Udemy, Coursera)",
            en: "Online Platforms (Stepik, Udemy, Coursera)"
          },
          year: "2021–2024"
        },
        {
          degree: {
            ru: "Лабораторные работы по PostgreSQL, Docker, API, pgAdmin",
            en: "Lab Work: PostgreSQL, Docker, API, pgAdmin"
          },
          institution: {
            ru: "Учебные проекты в университете",
            en: "University Projects"
          },
          year: "2022–2025"
        }
      ]
    }
  ];
  
  return (
    <section id="education" className="min-h-[50vh] py-16">
      {educationItems.map(section => (
        <div key={section.id}>
          <h2 className="text-3xl font-bold mb-8">
            {section.title[lang]}
          </h2>
          <div className="space-y-6">
            {section.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold">
                  {item.degree[lang]}
                </h3>
                {/* <p>{item.institution} • {item.year}</p> */}
                <p>
  {(typeof item.institution === 'string' ? item.institution : item.institution[lang])} • {item.year}
</p>

              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education; 