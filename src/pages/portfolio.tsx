// import { useState } from 'react'
// import reactLogo from './assets/logo.png'
// import './Portfolio.css'

import { Link } from "react-router-dom"

function Portfolio() {
  return (
    <>
      <div className="container d-flex h-100">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <Link className='text-dark m-auto float-md-start mb-0 h3' to="/">Portfilio</Link>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <img src="/imgs/profile.jpg" className="rounded-circle my-2" alt="Logichog logo" style={{ height: 50, }} />
              </nav>
            </div>
          </header>

          <main className="px-3">
            <Link to="/Project/1">Project 1</Link>
            <Link to="/Project/2">project 2</Link>
          </main>

          <footer className="mt-auto">
          </footer>
          <p>.</p>
        </div>
      </div>
    </>
  )
}

export default Portfolio
