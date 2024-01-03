import Typed from "react-typed";
import React from "react";


const Home = () => {
   return (
       <div className="home-container">
           <div className="title">
               <h1>Sarika Pasumarthy</h1>
           </div>
           <div className="content">
               <div className="flex-container">
                   <div className="image-container-home">
                       <img src='/homepage_picture.png' alt="pic" className="image-home" />
                       <img src='/homepage_picture2.png' alt="pic" className="image-home" />
                   </div>
                  
               </div>
               <div className="animated-typing">
                       <Typed
                           strings={[
                               "I am... A Full Stack Developer",
                               "I am... A Lover of Learning",
                               "I am... A Mystery Novel Aficionado",
                               "I am... An Aspiring Entrepreneur"
                           ]}
                           typeSpeed={150}
                           backSpeed={100}
                           loop
                           onBegin={(arrayPos, stringPos) => {
                               if (arrayPos === 7 && stringPos === 0) {
                                   // Disable backspacing for the first character of the first string
                                   return false;
                               }
                           }}
                       />
                   </div>
                   {/* <img src='/homepage_image_3.png' alt="pic" className="image" /> */}


                   <div className="title">
                       <h3>Some of my favorite music recently :) </h3>
                   </div>
                   <br></br>
                   <iframe src="https://open.spotify.com/embed/playlist/6CbB5XOh62lrqNWa8qBhMu?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
           </div>
       </div>
   );
};


export default Home;