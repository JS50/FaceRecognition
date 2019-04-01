import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center'>
			<div className='absolute boxi pa2 ma2 br3'>
				<img id='inputimage' alt='' src={imageUrl} className='ma3 imgsize' />
				<div className='bounding-box' 
						style  ={{left: box.leftCol, 
								right: box.rightCol, 
								top: box.topRow, 
								bottom: box.bottomRow}}>
				</div>
			</div>
		</div>
		);
}

export default FaceRecognition;