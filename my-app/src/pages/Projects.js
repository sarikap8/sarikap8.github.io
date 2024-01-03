import React from 'react';
import ExperienceSection from '../components/Experience';
const Projects = () => {
 return (
   <div>
     <div className='title'>
       <h2>Projects</h2>
     </div>
     <br></br>
         <p className='ip'>
           Some things I've been working on!
         </p>
         <div className='projects'>
         <ExperienceSection
           photoSrc="/cb.png" // Replace with your actual photo source
           title="Software Developer"
           startDate="January 2023"
           endDate="Present"
           description="Part of a UC Berkeley Software Consulting Organization where alongside 7 other developers, I have rearchitected an image-upload pipeline for Etsy, an ecommerce platform, and built a prison sentence visualization dashboard for Recidiviz, a criminal justice based tech startup in San Francisco. Now, as a project manager, I am leading my own group of 6 developers to execute an exciting project this Spring '24 semester :) "
         />
         <ExperienceSection
           photoSrc="/ooney.png" // Replace with your actual photo source
           title="Software Engineering Intern"
           startDate="May 2023"
           endDate="August 2023"
           description="Worked on product “PrehabPal” being used by UC San Francisco in clinical trials to make pre/post surgical procedures safer for adults over 65. Built gamification system for senior citizens using login data, redesigned and improved front-end UI, built in vascular surgery specific patient support. Revised application to be mobile user friendly.
           "
         />

         <ExperienceSection
           photoSrc="/law.jpeg" // Replace with your actual photo source
           title="Student Researcher"
           startDate="January 2023"
           endDate="December 2023"
           description="Using cosine vectorization, data parsing, optical character recognition, our team created a Supreme Court Opinion Draft Viewer to be displayed via Python Streamlit, which enables different iterations of landmark cases to be visually depicted."
         />


         <ExperienceSection
           photoSrc="/ntab.png" // Replace with your actual photo source
           title="Software Developer"
           startDate="September 2022"
           endDate="Present"
           description="Created multiple projects, including a Firebase/Firestore integrated dashboard tool for the MyCato devices of Auli, an Episode style game harnessing Steady State Visually Evoked Potentials, an Art Exhibition using EEG data via MaxMSP, and a classifier based on OpenNeuro data to predict emotion based on the music currently playing."
         />




         </div>
   </div>
 );
}


export default Projects;
