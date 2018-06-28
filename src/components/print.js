// import React, { Component } from 'react';

// class APIHandler extends Component{

//     constructor(){
//         document.addEventListener('printer:response', (event) => {
//             event.preventDefault();
//             const { path } = document.querySelector('input').files[0];

//             ipcRenderer.send('video:submit', path);
//         });
//     }

//     componentWillUnmount() {
//         // you need to unbind the same listener that was binded.
//         document.removeEventListener('scroll', this.onScroll, false);
//     }



//     render(){
//         return(
//             <form>
//                 <input type="file" accept="image/*" onChange={this.fileChangedHandler.bind(this)} />
//                 <button type="submit" onClick={this.uploadHandler.bind(this)}>Upload!</button>
//                 {this.state.selectedFile !== null &&  (
//                     <img src={logo} alt="test" />
//                 )}
//             </form>

            
            

//             ipcRenderer.on('video:metadata', (event, duration) => {
//                 document.querySelector('#result').innerHTML = `Video is ${duration} seconds`;
//             });
//         )
//     }
// }