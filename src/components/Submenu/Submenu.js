import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../contexts/Context';

import './Submenu.css';
const Submenu = () => {
	const {
		isSubmenuOpen,
		// page: { page, links },
		location,
	} = useGlobalContext();

	const container = useRef(null);
	// every time location change value change
	useEffect(() => {
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
	}, [location]);
	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}
		>
			submenu
		</aside>
	);
};

export default Submenu;
