import '../assets/css/App.css';
import React, { Component } from 'react';

class App extends React.Component {

  // state = {selectedFile: null}

  // fileChangedHandler = (event) => {
  //   this.setState({selectedFile: event.target.files[0]})
  // }
  
  // uploadHandler = () => { 
  //   console.log(this.state.selectedFile)
  //   debugger
  // }

  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <p>I hope you enjoy using basic-electron-react-boilerplate to start your dev off right!</p>
        <p>Rendering this by using React!</p>

        <form>
          <input type="file" onChange={this.fileChangedHandler} />
          <button type="submit " onClick={this.uploadHandler}>Upload!</button>
        </form>
      </div>
    );
  }
}

export default App;