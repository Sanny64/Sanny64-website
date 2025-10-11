import { useLanguage } from "../../../hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();  
  
  return (
      <div>{t.nav.placeholder_projects}</div>
    )
}