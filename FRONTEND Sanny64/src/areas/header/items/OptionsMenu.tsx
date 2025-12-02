import { useState, useRef, useEffect } from 'react';
import { MoreVertical, LogInIcon, LucideSettings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';

export default function OptionsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLoginClick = () => {
    window.location.href = "https://auth.sanny64.de"
    setIsOpen(false);
  };

  const handleOptionsClick = () => {
    navigate("/settings");
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="options" aria-label={t.options.menu}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.options.title}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="options-trigger"
      >
        <MoreVertical className="options-icon" aria-label={t.options.icon} role="image"/>
      </button>
      
      {isOpen && (
        <div className="options-menu" role="menu" aria-label={t.options.title}>
          
          <div className="options-section">
            <button
              onClick={handleLoginClick}
              role="menuitem"
              aria-label={t.options.login_redirect}
              className="option-button"
            >
              <LogInIcon size={20} />
              <span>Login</span>
            </button>
          </div>

          <div className="options-section">
            <button
              onClick={handleOptionsClick}
              role="menuitem"
              aria-label={t.options.settings_redirect}
              className="option-button"
            >
              <LucideSettings size={20} />
              <span>{t.options.settings}</span>
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
}