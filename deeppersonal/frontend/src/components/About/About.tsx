import { motion } from 'framer-motion';
import { 
  FaTelegramPlane as TelegramIcon,
  FaGithub as GithubIcon,
  FaInstagram as InstagramIcon,
  FaVk as VkIcon,
  FaEnvelope as EmailIcon,
  FaLinkedin as LinkedinIcon,
} from 'react-icons/fa';
import ContactIcon from '../common/ContactIcon';

interface AboutProps {
  about: {
    name: string;
    bio: string;
    photo: string;
    contacts: {
      email: string;
      telegram: string;
      github: string;
      vk: string;
      instagram: string;
      linkedin?: string;
    };
  };
  lang: 'ru' | 'en';
}

const About = ({ about, lang }: AboutProps) => {
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
    <section id="about" className="py-16">
      <motion.div 
        className="flex flex-col md:flex-row items-start gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div variants={item} className="flex-shrink-0">
          <div className="relative">
            <img
              src={`http://localhost:8000${about.photo}`}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
              {lang === 'ru' ? 'Full-stack' : 'Full-stack'}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={item} className="flex-grow">
          <h2 className="text-3xl font-bold mb-6">{lang === 'ru' ? 'Обо мне' : 'About'}</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">{about.bio}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Имя:' : 'Name:'}</h3>
              <p>Ahmed Kashima</p>
            </div>
            <div>
              <h3 className="text-blue-400 font-medium">Email:</h3>
              <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
                {about.contacts.email}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-medium">{lang === 'ru' ? 'Телеграм:' : 'Telegram:'}</h3>
              <a 
                href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {about.contacts.telegram}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-medium">GitHub:</h3>
              <a 
                href={about.contacts.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {about.contacts.github.split('/').pop()}
              </a>
            </div>
          </div>
          
          <div className="flex gap-6 text-2xl">
            <ContactIcon
              href={`mailto:${about.contacts.email}`}
              Icon={EmailIcon}
              title="Email"
            />
            <ContactIcon
              href={`https://t.me/${about.contacts.telegram.replace('@', '')}`}
              Icon={TelegramIcon}
              title="Telegram"
            />
            <ContactIcon
              href={about.contacts.github}
              Icon={GithubIcon}
              title="GitHub"
            />
            <ContactIcon
              href={about.contacts.vk}
              Icon={VkIcon}
              title="VK"
            />
            <ContactIcon
              href={about.contacts.instagram}
              Icon={InstagramIcon}
              title="Instagram"
            />
            {about.contacts.linkedin && (
              <ContactIcon
                href={about.contacts.linkedin}
                Icon={LinkedinIcon}
                title="LinkedIn"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;