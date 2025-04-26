import React, { Component } from "react";

// function Images(linkgambar) {
//         return(
//             <img src={linkgambar} width="200px" height="100px" alt="Food" />
//         );

// }

class Image extends Component { 
    render() {
        return (
            <img src={this.props.linkgambar} width="200px" height="100px" alt="Food" />
        )
    }
}
export default Image;