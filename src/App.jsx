import React, {useState} from 'react';
import Header from './components/header/Header';
import Canvas from './components/canvas/Canvas';
import MemeSelector from './components/memeSelector/MemeSelector';
import Settings from './components/settings/Settings';
import PreviewModal from './components/previewModal/PreviewModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [meme, setMeme] = useState({});
  const [response, setResponse] = useState({data: {}});
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="container">

      <div className="row mt-5">
        <div className="col">
          <MemeSelector setMeme={setMeme}/>
          <Settings 
          meme={meme} 
          setResponse={setResponse} 
          setShowModal={setShowModal}
          />
        </div>

        <div className="col">
          <Canvas meme={meme}/>
        </div>
      </div>

      <PreviewModal 
      response={response}
      setShowModal={setShowModal}
      showModal={showModal}
      meme={meme}
      />
    </div>
  );
}

export default App;
