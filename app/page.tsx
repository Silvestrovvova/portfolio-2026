"use client";
import { useState } from "react";
import {
  MessageCircle,
  Facebook,
  Construction,
  Brain,
  Heart,
} from "lucide-react";
export default function home() {
  const [lang, setLang] = useState("ru");
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* --- 1.Шапка --- */}
      <header className="sticky top-0 z-50 w-full border-b border-white/ 10 bg-black/60 backdrop-blur-xl text-white transition-all">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wider uppercase">
              Сильвестров Владимир
            </span>
            <span className="text-xs text-slate-400">Silvestrov Volodymyr</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">
              Обо мне
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Проекты
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition">
              <a
                href="https://wa.me/380930800145"
                target="_blank"
                title="WhatsApp"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition text-sm font-medium"
              >
                WhatsApp
              </a>
            </button>
          </nav>
          <div className="flex gap-4 mr-4 md:mr-8 border-slate-700 pr-4 md:pr-8">
            <button
              onClick={() => setLang("ru")}
              className={`text-xs ${lang === "ru" ? "text-blue-400 font-bold" : "text-white"}`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("cz")}
              className={`text-xs ${lang === "cz" ? "text-blue-400 font-bold" : "text-white"}`}
            >
              CZ
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-xs ${lang === "en" ? "text-blue-400 font-bold" : "text-white"}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>
      {/* --- 2.Главный контент --- */}
      <main className="pt-10">
        {/* --- Секция приветствия --- */}
        <section className="pt-20 pb-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 leading-tight">
              Привет! Я <br /> <span className="text-blue-600">Владимир</span>
            </h1>
            {/* Это оставляем */}
            <div className="mt-10">
              {lang === "ru" && (
                <p className="text-xl text-slate-600 border-l-4 border-blue-600 pl-6 animate-in fade-in duration-500">
                  Начинающий Frontend-разработчик. Сфокусирован на чистом,
                  семантическом HTML и современном CSS.
                </p>
              )}
              {lang === "cz" && (
                <p className="text-xl text-slate-600 border-l-4 border-blue-600 pl-6 animate-in fade-in duration-500">
                  Ahoj! Jsem začínající frontendový vývojář. Zaměřuje se na
                  čistý, sémantický HTML a moderní CSS.
                </p>
              )}
              {lang === "en" && (
                <p className="text-xl text-slate-600 border-l-4 border-blue-600 pl-6 animate-in fade-in duration-500">
                  Hi! I`m a beginner front-end developer. I specialize in clean,
                  semantic HTML and modern CSS.
                </p>
              )}
            </div>
            {/* Блок контактов под приветсвие */}
            <div className="mt-16 flex flex-wrap gap-4">
              {/* Кнопка Whatsapp */}
              <a
                href="https://wa.me/380930800145"
                target="_blank"
                className="flex-1 min-w-[200px] bg-[#25d366] text-white flex items-center juistify-center gap-3 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100021775414698"
                target="_blank"
                className="flex-1 min-w-[200px] bg-[#1877f2] text-white flex items-center juistify-center gap-3 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
              >
                <Facebook size={20} />
                Facebook
              </a>
            </div>
            <div className="mt-12">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Технологии
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* --- Секция Проекты --- */}
        <section id="projects" className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Мои проекты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
              {/* --- Проект 1: BuildIFY --- */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center juistify-center mb-6">
                  <Construction size={28} />
                </div>
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {/* --- Здесь будет картинка стройки --- */}
                  <img
                    src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auot=compress&cs=tinysrgb&w=1260&h=750&dpr=2%27"
                    alt="BuildIfy project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">
                    BuildIFY Image
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    BuildIFY
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    BUILDIFY. Эксперты в строительстве. Реализована полностью
                    адаптивная и кроссбраузерная верстка.
                  </p>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Посмотреть сайт
                  </button>
                </div>
              </div>
              {/* --- Проект2: Project-ProAI --- */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Brain size={28} />
                </div>
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {/* --- Здесь будет картинка робо-руки --- */}
                  <img
                    src="https://static.tildacdn.com/tild6663-3365-4066-b333-326138346364/b5e6c94b-01ba-436d-9.jpg"
                    alt="ProAI project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">
                    ProAI Image
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Project-ProAI
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Интерактивность с применением JS и сложных CSS-анимаций.
                    Погружение в мир AI.
                  </p>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Посмотреть сайт
                  </button>
                </div>
              </div>
              {/* --- Проект 3: Даша вязание --- */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={28} />
                </div>
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {/* Здесь будет картинка вязание */}
                  <img
                    src="https://silvestrovvova.github.io/Dasha-project/images/Kostm.jpg"
                    alt="Dasha project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-sm">
                    Knitting Image
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Даша вязание
                  </h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Мир пряжи и уникального дизайна. Каждое изделие создано,
                    чтобы дарить уют.
                  </p>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                    Посмотреть сайт
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- footer --- */}
        <footer className="bg-white border-t border-slate-100 py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-500 text-sm">
              2026 Владимир Сильвестров. Все права защищены.
            </div>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-green-600">
                WhatsApp
              </a>
            </div>
            <div className="text-xs text-slate-300 uppercase tracking-widest">
              Сделано с любовью и соблюдением GDPR
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
