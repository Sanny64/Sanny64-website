// Theme types
export type Theme = 'dark' | 'light';

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
    main: string;
    logo: string;
    home_redirect: string;
    about: string;
    about_redirect: string;
    projects: string;
    projects_redirect: string;
    adventure: string;
    adventure_redirect: string;
  };
  settings: {
    menu: string;
    icon: string;
    title: string;
    options: string;
    login_redirect: string;
    switch: string;
    german: string;
    english: string;
    theme: string;
    darkMode: string;
    lightMode: string;
  };
  home: {
    placeholder: string;
  },
  login: {
    placeholder: string;
  },
  about: {
    placeholder: string;
  },
  projects: {
    placeholder: string;
  },
  footer: {
    rights: string;
  };
}