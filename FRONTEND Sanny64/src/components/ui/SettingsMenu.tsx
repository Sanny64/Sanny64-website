// SettingsMenu.tsx
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { MoreVertical, Languages, Moon, Sun } from 'lucide-react';
import type { Language } from '../../types';

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsOpen(false);
  };

  return (
    <div className="settings-menu">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.settings.title}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="settings-trigger"
      >
        <MoreVertical size={24} />
      </button>
      
      {isOpen && (
        <div className="settings-dropdown" role="menu" aria-label="Settings options">
          <div className="settings-section">
            <button 
              onClick={() => handleLanguageChange(language === 'en' ? 'de' : 'en')}
              aria-label={`Switch to ${language === 'en' ? 'German' : 'English'} language`}
              className="settings-option-button"
            >
              <Languages size={20} />
              <span>{language === 'en' ? 'Deutsch' : 'English'}</span>
            </button>
          </div>
          
          <div className="settings-section">
            <button 
              onClick={handleThemeToggle}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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