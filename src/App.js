import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {

  const[getText,setText] = useState("");

  const handleOnChange = (event) =>{
    console.log(event.target.value);
    setText(event.target.value);
  }

  const handleResetClick = () =>{
    setText("");
  }

  return (

    <div className="App">
        <div className="left-div">
            <div className="container-left">
                <div className="tab-left">Edit</div>
                <div className="reset" onClick={handleResetClick}>🔁 Reset</div>
            </div>
            <div class="below-left"> 
              <textarea className="write-markdown" 
              value={getText}
              onChange={handleOnChange}>
              </textarea>
            </div>
        </div>

        <div className="right-div">
          <div className="container-right">
            <div className="tab-right">Preview.md</div>
          </div>
          <div className="right-below"> 
              <ReactMarkdown>{getText}</ReactMarkdown>
          </div>
        </div>
    </div>
  );
}

export default App;
