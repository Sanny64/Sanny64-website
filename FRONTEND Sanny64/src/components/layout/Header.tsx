// Header.tsx
import { useLanguage } from '../../hooks/useLanguage';
import SettingsMenu from '../ui/SettingsMenu';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header" role="banner">
      <div className="header-content">
        {/* Logo - Home link*/}
        <div className="logo-container">
          <a href="#home" aria-label="Home">
            <img 
              src="/favicon.ico" 
              alt="Website Logo" 
              width="64" 
              height="64"
              className="logo"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation" className="main-navigation">
          <ul role="menubar">
            <li role="none">
              <a href="#about" role="menuitem">{t.nav.about}</a>
            </li>
            <li role="none">
              <a href="#projects" role="menuitem">{t.nav.projects}</a>
            </li>
            <li role="none">
              <a href="#adventure" role="menuitem">{t.nav.adventure}</a>
            </li>
          </ul>
        </nav>

        {/* Settings menu */}
        <SettingsMenu />
      </div>
    </header>
  );
}