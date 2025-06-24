interface ResumeProps {
    lang: 'ru' | 'en';
  }
  
  const Resume = ({ lang }: ResumeProps) => {
    const t = {
      resume: lang === 'ru' ? 'Резюме' : 'Resume',
      resumeText: lang === 'ru'
        ? `Я студент технического вуза и активно развиваюсь как full-stack разработчик. Мой опыт охватывает создание веб- и мобильных приложений, разработку Telegram- и VK-ботов, работу с REST API, авторизацией через cookie и защитой маршрутов. Я применяю Python, Django, React, Flutter, Swift, PostgreSQL и Docker в своих проектах. Также имею опыт работы с ACL, MinIO, pgAdmin, Qlik Sense, настройкой прав доступа в Linux (setgid, sticky bit), тестированием API через Postman, использованием виртуальных окружений (venv) и деплоем с помощью Docker Compose. 

        , интегрирую React Native с Expo и Django, работаю с QR-кодами для запуска мобильных приложений. Визуальный дизайн я реализую через Inkscape и GIMP (Script-Fu). Также занимаюсь генерацией контента с использованием ИИ — создаю изображения, аватары и видео с управлением стилем. Уверенно работаю с виртуализацией (VirtualBox), SSH, и конфигурацией серверов Ubuntu и ALT Linux.`
        
            : `I am a technical university student and a growing full-stack developer. My experience includes building web and mobile applications, creating Telegram and VK bots, working with REST APIs, cookie-based authentication, and route protection. I use Python, Django, React, Flutter, Swift, PostgreSQL, and Docker in my projects. I also have experience with ACLs, MinIO, pgAdmin, Qlik Sense, Linux permissions configuration (setgid, sticky bit), API testing with Postman, managing virtual environments (venv), and deploying apps with Docker Compose. 
        
        In addition, integrate React Native with Expo and Django, and generate QR codes for mobile client launch. I work with design tools like Inkscape and GIMP (Script-Fu). I also explore AI content generation — creating images, avatars, and videos with visual style control. I am confident in virtualization (VirtualBox), SSH usage, and server configuration on Ubuntu and ALT Linux.`,
    };
  
    return (
      <section id="resume" className="py-16">
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">{t.resume}</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">{t.resumeText}</p>
        </div>
      </section>
    );
  };
  
  export default Resume;