import { useState } from 'react';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForms from'./components/TextForms';
import React from 'react'
import ShowAleart from "./components/ShowAleart";





function App(props) {
  let bgColorOfNavBar = {backgroundColor:'blue'};
  const [Mode, setMode] = useState ('gray');
  const [nav, setNav]= useState(bgColorOfNavBar)
  //const [fontCol, setFontCol]= useState({color: 'black'})
  const[popUp , setPopUp] = useState({msg: null , type: null})

  const  MessageCall =(message , stat) =>{
    setPopUp({msg : message,  type: stat  })
  
    setTimeout(()=> {
      setPopUp({msg: null , type: null});
    }, 2000) //in second
  }

  

  const changeMode =() =>{
    if (Mode=== 'gray'){
    setMode('black')
    bgColorOfNavBar = {backgroundColor:'blueviolet'};
    setNav( bgColorOfNavBar)
   //setFontCol({color: 'white'})
   MessageCall('Dark Mode was Enabled-- Successfully!', "success");
}

    else {
      setMode('gray')
      setNav(bgColorOfNavBar)
      //setFontCol({color: 'black'})
     
      MessageCall('Dark Mode was Disabled-- Successfully!', "success");
    }
  }
  

  const [comp , setComp] = useState(<TextForms /* color = {fontCol} */ MessageCall={MessageCall}  /> )
    function showAbout () {
      // console.log("about")
      setComp( <About />)
      
      }


 document.body.style.backgroundColor = Mode; //to control whole bg color

  return (
    // JS Fragments <>
    <> 
   <NavBar mode={nav}  click= {changeMode} showAbout={showAbout}  />
   <div className='container'>
   <ShowAleart aleartMessage={popUp.msg}  status= {popUp.type}/>
   {/* <TextForms  color = {fontCol} MessageCall={MessageCall}/>   */}
   {/* remember if u want to export a arrow func by props then u must use the same name as function */}
   {comp}
  {/* for toggle 2 states in between textform & about */}

   {/* <About /> */}
   </div>
  
    </>
  );
}

 export default App;


