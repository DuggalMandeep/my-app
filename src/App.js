import React, {useState} from 'react';
import './App.css';
import { ResizableBox } from 'react-resizable';
// const { FaIcon } = require('react-fa-icon');
import { FaArrowsAlt,FaPlus,FaFolderPlus,FaTired } from 'react-icons/fa';
import { GoTextSize } from 'react-icons/go';
import Draggable from 'react-draggable';

function App() {
  const [dim, setDim] = useState({width:270,height:195});

  const handle = () => {
    return (<div className="handle"><GoTextSize className='handleIcon' /></div>)
  }

  const onResize = (event, {element, size}) => {
    // console.log("Mandeep");
    setDim({width: size.width, height: size.height});
  }

  return (
    <div className='App'>
    <div className="sticky-notes">
        <Draggable cancel='.handle' bounds=".App">
          <div className="box">
            <ResizableBox className="mandeep" handle={handle} minConstraints={[270, 195]} width={dim.width} height={dim.height} axis="both" onResize={onResize}>
              <div className="note-header">
                Hello
                </div>
              <div className="note-body">Mandeep</div>
            </ResizableBox>
          </div>
        </Draggable>
    </div>
    </div>
  );
}

export default App;
