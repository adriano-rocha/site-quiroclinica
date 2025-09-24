import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    document.body.style.overflow = !mobileMenuActive ? 'hidden' : 'unset';
  };

  // CORRIGIDO: Agora usa i18n.changeLanguage()
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    
    if (mobileMenuActive) {
      setMobileMenuActive(false);
      document.body.style.overflow = 'unset';
    }
  };

  // NOVO: Menu items agora usa traduções
  const menuItems = [
    { id: 'home', label: t('header.nav.home') },
    { id: 'sobre', label: t('header.nav.about') },
    { id: 'resultados', label: t('header.nav.results') },
    { id: 'localizacao', label: t('header.nav.location') },
    { id: 'agendamento', label: t('header.nav.contact') }
  ];

  // Idiomas disponíveis
  const languages = [
    { code: 'pt', flag: '/flags/br.png', title: 'Português' },
    { code: 'en', flag: '/flags/eua.png', title: 'English' },
    { code: 'es', flag: '/flags/esp.png', title: 'Español' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">


        <div className="logo">
          <img
            src="/images/logo-quiroclinica.png"
            alt="Quiroclínica - Dr. Vinnicius de Paula"
            onClick={() => scrollToSection('home')}
          />
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="language-selector">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`language-btn ${i18n.language === language.code ? 'active' : ''}`}
                onClick={() => changeLanguage(language.code)}
                title={language.title}
              >
                <img className="flag-image" src={language.flag} alt={language.title} />
              </button>
            ))}
          </div>
        </div>

        <div className="mobile-actions">
          <div className="mobile-flags">
            {languages.map((language) => (
              <button
                key={`mobile-${language.code}`}
                className={`language-btn ${i18n.language === language.code ? 'active' : ''}`}
                onClick={() => changeLanguage(language.code)}
                title={language.title}
              >
                <img className="flag-image-mobile-small" src={language.flag} alt={language.title} />
              </button>
            ))}
          </div>

          <button className={`menu-toggle ${mobileMenuActive ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="mobile-nav-link" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {mobileMenuActive && <div className="menu-overlay" onClick={toggleMobileMenu} />}
    </header>
  );
};

export default Header;