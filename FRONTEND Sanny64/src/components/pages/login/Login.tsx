import { useLanguage } from "../../../hooks/useLanguage";

export default function Login() {
  const { t } = useLanguage();  
  
  return (
      <div>{t.nav.placeholder_login}</div>
    )
}