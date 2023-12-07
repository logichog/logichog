// import { useState } from 'react'
// import reactLogo from './assets/logo.png'
// import './Project.css'

import { Link } from "react-router-dom"

function Project() {
	return (
		<>
			<div className="container d-flex h-100 text-center">
				<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
					<header className="mb-auto">
						<div>
							<Link className='text-dark m-auto float-md-start mb-0 h3' to="/">Project</Link>
							<nav className="nav nav-masthead justify-content-center float-md-end">
								<img src="/imgs/profile.jpg" className="rounded-circle my-2" alt="Logichog logo" style={{ height: 50, }} />
							</nav>
						</div>
					</header>

					<main className="px-3">
						<h3>Project title</h3>
						<p>Subtitle</p>
						<p>infomatrion about the project</p>
					</main>

					<footer className="mt-auto">
						<p></p>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Project
