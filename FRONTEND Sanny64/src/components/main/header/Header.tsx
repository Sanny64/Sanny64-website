import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './items/Logo';
import NavBar from './items/Navbar';
import OptionsMenu from './items/OptionsMenu';
import { Menu, X, Settings } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="logo-section">
          <Logo />
          <span className="copyright-text">{t.nav.coded_by}</span>
        </div>
        
        {/* Options button - hidden on desktop */}
        <button 
          className="options-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t.nav.close_menu : t.nav.open_menu}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <NavBar onLinkClick={() => setIsMenuOpen(false)} />
          <Link 
            to="/settings" 
            className="mobile-settings-link"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t.nav.settings_redirect}
          >
            <Settings size={20} />
            <span>{t.settings.title}</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="desktop-menu">
          <NavBar />
          <OptionsMenu />
        </div>
      </div>
    </header>
  );
}