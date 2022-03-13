import React, {useState} from 'react'
export default function TextForms(props) {
     const[text, setText] = useState("");
  
  
  const runForUp = () =>{
    if(text !== ""){
    let temp = text.toUpperCase();
    setText(temp);
    {props.MessageCall("Capitalized all ltters-- Successfully!","success");} }

    else {
      {props.MessageCall("No text found inside the box","danger");
    }

  }}

 
  const changeOnUp = (event) =>{
    setText(event.target.value);
  
  }

  const runForLower = () =>{
    if(text !== ""){
    let temp2 = text.toLowerCase();
    setText(temp2)
    {props.MessageCall("Small all letters-- Successfully!","success");}
    }
    else {
      {props.MessageCall("No text found inside the box","danger");
    }
  }
}

  const runForClear = () =>{
    setText("")
    {props.MessageCall("All Chars Are Cleared-- Successfully!","warning");}
  }
  
  const runForCopy = () =>{
    if(text !== ""){
    let copyText="";
  copyText = text.split(/[]+/);  //Regex for remove extra spaces between texts
  copyText= copyText.join(" ");
  navigator.clipboard.writeText(copyText);

  {props.MessageCall(" All Text Copied to Clipboard-- Successfully!","success");}}

  else {
    {props.MessageCall("No text found inside the box","danger");
  }

  }
}
 
  const countWords =(text) =>{
    let count = 0;
    let array = text.split(/\s+/);
    for(let i=0; i<array.length; i++){

      if(array[i] !=="" ){
      count +=1;} 
    }
    return count;
  } 
  
  // let previousText;
  // let x='';
  // previousText= text ;
  //   if(previousText !== '' && previousText !== null){
  //     x = previousText;
  //     console.log(x)
  //    //undoFunc(x);
  //   }
  // const undoFunc = () =>{
     
  // let undo = text ;
  // let x='';
  // if(undo !=="" && undo !==" " && undo !==null ){
  //   console.log(undo +"inside if undo var");
  //   x = undo;  setText(x);}
  //   console.log(x+" x value");
    

  // }

  document.body.style.backgroundColor = props.Mode;
  //to change entire component bg color
  return (
    <>
    
<div>
  <h1 style={props.color} className="text-light" >Word Play &gt;_&lt; </h1>
  <textarea className="form-control" value={text}  onChange={changeOnUp} placeholder='Entered All Texts Wil Be Shown Below' rows="8"></textarea>
</div>
<button className='btn btn-primary my-2' onClick={runForUp} /*onClick={ showAleart} */>Convert to UpperCase</button>
<button className='btn btn-success mx-2' onClick={runForLower}> Convert to LowerCase</button>

<button className='btn btn-danger mx-2' onClick={runForClear}> Erase Text</button>
{/* <button type="button" className="btn btn-warning" onClick={undoFunc}>Undo</button> */}

<h4 style={props.color} className="text-light" >Word Summary :</h4>
<p className='my-2 text-light'style={props.color}> Total [ {countWords(text)} ]  Words and [ {text.length} ] Chars <br />
 Reading Speed ({0.08 * countWords(text)}) WPM</p>
 <h3 style={props.color} className="text-light" >Text Preview  <button className='btn btn-success mx-2' onClick={runForCopy}> Copy Text
 </button>
</h3>
  <div className='text-light'>
  <p style={props.color}  >{text}</p>
  </div>
 
</>
  );
}

