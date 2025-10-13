import { useState } from 'react';
import { useTheme } from '../../../../hooks/useTheme';
import { useLanguage } from '../../../../hooks/useLanguage';
import { MoreVertical, Languages, Moon, Sun, LogInIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 
import type { Language } from '../../../../types';


export default function SettingsMenu() {
  const [ isOpen, setIsOpen ] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
    setIsOpen(false);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsOpen(false);
  };

  return (
    <div className="settings-menu" aria-label={t.settings.menu}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.settings.title}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="settings-trigger"
      >
        <MoreVertical size={24} aria-label={t.settings.icon} role="image"/>
      </button>
      
      {isOpen && (
        <div className="settings-dropdown" role="menu" aria-label={t.settings.options}>
          <div className="settings-section">
            <button
              onClick={handleLoginClick}
              role="menuitem"
              aria-label={t.settings.login_redirect}
              className="settings-option-button"
            >
              <LogInIcon size={20} />
              <span>Login</span>
            </button>
          </div>

          <div className="settings-section">
            <button 
              onClick={() => handleLanguageChange(language === 'en' ? 'de' : 'en')}
              role="menuitem"
              aria-label={`${t.settings.switch} ${language === 'en' ? t.settings.german : t.settings.english}`}
              className="settings-option-button"
            >
              <Languages size={20} />
              <span>{language === 'en' ? 'Deutsch' : 'English'}</span>
            </button>
          </div>
          
          <div className="settings-section">
            <button 
              onClick={handleThemeToggle}
              role="menuitem"
              aria-label={`${t.settings.switch} ${theme === 'light' ? t.settings.darkMode : t.settings.lightMode}`}
              className="settings-option-button"
            >
              {theme === 'light' ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
              <span>{theme === 'light' ? t.settings.darkMode : t.settings.lightMode}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}