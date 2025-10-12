import { useLanguage } from "../../../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();  
  
  return (
      <div>{t.home.placeholder}</div>
    )
}