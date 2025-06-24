import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface ContactIconProps {
  href: string;
  Icon: IconType;
  title: string;
}

const ContactIcon = ({ href, Icon, title }: ContactIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="hover:text-blue-400 transition-colors"
    whileHover={{ y: -3 }}
  >
    <Icon className="text-2xl" />
  </motion.a>
);

export default ContactIcon;