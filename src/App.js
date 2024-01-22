import logo from './logo.svg';
import './App.css';
import { Client } from "@saplingai/sapling-js/client";

function App() {
  const onTextChange = (e) => {
    const text = e.target.value;
    const apiKey = '';
    const client = new Client(apiKey);
    client
      .edits(text)
      .then(function (response) {
      console.log(response.data);
    })
  }
  
  return (
    <div className="App">
      <input type="text" onChange={onTextChange}></input>
    </div>
  );
}

export default App;
