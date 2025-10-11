import { useLanguage } from "../../../hooks/useLanguage";

export default function Home() {
  const { t } = useLanguage();  
  
  return (
      <div>{t.nav.placeholder_home}</div>
    )
}