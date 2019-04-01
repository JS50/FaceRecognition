import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';


const particlesOptions = {
    particles: {
      "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
     "line_linked": {
      "enable": true,
      "distance": 157.82952832645452,
      "color": "#1e1515",
      "opacity": 0.5,
      "width": 1
    },
     "color": {
      "value": "#000000"
    },
}
}

const app = new Clarifai.App({
 apiKey: '49c9e5fa203941f48a56b1258c524d8c'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
  );
  }


  render() {
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions}/>
        <nav>
          <div className="flex justify-between">
             <div className="fl w-100 w-50-ns pa2">
              <Logo />
             </div>
            <div className="fl w-100 w-50-ns pa2">
              <Navigation />
            </div>
           </div>
      </nav>
      <Rank />
      <ImageLinkForm 
       onInputChange={this.onInputChange} 
       onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
