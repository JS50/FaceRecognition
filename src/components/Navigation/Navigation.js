import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
	return (
		<p 
		className="fr f3 br2 pt5 ma4 mt3 pb2 link dim ph3 mb2 dib white bg-black" 
		onClick={() => onRouteChange('signout')}>Sign out
		</p>
		);
	} else {
		return (
			<div>
			<p className="fr f3 br2 pt5 ma4 mt3 pb2 link dim ph3 mb2 dib white bg-black" onClick={() => onRouteChange('signin')}>Sign in</p>
			<p className="fr f3 br2 pt5 ma4 mt3 pb2 link dim ph3 mb2 dib white bg-black" onClick={() => onRouteChange('register')}>Register</p>
			</div>
			);
	}
}

export default Navigation;