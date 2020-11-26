import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Canvas from './components/canvas/Canvas';
import MemeSelector from './components/memeSelector/MemeSelector';
import Settings from './components/settings/Settings';
import PreviewModal from './components/previewModal/PreviewModal';
import logo from './img/memeFace.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [meme, setMeme] = useState({});
  const [response, setResponse] = useState({data: {}});
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <div className="container-fluid">
        <Navbar className="justify-content-center">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="52"/>
          </ Navbar.Brand>

          <Navbar.Brand className="img-fluid">
            <h1 className="logo-text">Meme<span className="text-danger display-4 logo-text">Creator</span></h1>
          </ Navbar.Brand>
        </Navbar>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12">
            <MemeSelector setMeme={setMeme}/>
            <Settings 
            meme={meme} 
            setResponse={setResponse} 
            setShowModal={setShowModal}
            />
          </div>

          <div className="col-sm-6 col-12">
            <Canvas meme={meme}/>
          </div>
        </div>
      </div>
      

      <PreviewModal 
      response={response}
      setShowModal={setShowModal}
      showModal={showModal}
      meme={meme}
      />
    </>
  );
}

export default App;
