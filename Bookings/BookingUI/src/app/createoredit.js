import React from 'react';

class CreateOrEdit extends React.Component {
    constructor(props) {
        super(props);             
    }
    render() {
 
        return (
            <a onClick={this.onClick.bind(this)} href='#'>New Room</a>
        );


    }
    onClick () {        
        this.props.onClick();
    }
}
module.exports = CreateOrEdit;