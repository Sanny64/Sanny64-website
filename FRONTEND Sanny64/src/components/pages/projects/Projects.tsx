export default function Logo() {
    return (
        <div className="logo-container">
          <a href="/home" aria-label="Home">
            <img 
              src="/favicon.ico" 
              alt="Website Logo" 
              width="64" 
              height="64"
              className="logo"
            />
          </a>
        </div>
    )
}