import { Link } from "react-router-dom"

function Contact() {
	return (
		<>
			<div className="container d-flex h-100 text-center">
				<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
					<header className="mb-auto">
						<div>
							<Link className='text-dark m-auto float-md-start mb-0 h3' to="/">Contact</Link>
							<nav className="nav nav-masthead justify-content-center float-md-end">
								<img src="/imgs/profile.jpg" className="rounded-circle my-2" alt="Logichog logo" style={{ height: 50, }} />
							</nav>
						</div>
					</header>

					<main className="px-3">
						<h3>0786054005</h3>
						<p>teddymorwasetla@gmail.com</p>
						<p>Logichog@gmail.com</p>
					</main>

					<footer className="mt-auto text-white-50">
						<p>.</p>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Contact
