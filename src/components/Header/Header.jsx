import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeLang, setActiveLang] = useState('PT');
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

  const changeLanguage = (lang) => {
    setActiveLang(lang);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileMenuActive) {
      setMobileMenuActive(false);
      document.body.style.overflow = 'unset';
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'localizacao', label: 'Localização' },
    { id: 'contato', label: 'Contato' }
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
            <button className={`language-btn ${activeLang === 'PT' ? 'active' : ''}`} onClick={() => changeLanguage('PT')} title="Português">
              <img className="flag-image" src="/flags/br.png" alt="Português" />
            </button>
            <button className={`language-btn ${activeLang === 'EN' ? 'active' : ''}`} onClick={() => changeLanguage('EN')} title="English">
              <img className="flag-image" src="/flags/eua.png" alt="English" />
            </button>
            <button className={`language-btn ${activeLang === 'ES' ? 'active' : ''}`} onClick={() => changeLanguage('ES')} title="Español">
              <img className="flag-image" src="/flags/esp.png" alt="Español" />
            </button>
          </div>
        </div>

        <div className="mobile-actions">
          <div className="mobile-flags">
            <button className={`language-btn ${activeLang === 'PT' ? 'active' : ''}`} onClick={() => changeLanguage('PT')} title="Português">
              <img className="flag-image-mobile-small" src="/flags/br.png" alt="Português" />
            </button>
            <button className={`language-btn ${activeLang === 'EN' ? 'active' : ''}`} onClick={() => changeLanguage('EN')} title="English">
              <img className="flag-image-mobile-small" src="/flags/eua.png" alt="English" />
            </button>
            <button className={`language-btn ${activeLang === 'ES' ? 'active' : ''}`} onClick={() => changeLanguage('ES')} title="Español">
              <img className="flag-image-mobile-small" src="/flags/esp.png" alt="Español" />
            </button>
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
