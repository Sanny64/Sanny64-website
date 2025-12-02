import { useLanguage } from "../../hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();  
  
  return (
      <div className="content">{t.projects.placeholder}</div>
    )
}