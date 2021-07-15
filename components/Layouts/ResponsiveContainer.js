import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const ResponsiveContainer = ({ children }) => {
	const isDesktop = useMediaQuery({
		query: '(min-device-width: 1224px)',
	});
	const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
	const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
	const isMobile = useMediaQuery({
		query: '(max-device-width: 1224px)',
	});

	return (
		<div>
			{isDesktop ? (
				<DesktopContainer child={children} />
			) : (
				<MobileContainer child={children} />
			)}
		</div>
	);
};

export default ResponsiveContainer;
