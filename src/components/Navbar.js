import React from 'react'

function Navbar() {
  return (
    <>
    <header>
    <div className="collapse bg-dark" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">About</h4>
            <p className="text-muted">BOT system.</p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">SESSION</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark bg-dark box-shadow">
      <div className="container d-flex justify-content-between">
        <a href="#" className="navbar-brand d-flex align-items-center">
      
       &nbsp;    <strong> &nbsp; BOT Management</strong>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
  
  <section className="jumbotron text-center">
    <div className="container">
      <h1 className="jumbotron-heading">BOT System</h1>
      
        <a href="#" className="btn btn-primary my-2">Main call to action</a>
        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
    </div>
  </section>
  </>
  )
}

export default Navbar