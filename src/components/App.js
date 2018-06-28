import '../assets/css/App.css';
import React, { Component } from 'react';
import ImgUploader from "../components/ImgUploader";
const electron = window.require('electron')
const { remote: { app, webContents, ipcRenderer } } = electron

class App extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
    

    // electron.ipcRenderer.on('printer:sendInfo', (event, info) => {
    //   document.querySelector('#printerInfo').innerHTML = `Printer info: ${info}`;
    // });
  }

  componentWillUnmount() {
    // you need to unbind the same listener that was binded.
    document.querySelector(".printerCaller").removeEventListener('printer:requestInfo');
  }

  makeGetRequest = (event) => {
    event.preventDefault();

    if(typeof(address) != "string")
        return;

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

getPrinterInfo = (event) => {

}
  render() {
    return (
      <div>
          <h1>Hello, Electron!</h1>
          <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
          <p>Rendering this by using React!</p>
          <ImgUploader />

          

          <button className="apiCaller">Make API Call</button>
          <button className="printerCaller">Get Printer Info</button>
          {console.log("electron aqui:",electron)}
          <p id="printerInfo"></p>

            {document.querySelector(".printerCaller").addEventListener('requestPrinterInfo', (event) => {
                info = electron.ipcRenderer.sendSync('printer:requestInfo');
                document.querySelector('#printerInfo').innerHTML = `Printer info: ${info}`;
            })}
      </div>
    );
  }
}

export default App;