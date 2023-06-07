import React from 'react'
import { Link } from 'react-router-dom'


function NavBar(){
 
    return (
      <div className='pb-5'>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={'/'}>
            <div className="navbar-brand">QuadB - TECH</div>
          </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  
}

export default NavBar