import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importação dos arquivos de tradução
import pt from './locales/pt.json';
import es from './locales/esp.json';
import en from './locales/eua.json';

const resources = {
  pt: {
    translation: pt
  },
  es: {
    translation: es
  },
  en: {
    translation: en
  }
};

i18n
  // Plugin para detectar idioma do browser
  .use(LanguageDetector)
  // Plugin para React
  .use(initReactI18next)
  // Inicializar configurações
  .init({
    resources,
    fallbackLng: 'pt', // Português como padrão
    lng: 'pt', // Idioma inicial
    debug: true, // Ativar durante desenvolvimento
    
    // Configurações de detecção
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Salvar preferência no localStorage
    },

    interpolation: {
      escapeValue: false // React já escapa automaticamente
    },

    // Configurações para melhor performance
    react: {
      useSuspense: false
    }
  });

export default i18n;