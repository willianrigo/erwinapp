import React, { Component } from 'react';
import logo from "../assets/images/logo.svg";

class ImgUploader extends Component {
    constructor(props){
        super(props);
        this.state = {selectedFile: null}
    }

    fileChangedHandler = (event) => {
        event.preventDefault();
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = (event) => {
        event.preventDefault();        
        console.log(this.state.selectedFile)
        // localStorage.setItem('selectedFile', JSON.stringify(this.state.selectedFile));
    }

    render(){
        return(
            <div>
                <form>
                    <input type="file" accept="image/*" onChange={this.fileChangedHandler.bind(this)} />
                    <button type="submit" onClick={this.uploadHandler.bind(this)}>Upload!</button>
                    {this.state.selectedFile !== null &&  (
                        <img src={logo} alt="test" />
                    )}
                </form>
            </div>
        );
    }
}

export default ImgUploader;