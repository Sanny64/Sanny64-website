import { useLanguage } from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - {t.footer.rights}</p>
    </footer>
  );
}