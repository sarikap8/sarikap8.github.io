// FadeInSection.js
import {React, useState} from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  return (
    <div ref={ref} className={`fade-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
