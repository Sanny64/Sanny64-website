import { useLanguage } from '../../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p className="footer-content">&copy; {new Date().getFullYear()} - {t.footer.rights}</p>
    </footer>
  );
}