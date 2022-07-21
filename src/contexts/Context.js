import { createContext, useContext, useState } from 'react';
import subLinks from '../data';
//create context
const AppContext = createContext();

// create appProvider
export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: '', links: [] });
	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	// submenu open
	const openSubmenu = (text, coordinates) => {
		const page = subLinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
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
				page,
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
