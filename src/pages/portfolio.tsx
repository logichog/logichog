// import { useState } from 'react'
// import reactLogo from './assets/logo.png'
// import './Portfolio.css'

function Portfolio() {
  return (
    <>
      <div className="container w-100 h-100 d-flex justify-content-around">
        <div className="row m-auto w-100 justify-content-evenly" style={{ height: 300, }}>
          <div className="col-5">
            <div className="col-12 row">
              <div className="col-auto"><p className='display-2 m-0'>HI</p></div>
              <div className="col py-3">
                <h3>
                  my name is <strong>Teddy</strong>
                </h3>
                <p className="fw-bold">Welcome to my portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
