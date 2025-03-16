const projects =[
    {
        title:"Мой сайт резюме",
        desc:"Персональный сайт-резюме на Next.js с анимациями и Tailwind.",
        link:"https://cvonnext.vercel.app",
        repo:"https://github.com/cllown/CVONNEXT"
    },

    {
        title:"Кино-портал",
        desc:"Сайт на Angular для выбора актуальных фильмов",
        link:"https://cllown.github.io/movies/movies/",
        repo:"https://github.com/cllown/movies"
    },

    {
        title:"Библиотека по 'Звёздные войны'",
        desc:"информация по персонажам из звёздных войн(на Ангулар)",
        link:"https://cllown.github.io/star-wars/",
        repo:"https://github.com/cllown/star-wars"
    },

    {
        title:"Дашборд",
        desc:"Небольшой лендинг(на Pug)",
        link:"https://cllown.github.io/Dashboard/",
        repo:"https://github.com/cllown/Dashboard"
    },

    {
        title:"Карта",
        desc:"Игровая карта(на реакт)",
        link:"https://cllown.github.io/test-two/",
        repo:"https://github.com/cllown/test-two"
    },
    {
        title:"Телеграм-приложение",
        desc:"Маленькой Тг приложение с подключением крипто-кошелька(на реакт)",
        link:"https://cllown.github.io/tg-mini-app/",
        repo:"https://github.com/cllown/tg-mini-app"
    },
    {
        title:"Growfy",
        desc:"Верстка макета на чистом html/css/js",
        link:"https://cllown.github.io/growfy/",
        repo:"https://github.com/cllown/growfy"
    },
]
export default function Projects() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Мои проекты</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
          <div key={index} className="p-6 border border-gray-700 rounded-xl shadow-lg bg-gray-800">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.desc}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.link}
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition"
              >
                Демо
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
            </div>
        </div>
    );
}