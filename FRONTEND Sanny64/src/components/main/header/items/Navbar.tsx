import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../hooks/useLanguage';

export default function NavBar() {
  const { t } = useLanguage();
  
  return (
    <nav aria-label={t.nav.main} className="main-navigation">
      <ul role="menubar">
        <li role="none">
          <Link to="/about" role="navbaritem" aria-label={t.nav.about_redirect}>{t.nav.about}</Link>
        </li>
        <li role="none">
          <Link to="/projects" role="navbaritem" aria-label={t.nav.projects_redirect}>{t.nav.projects}</Link>
        </li>
        <li role="none">
          <Link to="https://adventure.sanny64.de" role="navbaritem" aria-label={t.nav.adventure_redirect}>{t.nav.adventure}</Link>
        </li>
      </ul>
    </nav>
  );
}