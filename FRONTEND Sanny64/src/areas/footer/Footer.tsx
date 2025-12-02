import { useLanguage } from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p className="rights">&copy; {new Date().getFullYear()} - Sanny64 - {t.footer.rights}</p>
    </footer>
  );
}