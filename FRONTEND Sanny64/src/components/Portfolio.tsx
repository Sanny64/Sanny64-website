import React from 'react';
import './Portfolio.css';
import githubLightIcon from '../assets/githubLight.svg';

const Portfolio: React.FC = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/Sanny64', icon: githubLightIcon, isImage: true },
    { name: 'E-Mail', url: 'mailto:webmaster@sanny64.de', icon: '✉️', isImage: false },
  ];

  return (
    <div className="portfolio-container">
      <div className="content">
        <h1 className="title">Sanny</h1>
        <p className="subtitle">Test Deployment</p>
        
        <div className="links-container">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">
                {link.isImage ? (
                  <img src={link.icon} alt={`${link.name} icon`} style={{ width: '24px', height: '24px' }} />
                ) : (
                  link.icon
                )}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;