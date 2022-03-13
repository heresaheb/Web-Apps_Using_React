import React from  'react'



export default function NavBar(props) {

 

  return (
    <>
    <div>
      <nav className= "navbar navbar navbar-expand-lg navbar-dark bg" style={props.mode}>
<div className="container-fluid">
  <a className="navbar-brand" href="/" >Text Customized</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li> */}
      <li className="nav-item dropdown">
      {/* <a className="nav-link active" aria-current="page" href="#" >
          About Me
        </a> */}
       <button type="button" className="btn btn-link text-light" onClick={props.showAbout}>About Me</button>
      </li>
      
    </ul>
    <div className="form-check form-switch my-4">
  <input className="form-check-input " type="checkbox" onClick={props.click} id="flexSwitchCheckDefault" />
  <label className="form-check-label text-light"  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      </div>
    </div>
    </nav>
    </div>
   
    </>
  );
}
