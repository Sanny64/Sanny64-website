import Logo from './items/Logo';
import NavBar from './items/Navbar';
import SettingsMenu from './items/SettingsMenu';

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