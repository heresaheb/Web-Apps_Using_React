import React from 'react'



export default function About(props) {
  document.title='About Me';
  document.body.style.backgroundColor = props.Mode;

  return (
      <>
      
     <h1 className="text-light">About Me</h1>
  <div className="text-light">
    <h3>What is WordPlay?</h3>
    
 <p>Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect mistakes. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.

Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordPlay will help to make sure its word count reaches a specific requirement or stays within a certain limit.

In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.
<br/>
<strong>Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.</strong> </p>
  </div>


    </>
  );
}

