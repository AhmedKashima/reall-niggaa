import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all"
    whileHover={{ y: -5 }}
  >
    <div className="text-blue-400 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default ServiceCard;