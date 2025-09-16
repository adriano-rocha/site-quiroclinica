import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'pt',
      name: 'Português',
      flag: '/flags/br.png'
    },
    {
      code: 'es', 
      name: 'Español',
      flag: '/flags/esp.png'
    },
    {
      code: 'en',
      name: 'English', 
      flag: '/flags/eua.png'
    }
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="language-selector">
      {languages.map((language) => (
        <button
          key={language.code}
          className={`language-btn ${i18n.language === language.code ? 'active' : ''}`}
          onClick={() => changeLanguage(language.code)}
          title={language.name}
        >
          <img 
            src={language.flag} 
            alt={language.name}
            className="flag-icon"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;