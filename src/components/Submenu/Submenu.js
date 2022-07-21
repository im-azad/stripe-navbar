import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../contexts/Context';

import './Submenu.css';
const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
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
			<h4>{page}</h4>
		</aside>
	);
};

export default Submenu;
