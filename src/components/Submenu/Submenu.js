import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../contexts/Context';
import './Submenu.css';

// global context
const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext();

	// useRef react hooks use
	const container = useRef(null);
	const [columns, setColumns] = useState('col-2');

	// every time location change value change
	useEffect(() => {
		setColumns('col-2');
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;

		//submenu links columns change
		if (links.length === 3) {
			setColumns('col-3');
		}
		if (links.length > 3) {
			setColumns('col-4');
		}
	}, [location, links]);
	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { icon, url, label } = link;
					return (
						<a key={index} href={url}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
