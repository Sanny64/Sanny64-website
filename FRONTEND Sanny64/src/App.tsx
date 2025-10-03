import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          {/* Main app components */}
          <h1></h1>
          
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;