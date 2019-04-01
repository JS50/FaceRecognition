import React from 'react';
import './ImageLinkform.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p classname='f3'>
				{'This legendary dorky KDUB will detect faces in your pictures. Give it a try!'}
			</p>	
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center ma4' type="text" onChange={onInputChange} />
					<a 
						className='f3 br2 pt5 pb2 link dim ph3 dib white bg-black ml1 pointer'
						onClick={onButtonSubmit}
					>Detect</a>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;