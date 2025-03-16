import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-400">Привет, я Артур!</h1>
      <p className="mt-2 text-lg text-gray-300">Frontend-разработчик, изучаю Next.js.</p>
      <a href="/projects" className="mt-6 px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
        Смотреть проекты
      </a>
    </div>
  );
}
