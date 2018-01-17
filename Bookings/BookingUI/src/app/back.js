import React from 'react';
import React from 'react';

class Back extends React.Component {
    constructor(props) {
        super(props);             
    }
    render() {
 
        return (
            <a onClick={this.onBackClick.bind(this)} href='#'>Back to List</a>
        );


    }
    onBackClick () {        
        this.props.onBackClick();
    }
}
module.exports = Back;