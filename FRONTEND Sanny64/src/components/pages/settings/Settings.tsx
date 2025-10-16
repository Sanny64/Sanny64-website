import { Moon, Sun, Languages, Check, Paintbrush } from 'lucide-react';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../hooks/useLanguage';
import type { Language } from '../../../types';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">{t.settings.title}</h1>
        
        {/* Theme Settings Section */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-header-icon">
              <Paintbrush size={24} />
            </div>
            <div>
              <h2 className="settings-card-title">{t.settings.theme}</h2>
              <p className="settings-card-description">
                {t.settings.theme_description}
              </p>
            </div>
          </div>
          
          <div className="settings-options">
            <button
              onClick={() => theme === 'dark' && toggleTheme()}
              className={`settings-option ${theme === 'light' ? 'settings-option-active' : ''}`}
              aria-label={`${t.settings.switch} ${t.settings.lightMode}`}
              aria-pressed={theme === 'light'}
            >
              <div className="settings-option-content">
                <div className="settings-option-icon">
                  <Sun size={24} />
                </div>
                <div className="settings-option-text">
                  <span className="settings-option-label">{t.settings.lightMode}</span>
                  <span className="settings-option-sublabel">
                    {t.settings.light_description}
                  </span>
                </div>
              </div>
              {theme === 'light' && (
                <Check size={20} className="settings-option-check" />
              )}
            </button>

            <button
              onClick={() => theme === 'light' && toggleTheme()}
              className={`settings-option ${theme === 'dark' ? 'settings-option-active' : ''}`}
              aria-label={`${t.settings.switch} ${t.settings.darkMode}`}
              aria-pressed={theme === 'dark'}
            >
              <div className="settings-option-content">
                <div className="settings-option-icon">
                  <Moon size={24} />
                </div>
                <div className="settings-option-text">
                  <span className="settings-option-label">{t.settings.darkMode}</span>
                  <span className="settings-option-sublabel">
                    {t.settings.dark_description}
                  </span>
                </div>
              </div>
              {theme === 'dark' && (
                <Check size={20} className="settings-option-check" />
              )}
            </button>
          </div>
        </section>

        {/* Language Settings Section */}
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-header-icon">
              <Languages size={24} />
            </div>
            <div>
              <h2 className="settings-card-title">{t.settings.language}</h2>
              <p className="settings-card-description">
                {t.settings.language_description}
              </p>
            </div>
          </div>
          
          <div className="settings-options">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`settings-option ${language === 'en' ? 'settings-option-active' : ''}`}
              aria-label={`${t.settings.switch} ${t.settings.english}`}
              aria-pressed={language === 'en'}
            >
              <div className="settings-option-content">
                <div className="settings-option-text">
                  <span className="settings-option-label">{t.settings.english}</span>
                  <span className="settings-option-sublabel">{t.settings.english}</span>
                </div>
              </div>
              {language === 'en' && (
                <Check size={20} className="settings-option-check" />
              )}
            </button>

            <button
              onClick={() => handleLanguageChange('de')}
              className={`settings-option ${language === 'de' ? 'settings-option-active' : ''}`}
              aria-label={`${t.settings.switch} ${t.settings.german}`}
              aria-pressed={language === 'de'}
            >
              <div className="settings-option-content">
                <div className="settings-option-text">
                  <span className="settings-option-label">{t.settings.german}</span>
                  <span className="settings-option-sublabel">{t.settings.german}</span>
                </div>
              </div>
              {language === 'de' && (
                <Check size={20} className="settings-option-check" />
              )}
            </button>
          </div>
        </section>

        {/* Info Section */}
        <div className="settings-info">
          <p>{t.settings.saved_info}</p>
        </div>
      </div>
    </div>
  );
}