// import { useState } from 'react'
// import reactLogo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <>
      <div className="container w-100 h-100 d-flex justify-content-around">
        <div className="row m-auto w-100 justify-content-evenly" style={{height:300,}}>
          <div className="col-5">
            <div className="col-12 row">
              <div className="col-auto"><p className='display-2 m-0'>HI</p></div>
              <div className="col py-3">
                <h3>
                my name is <strong>Teddy</strong>
                </h3>
                <p className="fw-bold">Thabang Teddy Moreasetla</p>
              </div>
            </div>
            <div className="col-12">
              <p className="fw-medium">A South African based web developer that mainly works with C# and JavaScript.</p>
              <p className="fw-normal">
                The libraries I work in are React, svelt and I have three years of work experience working in ASP.Net core building PIMs (Product Information Management), Admins, and Eccommase websites.
              </p>
              <button className='btn btn-dark'>See my portfolio</button>
              <button className='btn btn-secondary mx-2'>Contact me</button>
            </div>
          </div>
          <div className="col-auto " style={{height:300,}}>
            <img src="/imgs/profile.jpg" className="rounded-circle h-100" alt="Logichog logo"/>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
