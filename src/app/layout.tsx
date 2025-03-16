import "./globals.css";

export default function  RootLayout({children}: {children: React.ReactNode}){
  return(
    <html lang="ru">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <header className="p-4 bg-gray-800 shadow-md">
          <nav className="flex justify-center gap-6">
            <a href="/" className="text-lg font-semibold hover:text-gray-400">Главная</a>
            <a href="/about" className="text-lg font-semibold hover:text-gray-400">Обо мне</a>
            <a href="/experience" className="text-lg font-semibold hover:text-gray-400">Мой опыт</a>
            <a href="/projects" className="text-lg font-semibold hover:text-gray-400">Мои Проекты</a>
          </nav>
        </header>
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <footer className="p-4 text-center text-gray-400 bg-gray-800">© 2025 Артур Сороколіт</footer>
      </body>
    </html>
  );
}