import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<main className="bg-gray-50 dark:bg-cinema-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-cinema-accent selection:text-cinema-900 transition-colors duration-300">
				<Navigation />
				<Hero />
				<Portfolio />
				<About />
				<Resume />
				<Services />
				<Contact />
			</main>
		</ThemeProvider>
	);
};

export default App;