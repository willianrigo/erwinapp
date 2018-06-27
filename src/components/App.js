import '../assets/css/App.css';
import React, { Component } from 'react';
import ImgUploader from "../components/ImgUploader";
const electron = window.require('electron')
const { remote: { app, webContents  } } = electron

class App extends Component {

  render() {
    return (
      <div>
          <h1>Hello, Electron!</h1>
          <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
          <p>Rendering this by using React!</p>
          <ImgUploader />
      </div>
    );
  }
}

export default App;