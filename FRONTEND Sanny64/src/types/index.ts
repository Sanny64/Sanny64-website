// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Language types
export type Language = 'en' | 'de';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

// Translation structure
export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    adventure: string;
  };
  settings: {
    title: string;
    language: string;
    theme: string;
    lightMode: string;
    darkMode: string;
  };
  footer: {
    rights: string;
  };
}