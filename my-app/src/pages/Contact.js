import React from 'react';
import FadeInSection from '../components/FadeInSection';
import SocialIcons from '../components/SocialIcons';


const Contact = () => {
 return (

   <FadeInSection>
     <section>
       <div className='title'>
         <h2>Contact Me!</h2>
       </div>

       <br></br>
       <p>I am always looking to connect with others! Feel free to reach out </p>

       <div className="image-container">
       {/* Empty div with a background image */}
       <div className="repeated-background"></div>
       </div>

       <div>
         {/* Other content */}
         <SocialIcons />
       </div>
         <img src='/swe.jpg' className='swe'></img>


     </section>
   </FadeInSection>
 );
}


export default Contact;