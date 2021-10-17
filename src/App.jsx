import React, { useState } from 'react';
import afternoon from "./images/a.jpg";
import morning from "./images/morning.jpg";
import night from "./images/night.jpg";


const App = () =>{
   

// time show
const showTime = new Date().toLocaleTimeString();
const [ctime, setCtime] = useState(showTime);

const UpdateTime = () =>{
    let showTime = new Date().toLocaleTimeString();
    setCtime(showTime);
 }
 setInterval(UpdateTime,1000);

 // date show 
const showDate = new Date().toLocaleDateString();

// name
const name = 'Mitu';

// Greet color change
const styleCss ={ };

// background img and text
const bgImg ={ };
    
     let currDate = new Date();
     currDate = currDate.getHours();
     let greetings = ' ';


if(currDate>=1 && currDate <12){
     greetings='Good Morning';
     styleCss.color = '#fff';
    bgImg.backgroundImage=`url(${morning})`;
    bgImg.color='#fff';  
}else if(currDate>=12 && currDate <=16){
    greetings='Good Afternoon';
    styleCss.color = '#000';
    bgImg.backgroundImage=`url(${afternoon})`; 
    bgImg.color='#000';
}else{
   greetings='Good Night';
   styleCss.color = 'orange';
   bgImg.backgroundImage=`url(${night})`; 
   bgImg.color='#fff';
 }

 return (
<>
  <section className='greet' style={bgImg}>
    <h1>{ctime}</h1>
    <h2><span style={styleCss}>{greetings} ,</span>{name}</h2> 
    <h3>{showDate}</h3>
   </section>
  </>
);
};
export default App;
