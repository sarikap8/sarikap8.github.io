// SocialIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialIcons = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
  const githubUrl = 'https://github.com/your-github-profile';
  const email = 'mailto:your.email@example.com';

  return (
    <div className="social-icons">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href={email} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
