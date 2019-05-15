import React from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  
  return (



    <div className="App">

    
    <div className='title'>
    Thea's Portfolio</div>
    <div className='subtitle'>
    About Me</div>

    <div className='box'>
   
      <div className='flex1' >
        

       <img src={require('./photo.jpg' )   }  width="742" height="383" />
      
       
       
       

    
      </div>
      

      <div className='flex2' >
      <h2>Hi, my name is Thea, a freshman in NYUShanghai. I am good at designing web page and doing basic coding. This semester I attended Application Lab and last semester I attended Communication Lab. I would like to create interactive websites and app websites to find much fun or help with small problems in our daily life. </h2>
     
  
     
      </div>


      
     
</div>
      <div className='subtitle'>
     My project</div> 
   
     <div className='box'>
   
        <div className='flex11' >
        <div className='containert'><h2> Group Project:</h2>
      <h2> Fixer</h2>
      <p >Scroll Down...</p></div>
        <div className='container'>
        <h1>Summary</h1> 
        <h1>Research</h1>
        <h1>Prototype</h1>
        
        <h1>Future Work</h1>
        </div>
         <div className='container11'><h1>Summary</h1> 
         <h2> Fixer is more than a Digital Middleman that connects labor services to people in need. 
We host transactions and streamline the process. 
</h2></div>
         <div className='container21'><h1> Research</h1>
         <h2>When doing brainstorm for our group project, we did a lot of research on current labour service in the marketing. Besides, we found exsiting app to think about how to improve them. In the later stage, I focused more on coding part and my partners focused more on building business models. For my coding part, I discussed with learning assistants and instructors and finally decided to use Ant Design to arrange our app. During the process of building app, I researched a lot on how to apply different components, how to use online resources and how to use Route. It was really meaningful and interesting experience.  </h2>
         </div>
         <div className='container31'>
         <div className='video'>
         <video width="742" height="383" controls >
      <source src="./ptgp.mp4" />
      </video>
       </div>
       <h1>Prototype </h1> 
       
         </div>
         <div className='container41'> <h1>Future Work</h1>
         <h2>Now, the Fixer is only a wevsite demo. In the future, I want to spend more time to build it as a Wechat mini program and make it easier to be used on the phone. Besides, to make it more competitive, I am considering to contact local police station to record each in-house fixing event, whcih can largely guarantee the security of users. </h2></div>
         
         



    
      </div>

      <div className='flex21' >
      <div className='mask'>
       <a href = 'https://vast-beach-81174.herokuapp.com/'>click here to see more</a>
       </div>
      <img src={require('./gp.png' )   }  width="742" height="383" />
      
  
     
      </div>


      
     
</div>
<div className='subtitle'>
   
   
    </div> 
    
     <div className='box'>
    
        <div className='flex12' >
        <div className='mask'>
       <a href = 'https://fast-reaches-96881.herokuapp.com/'>click here to see more</a>
       </div>
        <img src={require('./sp.png' )   }  width="742" height="383" />
   

    
      </div>

      <div className='flex22' >
      <div className='containert'><h2> Side Project:</h2>
      <h2> Color Mixer</h2>
      <p >Scroll Down...</p></div>
      <div className='container'>
      <h1>Summary</h1> 
        <h1>Research</h1>
        <h1>Prototype</h1>
        
        <h1>Future Work</h1>
        </div>
         <div className='container12'><h1>Summary</h1>
         <h2> Color Mixer is an application for people to explore the posibility when mixing different colors. It is also a useful application for people who draw on the computer to find more colors.
</h2>
      </div>
         <div className='container22'><h1> Research</h1>
         <h2>The biggest challenge I meet is that people are more familiar with RGB while css uses HEX. Therefore, in order to improve users'experience, for most of my research, I focus on functions which can transform RGB to HEX and can add two RGB to a new RGB. Also, in order to add more fun, I remove the buttons so that the colors can immediately change when users finish inputing numbers. So, another thing I did some reseach is how to write new functions to replace buttons. </h2></div>
        
         <div className='container32'><h1>Prototype </h1> </div>
         <div className='container42'> <h1>Future Work</h1>
         <h2>
           For current Color Mixer, there still remain a tiny bug, that is the color2 can influence the colo1. In the future, I will fix this bug and insure the color1 and color2 can work individually. Besides, I want add more functions. For example, users can save and share their mixed colos and at the same time, they can save the colors mixed and shared by other people. Also, I want to users can see their history mixed colors in their information page.</h2></div>
         



    
    
      
  
     
      </div>


      
     
</div>
<div className='subtitle'>
     Contact me: ys3421@nyu.edu
   
    </div> 
    
     
 

     
    </div>
    
  );
}

export default App;
