import React, { Component } from 'react';

 class Box extends Component {
    render() {
        return (
            <div>
                 <div
                  style = {{
                height:  `${this.props.height}em`,
                width:  `${this.props.width}em`,
                backgroundColor:  this.props.color
            }}>
            </div> 
            <button onClick = {this.props.removeBox}>X</button>
            </div>
        )
    }
}



export default Box;
//this component should display a div with a backgroundColor width and height based on props passed to it.