import './App.css'

function App() {

  const handleClick = () => {
    window.location.href="https://www.sanny64.de"
  };

  return (
    <div>
      Authentication Service for
      <p></p>
    <button 
        onClick={handleClick}
        aria-label="redirect to main page"
        className="redirect"
      ><span>www.sanny64.de</span>
      </button>
      </div>
  )
}

export default App
