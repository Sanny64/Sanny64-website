import { useLanguage } from "../../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();  
  
  return (
      <div className="content">{t.about.placeholder}</div>
    )
}