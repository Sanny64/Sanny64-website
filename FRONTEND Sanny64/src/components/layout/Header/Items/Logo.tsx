import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <div className="logo-container">
          <Link to="/home" role="menuitem">
            <img 
              src="/favicon.ico" 
              alt="Website Logo" 
              width="64" 
              height="64"
              className="logo"
            />
          </Link>
        </div>
    )
}