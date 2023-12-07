import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App.tsx'
import './index.css'
import Home from './pages/home.tsx'
import Portfolio from './pages/portfolio.tsx';
import Project from './pages/project.tsx';
import Contact from './pages/contact.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	</React.StrictMode>,
)
