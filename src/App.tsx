import React, { useState, useEffect } from 'react';
import { Github, MonitorPlay, Tv, Radio, Settings2, Languages } from 'lucide-react';
import { translations } from './translations';

type Language = 'en' | 'fr' | 'es' | 'de' | 'he' | 'ar' | 'ru' | 'hi' | 'zh' | 'ja' | 'ko';

function App() {
  const [lang, setLang] = useState<Language>('he');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang] || translations.en; // Fallback to English if translation is missing
  const isRTL = ['he', 'ar'].includes(lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update document direction when language changes
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [isRTL, lang]);

  return (
    <div className={`min-h-screen bg-black text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/20 to-black" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-10" />
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent" />
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-4' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Pi-Box
          </div>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Languages className="w-5 h-5" />
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-white/5 rounded-full px-4 py-2 text-sm border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md text-white [&>option]:bg-gray-900 [&>option]:text-white"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="zh">中文</option>
                <option value="es">Español</option>
                <option value="hi">हिन्दी</option>
                <option value="fr">Français</option>
                <option value="ru">Русский</option>
                <option value="ja">日本語</option>
                <option value="de">Deutsch</option>
                <option value="ko">한국어</option>
                <option value="he">עברית</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] animate-spin-slow">
              <div className="w-full h-full rounded-full border border-white/5" />
              <div className="absolute inset-0 rotate-45">
                <div className="w-full h-full rounded-full border border-white/5" />
              </div>
              <div className="absolute inset-0 rotate-90">
                <div className="w-full h-full rounded-full border border-white/5" />
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center">
              <h1 className="text-8xl font-bold mb-8 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto] text-transparent bg-clip-text">{t.title}</h1>
              <p className="text-3xl text-blue-200/80 mb-8 max-w-3xl mx-auto font-light">{t.subtitle}</p>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">{t.description}</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/pi-box/srv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
                  <Github className={`w-5 h-5 relative ${isRTL ? 'order-2' : ''}`} />
                  <span className="relative font-medium">{t.cta}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: MonitorPlay, title: t.features.sync, gradient: 'from-blue-500 to-cyan-500' },
                { icon: Tv, title: t.features.hd, gradient: 'from-purple-500 to-pink-500' },
                { icon: Radio, title: t.features.remote, gradient: 'from-pink-500 to-red-500' },
                { icon: Settings2, title: t.features.autoplay, gradient: 'from-cyan-500 to-blue-500' }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                       style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                  <div className="relative bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 h-full transform transition-transform group-hover:-translate-y-2">
                    <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{t.benefits.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: t.benefits.easy.title, description: t.benefits.easy.description, image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&w=800&q=80" },
                { title: t.benefits.affordable.title, description: t.benefits.affordable.description, image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80" },
                { title: t.benefits.reliable.title, description: t.benefits.reliable.description, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" },
                { title: t.benefits.flexible.title, description: t.benefits.flexible.description, image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80" }
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-64 mb-6 rounded-3xl overflow-hidden">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover transform transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{t.gallery.title}</h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">{t.gallery.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=800&q=80"
              ].map((image, index) => (
                <div key={index} className="group relative h-64 rounded-3xl overflow-hidden">
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transform transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?auto=format&fit=crop&w=1920&q=80"
                alt="Pi-Box Demo"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center text-center p-8">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">
                    Transform Your Digital Displays with Pi-Box
                  </h2>
                  <a 
                    href="https://github.com/pi-box/srv" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full hover:bg-blue-50 transition-colors"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <Github className={`w-5 h-5 ${isRTL ? 'order-2' : ''}`} />
                    <span className="font-medium">{t.cta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;