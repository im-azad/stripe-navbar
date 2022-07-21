import { createContext, useContext, useState } from 'react';
import subLinks from '../data';

//create context
const AppContext = createContext();

// create appProvider
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		setLocation(coordinates);
		setIsSubmenuOpen(true);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				openSubmenu,
				closeSidebar,
				closeSubmenu,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

//custom hooks
export const useGlobalContext = () => {
	return useContext(AppContext);
};
