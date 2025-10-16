import { useLanguage } from "../../../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();  
  
  return (
      <div className="content">{t.home.placeholder}</div>
    )
}