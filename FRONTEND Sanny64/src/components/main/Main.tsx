import type { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}