import { useLanguage } from "../../../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();  
  
  return (
      <div>{t.nav.placeholder_about}</div>
    )
}