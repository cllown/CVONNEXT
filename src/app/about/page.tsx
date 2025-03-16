export default function AboutPage() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Обо мне</h1>
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300 text-lg">
            Привет! Меня зовут <span className="text-blue-400 font-semibold">Артур Сороколит</span>, я начинающий фронтенд-разработчик.
            Увлекаюсь веб-технологиями и стремлюсь к развитию в сфере IT.  
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            Сейчас изучаю <span className="text-blue-400 font-semibold">Next.js</span>, но также имею опыт работы с Angular, TypeScript, 
            NgRx и SCSS. Люблю разрабатывать современные интерфейсы с красивыми анимациями и удобным UX.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6 text-blue-400">Навыки</h2>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>🚀 JavaScript (ES6+), TypeScript</li>
            <li>⚛️ React, Next.js</li>
            <li>🎨 Tailwind CSS, SCSS</li>
            <li>🅰️ Angular, NgRx</li>
            <li>🗄️ MySQL, SQL-запросы</li>
            <li>⚙️ Git, GitHub</li>
          </ul>
  
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1NhoVsRgNCb2mLxtHWnBbU5ovfAdKiUPq/view?pli=1"
              target="_blank"
              className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition"
            >
              Смотреть резюме
            </a>
          </div>
        </div>
      </div>
    );
  }
  