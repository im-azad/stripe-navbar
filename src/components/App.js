import { AppProvider } from '../contexts/Context';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Submenu from './Submenu/Submenu';

function App() {
	return (
		<AppProvider>
			<Navbar />
			<Sidebar />
			<Hero />
			<Submenu />
		</AppProvider>
	);
}

export default App;
