import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner"><img src={logo} alt="A beautiful masterpiece of a logo" /></div>
			</Tilt>
		</div>
		);
}

export default Logo;