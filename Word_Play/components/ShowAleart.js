import React from 'react'

export default function ShowAleart(props) {
  return (
    
         <div className={`alert alert-${props.status}`} role="alert">
        {props.aleartMessage}
         </div>
  )
}
