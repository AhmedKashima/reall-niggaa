// import { motion } from 'framer-motion';
// import { FaTelegramPlane as TelegramIcon, FaEnvelope as EmailIcon } from 'react-icons/fa';

// interface ContactProps {
//   about: {
//     contacts: {
//       email: string;
//       telegram: string;
//     };
//   };
//   lang: 'ru' | 'en';
// }

// const Contact = ({ about, lang }: ContactProps) => {
//   const t = {
//     contact: lang === 'ru' ? 'Контакты' : 'Contact',
//     getInTouch: lang === 'ru' ? 'Свяжитесь со мной' : 'Get in Touch',
//     contactText: lang === 'ru' 
//       ? 'Готов обсудить ваш проект или ответить на вопросы.' 
//       : 'Ready to discuss your project or answer any questions.',
//     name: lang === 'ru' ? 'Ваше имя' : 'Your name',
//     message: lang === 'ru' ? 'Сообщение' : 'Message',
//     send: lang === 'ru' ? 'Отправить' : 'Send'
//   };

//   return (
//     <section id="contact" className="py-16">
//       <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl font-semibold mb-4">{t.getInTouch}</h3>
//           <p className="text-gray-400 mb-6">{t.contactText}</p>
          
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <EmailIcon className="text-blue-400 text-xl mr-4" />
//               <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
//                 {about.contacts.email}
//               </a>
//             </div>
//             <div className="flex items-center">
//               <TelegramIcon className="text-blue-400 text-xl mr-4" />
//               <a 
//                 href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="hover:text-blue-400"
//               >
//                 {about.contacts.telegram}
//               </a>
//             </div>
//           </div>
//         </motion.div>
        
//         <motion.form
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <div>
//             <label htmlFor="name" className="block mb-2 text-sm font-medium">
//               {t.name}
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//               placeholder={t.name}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//               placeholder="your@email.com"
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block mb-2 text-sm font-medium">
//               {t.message}
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
//               placeholder={t.message}
//             ></textarea>
//           </div>
//           <motion.button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             {t.send}
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;





import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane as TelegramIcon, FaEnvelope as EmailIcon } from 'react-icons/fa';

interface ContactProps {
  about: {
    contacts: {
      email: string;
      telegram: string;
    };
  };
  lang: 'ru' | 'en';
}

const Contact = ({ about, lang }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const t = {
    contact: lang === 'ru' ? 'Контакты' : 'Contact',
    getInTouch: lang === 'ru' ? 'Свяжитесь со мной' : 'Get in Touch',
    contactText: lang === 'ru' 
      ? 'Готов обсудить ваш проект или ответить на вопросы.' 
      : 'Ready to discuss your project or answer any questions.',
    name: lang === 'ru' ? 'Ваше имя' : 'Your name',
    message: lang === 'ru' ? 'Сообщение' : 'Message',
    send: lang === 'ru' ? 'Отправить' : 'Send',
    success: lang === 'ru' ? 'Сообщение отправлено!' : 'Message sent!',
    error: lang === 'ru' ? 'Ошибка отправки.' : 'Failed to send.'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch('http://localhost:8000/api/contact/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData)
  //     });

  //     if (res.ok) {
  //       setStatus('success');
  //       setFormData({ name: '', email: '', message: '' });
  //     } else {
  //       setStatus('error');
  //     }
  //   } catch (err) {
  //     setStatus('error');
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json(); // Try to parse response
      console.log('Response:', data); // Log response
  
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Server error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">{t.contact}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">{t.getInTouch}</h3>
          <p className="text-gray-400 mb-6">{t.contactText}</p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <EmailIcon className="text-blue-400 text-xl mr-4" />
              <a href={`mailto:${about.contacts.email}`} className="hover:text-blue-400">
                {about.contacts.email}
              </a>
            </div>
            <div className="flex items-center">
              <TelegramIcon className="text-blue-400 text-xl mr-4" />
              <a 
                href={`https://t.me/${about.contacts.telegram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {about.contacts.telegram}
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder={t.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              {t.message}
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder={t.message}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.send}
          </motion.button>

          {status === 'success' && (
            <p className="text-green-400 text-sm mt-2">{t.success}</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-2">{t.error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
