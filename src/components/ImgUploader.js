import React, { Component } from 'react';

class ImgUploader extends Component {
    constructor(props){
        super(props);
        this.state = {selectedFile: null}
    }

    // componentDidMount() {
    //     this.setState({selectedFile: null})
    // }

    // fileChangedHandler(e) {
    //     e.preventDefault();
    //     this.setState({selectedFile: e.target.files[0]})
    // }

    // uploadHandler(e) { 
    //     e.preventDefault();        
    //     console.log(this.state.selectedFile)
    // }

    // imageRenderer(e) {
    //     e.preventDefault();
    //     return(
    //         <div>
    //             <img
    //             className="post-image"
    //             src={imgUrl}
    //             alt={description}
    //             />
    //         </div>
    //     )
    // }

    fileChangedHandler = (event) => {
        event.preventDefault();
        this.setState({selectedFile: event.target.files[0]})
    }

    uploadHandler = (event) => {
        event.preventDefault();        
        console.log(this.state.selectedFile)
        localStorage.setItem('selectedFile', JSON.stringify(this.state.selectedFile));
    }

    // renderUploadedImage = (event) => {
    //     event.preventDefault();
    //     this.state.onChange
    // }

    render(){
        return(
            <div>
                <form>
                    <input type="file" accept="image/*" onChange={this.fileChangedHandler.bind(this)} />
                    <button type="submit" onClick={this.uploadHandler.bind(this)}>Upload!</button>
                    {this.state.selectedFile !== null &&  (
                        <img src={this.state.selectedFile.path} alt="test" />
                        // console.log("Caminho: " + this.state.selectedFile.path)
                    )}                
                </form>
            </div>
        );
    }
}

export default ImgUploader;