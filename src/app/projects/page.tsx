const projects = [
  {
    title: "Мой сайт резюме",
    desc: "Персональный сайт-резюме на Next.js с анимациями и Tailwind.",
    link: "https://cvonnext.vercel.app",
    repo: "https://github.com/cllown/CVONNEXT",
  },
  {
    title: "Кино-портал",
    desc: "Сайт на Angular для выбора актуальных фильмов",
    link: "https://cllown.github.io/movies/",
    repo: "https://github.com/cllown/movies",
  },
  {
    title: "Библиотека по 'Звёздные войны'",
    desc: "Информация по персонажам из 'Звёздных войн' (на Angular).",
    link: "https://cllown.github.io/star-wars/",
    repo: "https://github.com/cllown/star-wars",
  },
  {
    title: "Дашборд",
    desc: "Небольшой лендинг (на Pug).",
    link: "https://cllown.github.io/Dashboard/",
    repo: "https://github.com/cllown/Dashboard",
  },
  {
    title: "Карта",
    desc: "Игровая карта (на React).",
    link: "https://cllown.github.io/test-two/",
    repo: "https://github.com/cllown/test-two",
  },
  {
    title: "Телеграм-приложение",
    desc: "Маленькое Telegram-приложение с подключением крипто-кошелька (на React).",
    link: "https://cllown.github.io/tg-mini-app/",
    repo: "https://github.com/cllown/tg-mini-app",
  },
  {
    title: "Growfy",
    desc: "Верстка макета на чистом HTML/CSS/JS.",
    link: "https://cllown.github.io/growfy/",
    repo: "https://github.com/cllown/growfy",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto p-6 z-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Мои проекты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-8 border border-border rounded-2xl shadow-xl bg-card transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <h2 className="text-3xl font-semibold text-foreground">{project.title}</h2>
            <p className="text-secondary mt-3 text-lg">{project.desc}</p>
            <div className="mt-5 flex gap-5 justify-center">
              <a
                href={project.link}
                target="_blank"
                className="px-6 py-3 bg-primary text-white rounded-lg transition hover:bg-primary-hover text-lg"
              >
                Демо
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg transition hover:bg-gray-600 text-lg"
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
