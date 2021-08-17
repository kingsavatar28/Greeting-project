import React, { useState } from "react";
import './index.css';
 const App = () =>{
  const [fname,setName]=useState();
  const [finame,setFiname]=useState("who are you ?");
  const [greetings,setGreetings]=useState();
  const enterDetails = (event) =>{
    setName(event.target.value);
    };
  const submitDetails = () =>{
   setFiname(`${fname} !`);
   if(fname=="")
   {setGreetings("Who are you");}
   else
   {
   setGreetings("Nice To Meet You");
   }
  };
  return (
    <>
    <div className="body">
    <div className="main">
    <h1>Hello {finame}</h1>
    <p>{greetings}</p>
    <input type ="text" placeholder =" Please Enter Your Name"
    onChange={enterDetails} value={fname}
      />
      <br />
    <button onClick={submitDetails}>Enter</button>
    </div>
    </div>
    </>
    
    

   );
 };

export default App;
