import { 
    FaTelegramPlane as TelegramIcon,
    FaGithub as GithubIcon,
    FaInstagram as InstagramIcon,
    FaVk as VkIcon,
    FaLinkedin as LinkedinIcon,
  } from 'react-icons/fa';
  import ContactIcon from '../common/ContactIcon';
  
  interface FooterProps {
    about: {
      contacts: {
        telegram: string;
        github: string;
        vk: string;
        instagram: string;
        linkedin?: string;
      };
    };
    lang: 'ru' | 'en';
  }
  
  const Footer = ({ about, lang }: FooterProps) => {
    return (
      <footer className="bg-gray-900/80 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
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
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ahmed Kashima. {lang === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;