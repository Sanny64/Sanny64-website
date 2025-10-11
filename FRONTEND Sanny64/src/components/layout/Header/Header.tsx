import Logo from './Items/Logo';
import NavBar from './Items/Navbar';
import SettingsMenu from './Items/SettingsMenu';

export default function Header() {
    return (
    <header className="header" role="banner">
      <div className="header-content">
        <Logo />
        <NavBar />
        <SettingsMenu />
      </div>
    </header>
  );
}