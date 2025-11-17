import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import { LanguageProvider } from './context/LanguageProvider';
import Main from './components/main/Main';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Projects from './components/pages/projects/Projects';
import Portfolio from './components/pages/about/Portfolio';
import Settings from './components/pages/settings/Settings';
import './styles/globals.css';
import './components/main/header/header.css';
import './components/main/footer/footer.css';
import './components/pages/home/home.css';
import './components/pages/settings/settings.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />         
            </Routes>
          </Main>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;