// ExperienceSection.js
import React from 'react';
import FadeInSection from './FadeInSection';


const ExperienceSection = ({ photoSrc, title, startDate, endDate, description }) => {
 return (
   <div>
   <FadeInSection>
     <div className="experience-section">
       <img width="400px" src={photoSrc} alt={title} className="experience-photo" />
       <div className="experience-details">
         <h2>{title}</h2>
         <p>{startDate} - {endDate}</p>
         <p>{description}</p>
       </div>
     </div>
   </FadeInSection>
       <div className="image-container">
       {/* Empty div with a background image */}
       <div className="repeated-background"></div>
       </div>
   </div>
 );
};


export default ExperienceSection;