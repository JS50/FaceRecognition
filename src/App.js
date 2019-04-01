import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn : false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
   const  { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
          <nav>
            <div className="flex justify-between">
               <div className="fl w-100 w-50-ns pa2">
                <Logo />
               </div>
              <div className="fl w-100 w-50-ns pa2">
                <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
              </div>
             </div>
        </nav>
        { this.state.route === 'home'
        ? <div>
            <Rank />
            <ImageLinkForm 
             onInputChange={this.onInputChange} 
             onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
          </div>
        : (
            route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        } 
      </div>
    );
  }
}

export default App;
