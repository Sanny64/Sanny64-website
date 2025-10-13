import { Link } from "react-router-dom"
import { useLanguage } from "../../../../hooks/useLanguage"

export default function Logo() {

  const { t } = useLanguage();

    return (
        <div className="logo-container" aria-label="Logo Container">
          <Link to="/home" role="menuitem" aria-label={t.nav.home_redirect}>
            <img 
              src="/favicon.ico" 
              alt="Website Logo" 
              width="64" 
              height="64"
              className="logo"
              aria-label={t.nav.logo}
            />
          </Link>
        </div>
    )
}