import { Link } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';

export default function NavBar() {
  const { t } = useLanguage();
  
  return (
    <nav aria-label="Main navigation" className="main-navigation">
      <ul role="menubar">
        <li role="none">
          <Link to="https://www.sanny64.de/about" role="menuitem">{t.nav.about}</Link>
        </li>
        <li role="none">
          <Link to="https://www.sanny64.de/projects" role="menuitem">{t.nav.projects}</Link>
        </li>
        <li role="none">
          <Link to="https://www.adventure.sanny64.de" role="menuitem">{t.nav.adventure}</Link>
        </li>
      </ul>
    </nav>
  );
}