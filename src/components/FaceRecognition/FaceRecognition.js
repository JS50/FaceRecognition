import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center boxi pa2 ma2 br3'>
		<img alt='' src={imageUrl} className='ma3 imgsize' />
		</div>
		);
}

export default FaceRecognition;