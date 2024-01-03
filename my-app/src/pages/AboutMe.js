import React from 'react';
import FadeInSection from '../components/FadeInSection';
import TabsBox from '../components/TabBox';

const AboutMe = () => {
  return (
    <div>
    <FadeInSection>
      <section>
        <div className='title'>
          <h2>About Me</h2>
        </div>
        <div className='about-flex'>
          <img src='/homepage_picture3.png'></img>
          <div className='aboutme'>
            <p>
              Hello! I am a second-year college student, originally from San Diego. I am currently studying computer science and data science at the University of California, Berkeley. I have a lot of interests, ranging from the application of technology to computational biology and cognition to understanding how technology and public policy can equitably intersect in today's social and political climate.
            </p>
          </div>
        </div>

      </section>
    </FadeInSection>
        <FadeInSection>
        <section>
          <div className='title'>
            <h2>Skills and Coursework</h2>
          </div>
          <br></br>
            <TabsBox />
  
        </section>
      </FadeInSection>
      </div>
  );
}

export default AboutMe;