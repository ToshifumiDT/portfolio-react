// App.jsx
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { HamburgerProvider } from './components/header/HamburgerContext';
import ContactForm from './components/contactform/ContactForm';
import SkillSection from './components/skillicon/SkillSection';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Introduction from './components/home/introduction';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HamburgerProvider>
      {/* 言語切り替え（国旗アイコン＋レスポンシブ） */}
      <div className="flex gap-2 items-center justify-center sm:justify-end px-4 py-2 flex-wrap sm:flex-nowrap">
        <button
          onClick={() => handleLanguageChange('en')}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border transition-all duration-200
            ${i18n.language === 'en'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-transparent text-white border-gray-500 hover:bg-gray-700'
            }`}
        >
          <img src="/flags/gb.png" alt="English" className="w-5 h-5" />
          English
        </button>
        <button
          onClick={() => handleLanguageChange('ja')}
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm border transition-all duration-200
            ${i18n.language === 'ja'
              ? 'bg-gray-700 text-white border-gray-600'
              : 'bg-transparent text-white border-gray-500 hover:bg-gray-700'
            }`}
        >
          <img src="/flags/jp.png" alt="日本語" className="w-5 h-5" />
          日本語
        </button>
      </div>

      {/* 各セクション */}
      <Header />
      <Introduction />
      <About />
      <SkillSection />
      <Projects />

      {/* GitHubリンク */}
      <div id="Github" className="text-center my-6">
        <a
          href="https://github.com/ToshifumiDT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-1 text-blue-500 hover:underline"
        >
          <img src="./icons8-github-100.png" alt="Githublink" className="github-icon w-16 h-16" />
          <p>{t('githubLinkText')}</p>
        </a>
      </div>

      <ContactForm />
    </HamburgerProvider>
  );
}

export default App;
