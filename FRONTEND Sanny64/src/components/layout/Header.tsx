import Logo from './header_items/Logo';
import NavBar from './header_items/Navbar';
import SettingsMenu from './header_items/SettingsMenu';

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